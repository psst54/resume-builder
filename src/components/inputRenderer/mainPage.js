/** @jsxImportSource @emotion/react */

import {
  Page,
  SectionWrapper,
  AddSection,
  AddItem,
  SectionTitleContainer,
  SectionBorder,
  SectionTitle,
  SectionIcon,
  InputContainer,
  InputTitle,
  LargeInput,
  Textarea,
  DateInputContainer,
  DateInputWrapper,
  DateInput,
  DateDivider,
  CheckBoxWrapper,
  CheckBox,
  Check,
  SectionItemContainer,
} from "./styles";
import ActionPanel from "./ActionPanel";
import Selector from "../customSelector";
import Input from "./input";
import ContactItems from "./contactItems";
import TitleInput from "./titleInput";
import ColorSelector from "./ColorSelector";
import DescItemsDragWrapper from "./descItemsDragWrapper";

import {
  onChangeHeader,
  onAddContactItem,
  onChangeSectionType,
  onMoveUp,
  onMoveDown,
  onChangeContentItem,
  onAddContentItem,
  onToggleUseEndDate,
  onChangeDescItemType,
  onAddDescItem,
  onDeleteDescItem,
  onChangeDescItem,
  onChangeDescLink,
} from "./updateFunction";

const basicInformationData = [
  { title: "이름", value: "name", placeholder: "Gildong Hong" },
  { title: "직책", value: "position", placeholder: "FRONTEND DEVELOPER" },
  {
    title: "한마디",
    value: "quote",
    placeholder: '"한마디는 빈칸으로 둘 수 있습니다."',
  },
];

const sectionTypeData = [
  {
    title: "텍스트",
    value: "text",
  },
  {
    title: "상세",
    value: "long",
  },
  {
    title: "간단",
    value: "short",
  },
];

const shortSectionData = [
  {
    title: "일자",
    field: "year",
  },
  {
    title: "역할",
    field: "position",
  },
  {
    title: "활동명",
    field: "subscription",
  },
  {
    title: "위치",
    field: "location",
  },
];

const emptySectionTemplate = {
  title: "",
  type: "text",
  content: [{ text: "" }],
};
const emptyContentTemplate = {
  title: "",
  position: "",
};

const InputPage = ({
  data,
  setData,
  mainColor,
  setMainColor,
  resumeTitle,
  setResumeTitle,
  onSave,
  onDelete,
  fileUrl,
  fileName,
}) => {
  return (
    <Page>
      <ActionPanel
        onSave={onSave}
        onDelete={onDelete}
        fileUrl={fileUrl}
        fileName={fileName}
      />

      <SectionWrapper>
        <TitleInput
          mainColor={mainColor}
          resumeTitle={resumeTitle}
          setResumeTitle={setResumeTitle}
        />
      </SectionWrapper>
      <SectionWrapper>
        <ColorSelector mainColor={mainColor} setMainColor={setMainColor} />
      </SectionWrapper>
      <SectionWrapper>
        <SectionTitleContainer>
          <SectionTitle>
            <span css={{ fontSize: "1.2rem", color: mainColor }}>기</span>본
            정보
          </SectionTitle>
          <SectionBorder />
        </SectionTitleContainer>

        {basicInformationData.map((datum) => (
          <Input
            type="text"
            title={datum.title}
            value={data.header ? data.header[datum.value] : null}
            placeholder={datum.placeholder}
            setValue={(event) => {
              onChangeHeader({
                data,
                setData,
                field: datum.value,
                value: event.target.value,
              });
            }}
          />
        ))}

        <ContactItems data={data} setData={setData} mainColor={mainColor} />

        <AddItem
          onClick={() => {
            onAddContactItem({ data, setData });
          }}
        >
          + 연락 정보 추가하기
        </AddItem>
      </SectionWrapper>
      {data?.body?.map((bodyItem, bodyItemIdx) => {
        return (
          <SectionWrapper key={bodyItemIdx}>
            <SectionTitleContainer>
              <SectionTitle>
                <span css={{ fontSize: "1.2rem", color: mainColor }}>
                  {bodyItemIdx + 1}
                </span>
                번째 섹션
              </SectionTitle>
              <SectionBorder />
              {bodyItemIdx !== 0 && (
                <SectionIcon
                  src="/upCircle.svg"
                  onClick={() => {
                    onMoveUp({ data, setData, index: bodyItemIdx });
                  }}
                />
              )}
              {bodyItemIdx !== data?.body.length - 1 && (
                <SectionIcon
                  src="/upCircle.svg"
                  down={true}
                  onClick={() => {
                    onMoveDown({ data, setData, index: bodyItemIdx });
                  }}
                />
              )}
              <SectionIcon
                src="/delete.svg"
                onClick={() => {
                  setData({
                    ...data,
                    body: data.body.filter(
                      (_, oldBodyItemIdx) => oldBodyItemIdx !== bodyItemIdx
                    ),
                  });
                }}
              />
            </SectionTitleContainer>

            <Selector
              idxObj={{ bodyItemIdx }}
              selected={bodyItem.type}
              options={sectionTypeData}
              data={data}
              setData={setData}
              onChange={onChangeSectionType}
            />

            <InputContainer>
              <InputTitle>섹션 제목</InputTitle>
              <LargeInput
                value={bodyItem.title}
                onChange={(event) => {
                  setData({
                    ...data,
                    body: data.body.map((oldDatum, oldDatumIdx) => {
                      return oldDatumIdx === bodyItemIdx
                        ? { ...oldDatum, title: event.target.value }
                        : oldDatum;
                    }),
                  });
                }}
              />
            </InputContainer>

            {bodyItem.type === "text" &&
              bodyItem?.content?.map((contentItem, contentItemIdx) => (
                <InputContainer>
                  <InputTitle>내용</InputTitle>
                  <Textarea
                    value={contentItem.text}
                    onChange={(event) => {
                      onChangeContentItem({
                        data,
                        setData,
                        idxObj: { bodyItemIdx, contentItemIdx },
                        field: "text",
                        value: event.target.value,
                      });
                    }}
                  />
                </InputContainer>
              ))}

            {bodyItem.type === "short" &&
              bodyItem?.content?.map((contentItem, contentItemIdx) => (
                <SectionItemContainer>
                  {shortSectionData.map(
                    (shortSectionDatum, shortSectionDatumIdx) => (
                      <InputContainer key={shortSectionDatumIdx}>
                        <InputTitle>{shortSectionDatum.title}</InputTitle>
                        <LargeInput
                          value={contentItem[shortSectionDatum.field]}
                          onChange={(event) => {
                            onChangeContentItem({
                              data,
                              setData,
                              idxObj: { bodyItemIdx, contentItemIdx },
                              field: shortSectionDatum.field,
                              value: event.target.value,
                            });
                          }}
                        />
                      </InputContainer>
                    )
                  )}
                </SectionItemContainer>
              ))}

            {bodyItem.type === "long" &&
              bodyItem?.content?.map((contentItem, contentItemIdx) => {
                return (
                  <SectionItemContainer>
                    <InputContainer>
                      <InputTitle>항목 이름</InputTitle>
                      <LargeInput
                        value={contentItem.title}
                        onChange={(event) => {
                          onChangeContentItem({
                            data,
                            setData,
                            idxObj: { bodyItemIdx, contentItemIdx },
                            field: "title",
                            value: event.target.value,
                          });
                        }}
                      />
                    </InputContainer>
                    <InputContainer>
                      <InputTitle>항목 설명</InputTitle>
                      <LargeInput
                        value={contentItem.position}
                        onChange={(event) => {
                          onChangeContentItem({
                            data,
                            setData,
                            idxObj: { bodyItemIdx, contentItemIdx },
                            field: "position",
                            value: event.target.value,
                          });
                        }}
                      />
                    </InputContainer>
                    <InputContainer>
                      <InputTitle>위치</InputTitle>
                      <LargeInput
                        value={contentItem.location}
                        onChange={(event) => {
                          onChangeContentItem({
                            data,
                            setData,
                            idxObj: { bodyItemIdx, contentItemIdx },
                            field: "location",
                            value: event.target.value,
                          });
                        }}
                      />
                    </InputContainer>
                    <InputContainer>
                      <InputTitle>기간</InputTitle>
                      <DateInputContainer>
                        <DateInputWrapper>
                          <DateInput
                            value={contentItem.start}
                            onChange={(event) => {
                              onChangeContentItem({
                                data,
                                setData,
                                idxObj: { bodyItemIdx, contentItemIdx },
                                field: "start",
                                value: event.target.value,
                              });
                            }}
                            checked={contentItem.useEndDate}
                          />
                          {contentItem.useEndDate && (
                            <>
                              <DateDivider>-</DateDivider>
                              <DateInput
                                value={contentItem.end}
                                onChange={(event) => {
                                  onChangeContentItem({
                                    data,
                                    setData,
                                    idxObj: { bodyItemIdx, contentItemIdx },
                                    field: "end",
                                    value: event.target.value,
                                  });
                                }}
                                checked={contentItem.useEndDate}
                              />
                            </>
                          )}
                        </DateInputWrapper>

                        <CheckBoxWrapper
                          onClick={() => {
                            onToggleUseEndDate({
                              data,
                              setData,
                              idxObj: { bodyItemIdx, contentItemIdx },
                            });
                          }}
                        >
                          <CheckBox
                            checked={contentItem.useEndDate}
                            mainColor={mainColor}
                          >
                            <Check
                              src="/check.svg"
                              checked={contentItem.useEndDate}
                            />
                          </CheckBox>
                          종료 일자 사용
                        </CheckBoxWrapper>
                      </DateInputContainer>
                    </InputContainer>
                    <DescItemsDragWrapper
                      data={data}
                      setData={setData}
                      contentItem={contentItem}
                      idxObj={{
                        bodyItemIdx,
                        contentItemIdx,
                      }}
                      onChangeDescItemType={onChangeDescItemType}
                      onAddDescItem={onAddDescItem}
                      onDeleteDescItem={onDeleteDescItem}
                      onChangeDescItem={onChangeDescItem}
                      onChangeDescLink={onChangeDescLink}
                    />
                    <AddItem
                      onClick={() => {
                        onAddContentItem({
                          data,
                          setData,
                          idxObj: { bodyItemIdx, contentItemIdx },
                        });
                      }}
                    >
                      + 설명 추가하기
                    </AddItem>
                  </SectionItemContainer>
                );
              })}

            {(bodyItem.type === "long" || bodyItem.type === "short") && (
              <AddItem
                onClick={() => {
                  setData({
                    ...data,
                    body: data.body.map((oldBodyItem, oldBodyItemIdx) => {
                      return oldBodyItemIdx === bodyItemIdx
                        ? oldBodyItem.content
                          ? {
                              ...oldBodyItem,
                              content:
                                oldBodyItem.content.concat(
                                  emptyContentTemplate
                                ),
                            }
                          : { ...oldBodyItem, content: [emptyContentTemplate] }
                        : oldBodyItem;
                    }),
                  });
                }}
              >
                + 항목 추가하기
              </AddItem>
            )}
          </SectionWrapper>
        );
      })}
      <AddSection
        onClick={() => {
          setData({
            ...data,
            body: data.body.concat(emptySectionTemplate),
          });
        }}
      >
        + 섹션 추가하기
      </AddSection>
    </Page>
  );
};

export default InputPage;
