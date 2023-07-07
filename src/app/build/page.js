"use client";
import react from "react";

import { usePDF } from "@react-pdf/renderer/lib/react-pdf.browser.es.js";

import InputPage from "@components/inputRenderer/mainPage";
import InputHeader from "@components/inputRenderer/inputHeader";
import PDFPage from "@components/pdfRenderer/mainPage";
import PDFPreViewer from "@components/pdfPreViewer";

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
