/** @jsxImportSource @emotion/react */
"use client";
import react from "react";

import { usePDF } from "@react-pdf/renderer/lib/react-pdf.browser.es.js";
import { useAppSelector } from "@/redux/hooks";

import InputPage from "@components/inputRenderer/mainPage";
import InputHeader from "@components/inputRenderer/inputHeader";
import PDFPage from "@components/pdfRenderer/mainPage";
import PDFPreViewer from "@components/pdfPreViewer";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

import axios from "axios";
import * as pdfjs from "pdfjs-dist";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

import {
  Page,
  Header,
  HeaderTtile,
  Body,
  InputContainer,
  ViewerContainer,
} from "./styles";

function App() {
  console.error = () => {}; // todo : fix error
  const [mainColor, setMainColor] = react.useState("#003FC7");
  const uid = useAppSelector((state) => state.userReducer.resume_builder_id);
  const resumeId = "123";

  const loadData = () => {
    try {
      const tmpData = require("/tmpData.json");

      if (tmpData) return tmpData;

      throw new Error();
    } catch (e) {
      return {
        header: {},
        body: [
          {
            title: "Section Title",
            type: "text",
            desc: "작성을 시작해보세요.",
          },
        ],
      };
    }
  };

  const [data, setData] = react.useState(loadData());
  const [pdfComponent, setPdfComponent] = react.useState(
    <PDFPage data={data} mainColor={mainColor} />
  );
  const [instance, updateInstance] = usePDF({
    document: pdfComponent,
  });
  const [cnt, setCnt] = react.useState(0);
  const canvasRef = react.useRef(null);
  const [maxPageNumber, setMaxPageNumber] = react.useState(1);
  const [pageNumber, setPageNumber] = react.useState(1);

  const renderCanvasWithTimer = () => {
    setCnt((oldCnt) => {
      return oldCnt + 1;
    });

    setTimeout(() => {
      setCnt((oldCnt) => {
        if (oldCnt === 1) {
          renderCanvas({ pageNumber: pageNumber });
          return oldCnt - 1;
        } else {
          return oldCnt - 1;
        }
      });
    }, 1000);
  };

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
      const { data: upsertData, error: upsertError } = await supabase
        .from("resume")
        .upsert([{ id: resumeId, uid: uid, content: data, title: "" }]);

      if (upsertError) throw new Error();
      alert("저장되었습니다.");
    } catch (e) {
      alert("저장에 실패했습니다. 잠시 뒤에 다시 시도해주세요.");
    }
  };

  react.useEffect(() => {
    setPdfComponent(<PDFPage data={data} mainColor={mainColor} />);
  }, [data, mainColor]);

  react.useEffect(() => {
    updateInstance({
      document: pdfComponent,
    });
  }, [pdfComponent]);

  react.useEffect(() => {
    renderCanvasWithTimer();
  }, [instance]);

  react.useEffect(() => {
    renderCanvas({ pageNumber: pageNumber });
  }, [pageNumber]);

  return (
    <Page>
      <Header>
        <HeaderTtile>Resume Builder</HeaderTtile>
      </Header>

      <Body>
        <InputContainer>
          <InputHeader
            url={instance.url}
            fileName={`${data?.header?.title}.pdf`}
            saveResume={saveResume}
          />

          <InputPage
            data={data}
            setData={setData}
            mainColor={mainColor}
            setMainColor={setMainColor}
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
