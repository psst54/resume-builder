/** @jsxImportSource @emotion/react */

import { Page } from "./styles";
import ActionPanel from "./ActionPanel";

import { Contact, Resume, SectionItem } from "@/types/resume";
import Section from "./Section";
import FileName from "./FileName";
import Color from "./Color";
import UserInfo, { UserInfoFields } from "./UserInfo";
import ContactInput from "./Contact";
import { Dispatch, SetStateAction } from "react";
import SectionItemRenderer from "./SectionItemRenderer";
import CreateButton from "./CreateButton";
import { TEXT_SECTION_TEMPLATE } from "./CreateButton/template";

const InputPage = ({
  data,
  setData,
  mainColor,
  setMainColor,
  resumeFileName,
  setResumeFileName,
  onSave,
  onDelete,
  fileUrl,
  fileName,
}: {
  data: Resume;
  setData: Dispatch<SetStateAction<Resume>>;
  mainColor: string;
  setMainColor: Dispatch<SetStateAction<string>>;
  resumeFileName: string;
  setResumeFileName: Dispatch<SetStateAction<string>>;
}) => {
  function onAddSection() {
    setData({
      ...data,
      sectionList: data.sectionList.concat(TEXT_SECTION_TEMPLATE),
    });
  }

  return (
    <Page>
      <ActionPanel
        onSave={onSave}
        onDelete={onDelete}
        fileUrl={fileUrl}
        fileName={fileName}
      />

      {/* ---------- 파일 이름 ---------- */}
      <Section title="파일 이름" color={mainColor}>
        <FileName
          resumeFileName={resumeFileName}
          setResumeFileName={setResumeFileName}
        />
      </Section>

      {/* ---------- 색상 선택 ---------- */}
      <Section title="색상 선택" color={mainColor}>
        <Color color={mainColor} setColor={setMainColor} />
      </Section>

      {/* ---------- 기본 정보 ---------- */}
      <Section title="기본 정보" color={mainColor}>
        <>
          <UserInfo
            data={data.userInfo}
            setData={(field: UserInfoFields, value: string) => {
              const newUserInfo = { ...data.userInfo };
              newUserInfo[field] = value;
              setData({ ...data, userInfo: newUserInfo });
            }}
          />
          <ContactInput
            data={data.userInfo.contact}
            setContactData={({ contact }: { contact: Contact[] }) => {
              const userInfo = { ...data.userInfo };
              setData({
                ...data,
                userInfo: { ...userInfo, contact },
              });
            }}
          />
        </>
      </Section>

      {data.sectionList.map((sectionItem, sectionItemIdx) => (
        <Section
          key={sectionItemIdx}
          title={`${sectionItemIdx + 1}번째 섹션`}
          color={mainColor}
        >
          <SectionItemRenderer
            sectionItem={sectionItem}
            setSectionItem={(newSectionItem: SectionItem) => {
              const prevSectionList = data.sectionList;
              setData({
                ...data,
                sectionList: prevSectionList.map(
                  (prevSectionItem, prevSectionItemIndex) =>
                    prevSectionItemIndex === sectionItemIdx
                      ? newSectionItem
                      : prevSectionItem
                ),
              });
            }}
          />
        </Section>
      ))}

      {/* 
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
                <InputContainer key={contentItemIdx}>
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
                <SectionItemContainer key={contentItemIdx}>
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
                  <SectionItemContainer key={contentItemIdx}>
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
      })} */}

      <CreateButton type="섹션" onClick={onAddSection} />
    </Page>
  );
};

export default InputPage;
