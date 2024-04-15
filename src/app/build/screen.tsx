/** @jsxImportSource @emotion/react */
"use client";

import { useRef, useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import useDebounce from "@/hooks/useDebounce";

import { usePDF } from "@react-pdf/renderer";

import InputPage from "@components/inputRenderer/mainPage";
import PDFPage from "@components/pdfRenderer";
import PDFPreViewer from "@components/pdfPreViewer";

import axios from "axios";
import * as pdfjs from "pdfjs-dist";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

import { container, body, inputArea, previewArea } from "./styles";
import Header from "@components/Header";
import { createClient } from "@/utils/supabase/client";
import { updateResume } from "@/utils/supabase/updateResume";
import { deleteResume } from "@/utils/supabase/deleteResume";
import type { Resume } from "@/types/resume";

export default function BuildScreen({
  resumeId,
  initialData,
}: {
  resumeId: string;
  initialData: Resume;
}) {
  // console.error = () => {}; // todo : fix error
  const router = useRouter();

  const [data, setData] = useState(initialData.content);
  const [resumeTitle, setResumeTitle] = useState(initialData.title);
  const [mainColor, setMainColor] = useState(initialData.main_color || "#000");

  const [pdfComponent, setPdfComponent] = useState(
    <PDFPage data={data} mainColor={mainColor} />
  );
  const [instance, updateInstance] = usePDF({ document: pdfComponent });
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [maxPageNumber, setMaxPageNumber] = useState(1);
  const [pageNumber, setPageNumber] = useState<number>(1);

  const renderCanvas = async ({ pageNumber }: { pageNumber: number }) => {
    if (!canvasRef.current) {
      return;
    }
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");

    if (instance.url) {
      const reader = new FileReader();

      try {
        await axios({
          responseType: "blob",
          url: instance.url,
        })
          .then(async (response) => {
            const file = response.data;

            if (file) {
              reader.onload = async (event) => {
                const pdfData = event.target.result;
                const loadingTask = pdfjs.getDocument({ data: pdfData });
                const pdf = await loadingTask.promise;
                setMaxPageNumber(pdf.numPages);
                const page = await pdf.getPage(pageNumber);
                const viewport = page.getViewport({ scale: 2 });

                canvas.height = viewport.height;
                canvas.width = viewport.width;

                const renderContext = {
                  canvasContext: context,
                  viewport,
                };

                page.render(renderContext);
              };

              reader.readAsArrayBuffer(file);
            }
          })
          .catch((error) => {});
      } catch (error) {}
    }
  };

  useEffect(() => {
    setPdfComponent(<PDFPage data={data} mainColor={mainColor} />);
  }, [data, mainColor]);

  useEffect(() => {
    updateInstance(pdfComponent);
  }, [updateInstance, pdfComponent]);

  useDebounce(
    () => {
      renderCanvas({ pageNumber: pageNumber });
    },
    [instance, pageNumber],
    1000
  );

  function onSave() {
    updateResume(createClient, resumeId, resumeTitle, data, mainColor);
  }

  function onDelete() {
    if (!confirm("삭제한 파일은 되돌릴 수 없습니다. 삭제하시겠습니까?")) {
      return;
    }

    try {
      deleteResume(createClient, resumeId);
      alert("삭제되었습니다.");
      router.push("/");
    } catch (error) {
      alert("삭제에 실패했습니다. 잠시 뒤에 다시 시도해주세요.");
    }
  }

  return (
    <div css={container}>
      <Header />

      <div css={body}>
        <div css={inputArea}>
          <InputPage
            data={data}
            setData={setData}
            mainColor={mainColor}
            setMainColor={setMainColor}
            resumeTitle={resumeTitle}
            setResumeTitle={setResumeTitle}
            onSave={onSave}
            onDelete={onDelete}
            fileUrl={instance.url}
            fileName={`${resumeTitle}.pdf`}
          />
        </div>

        <div css={previewArea}>
          <PDFPreViewer
            canvasRef={canvasRef}
            pageNumber={pageNumber}
            maxPageNumber={maxPageNumber}
            setPageNumber={setPageNumber}
          />
        </div>
      </div>
    </div>
  );
}
