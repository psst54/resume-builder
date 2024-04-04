/** @jsxImportSource @emotion/react */
"use client";

import { useRef, useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import useDebounce from "@/hooks/useDebounce";

import { usePDF } from "@react-pdf/renderer/lib/react-pdf.browser.es.js";

import InputPage from "@components/inputRenderer/mainPage";
import PDFPage from "@components/pdfRenderer/mainPage";
import PDFPreViewer from "@components/pdfPreViewer";
// import { supabase } from "@libs/supabase";
import { refreshSession } from "@libs/refreshSession";

import axios from "axios";
import * as pdfjs from "pdfjs-dist";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

import { Page, Body, InputContainer, ViewerContainer } from "./styles";
import Header from "@components/Header";

function App() {
  console.error = () => {}; // todo : fix error
  const router = useRouter();
  const searchParams = useSearchParams();
  const uid = "1";
  const dispatch = null;

  const loadData = async () => {
    try {
      // const id = searchParams.get("resumeId");
      // const { data, error } = await supabase
      //   .from("resume")
      //   .select()
      //   .match({ id, uid });
      // if (error) throw new Error();
      // if (data.length === 0) throw new Error();
      // return data[0];
    } catch (e) {
      alert("이력서를 불러오지 못했습니다.");
      router.push("/");
    }
  };

  const [data, setData] = useState({});
  const [resumeId, setResumeId] = useState(null);
  const [resumeTitle, setResumeTitle] = useState("");
  const [mainColor, setMainColor] = useState("#003FC7");

  const [pdfComponent, setPdfComponent] = useState(
    <PDFPage data={data} mainColor={mainColor} />
  );
  const [instance, updateInstance] = usePDF({
    document: pdfComponent,
  });
  const canvasRef = useRef(null);
  const [maxPageNumber, setMaxPageNumber] = useState(1);
  const [pageNumber, setPageNumber] = useState(1);

  const renderCanvas = async ({ pageNumber }) => {
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
          .catch((e) => {});
      } catch (e) {}
    }
  };

  const saveResume = async () => {
    try {
      const { error: upsertError } = await supabase
        .from("resume")
        .update([
          {
            content: data,
            title: resumeTitle,
            modified_at: new Date(),
            main_color: mainColor,
          },
        ])
        .eq("id", resumeId);

      if (upsertError) throw new Error();
      alert("저장되었습니다.");
    } catch (e) {
      alert("저장에 실패했습니다. 잠시 뒤에 다시 시도해주세요.");
    }
  };

  const deleteResume = async () => {
    const result = confirm(
      "삭제한 파일은 되돌릴 수 없습니다. 삭제하시겠습니까?"
    );

    if (!result) return;

    try {
      const { error: upsertError } = await supabase
        .from("resume")
        .delete()
        .eq("id", resumeId);

      if (upsertError) throw new Error();
      alert("삭제되었습니다.");

      router.push("/");
    } catch (e) {
      alert("삭제에 실패했습니다. 잠시 뒤에 다시 시도해주세요.");
    }
  };

  useEffect(() => {
    loadData().then((res) => {
      setData(res.content);
      setResumeId(res.id);
      setResumeTitle(res.title);
      setMainColor(res.main_color);
    });
  }, []);

  useEffect(() => {
    // refreshSession(supabase, dispatch, setSignOut);
  }, []);

  useEffect(() => {
    setPdfComponent(<PDFPage data={data} mainColor={mainColor} />);
  }, [data, mainColor]);

  useEffect(() => {
    updateInstance({
      document: pdfComponent,
    });
  }, [pdfComponent]);

  useDebounce(
    () => {
      renderCanvas({ pageNumber: pageNumber });
    },
    [instance, pageNumber],
    1000
  );

  return (
    <Page>
      <Header />

      <Body>
        <InputContainer>
          <InputPage
            data={data}
            setData={setData}
            mainColor={mainColor}
            setMainColor={setMainColor}
            resumeTitle={resumeTitle}
            setResumeTitle={setResumeTitle}
            onSave={saveResume}
            onDelete={deleteResume}
            fileUrl={instance.url}
            fileName={`${resumeTitle}.pdf`}
          />
        </InputContainer>

        <ViewerContainer>
          <PDFPreViewer
            canvasRef={canvasRef}
            pageNumber={pageNumber}
            maxPageNumber={maxPageNumber}
            setPageNumber={setPageNumber}
          />
        </ViewerContainer>
      </Body>
    </Page>
  );
}

export default App;
