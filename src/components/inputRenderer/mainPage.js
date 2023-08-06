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
import Selector from "../customSelector";
import Input from "./input";
import ContactItems from "./contactItems";
import TitleInput from "./titleInput";
import ColorSelector from "./colorSelector";
import DescItemsDragWrapper from "./descItemsDragWrapper";

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

const emptySectionTemplate = {
  title: "",
  type: "text",
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
}) => {
  const setHeader = ({ field, value }) => {
    const newData = { ...data };
    newData.header[field] = value;
    setData(newData);
  };

  const setContentItem = ({ idxObj, field, value }) => {
    setData({
      ...data,
      body: data.body.map((oldDatum, oldDatumIdx) => {
        return oldDatumIdx === idxObj.bodyItemIdx
          ? {
              ...oldDatum,
              content: oldDatum.content.map(
                (oldContentItem, oldContentItemIdx) => {
                  if (oldContentItemIdx === idxObj.contentItemIdx) {
                    const newContentItem = { ...oldContentItem };
                    newContentItem[field] = value;
                    return newContentItem;
                  } else {
                    return oldContentItem;
                  }
                }
              ),
            }
          : oldDatum;
      }),
    });
  };

  const toggleUseEndDate = ({ idxObj }) => {
    setData({
      ...data,
      body: data.body.map((oldDatum, oldDatumIdx) => {
        return oldDatumIdx === idxObj.bodyItemIdx
          ? {
              ...oldDatum,
              content: oldDatum.content.map(
                (oldContentItem, oldContentItemIdx) => {
                  return oldContentItemIdx === idxObj.contentItemIdx
                    ? {
                        ...oldContentItem,
                        useEndDate: oldContentItem.useEndDate ? false : true,
                      }
                    : oldContentItem;
                }
              ),
            }
          : oldDatum;
      }),
    });
  };

  const setSectionType = ({ idxObj, selectedValue }) => {
    setData({
      ...data,
      body: data.body.map((oldDatum, oldDatumIdx) => {
        return oldDatumIdx === idxObj.bodyItemIdx
          ? { ...oldDatum, type: selectedValue }
          : oldDatum;
      }),
    });
  };

  const setDescItemType = ({ idxObj, selectedValue }) => {
    setData({
      ...data,
      body: data.body.map((oldDatum, oldDatumIdx) => {
        return oldDatumIdx === idxObj.bodyItemIdx
          ? {
              ...oldDatum,
              content: oldDatum.content.map(
                (oldContentItem, oldContentItemIdx) => {
                  return oldContentItemIdx === idxObj.contentItemIdx
                    ? {
                        ...oldContentItem,
                        descItems: oldContentItem.descItems.map(
                          (oldDescItem, oldDescItemIdx) => {
                            return oldDescItemIdx === idxObj.descItemIdx
                              ? {
                                  ...oldDescItem,
                                  type: selectedValue,
                                }
                              : oldDescItem;
                          }
                        ),
                      }
                    : oldContentItem;
                }
              ),
            }
          : oldDatum;
      }),
    });
  };

  const addDescItem = ({ idxObj }) => {
    setData({
      ...data,
      body: data.body.map((oldDatum, oldDatumIdx) => {
        return oldDatumIdx === idxObj.bodyItemIdx
          ? {
              ...oldDatum,
              content: oldDatum.content.map(
                (oldContentItem, oldContentItemIdx) => {
                  return oldContentItemIdx === idxObj.contentItemIdx
                    ? {
                        ...oldContentItem,
                        descItems: oldContentItem.descItems.map(
                          (oldDescItem, oldDescItemIdx) => {
                            return oldDescItemIdx === idxObj.descItemIdx
                              ? {
                                  ...oldDescItem,
                                  items: oldDescItem.items.concat(""),
                                }
                              : oldDescItem;
                          }
                        ),
                      }
                    : oldContentItem;
                }
              ),
            }
          : oldDatum;
      }),
    });
  };

  const deleteDescItem = ({ idxObj }) => {
    setData({
      ...data,
      body: data.body.map((oldDatum, oldDatumIdx) => {
        return oldDatumIdx === idxObj.bodyItemIdx
          ? {
              ...oldDatum,
              content: oldDatum.content.map(
                (oldContentItem, oldContentItemIdx) => {
                  return oldContentItemIdx === idxObj.contentItemIdx
                    ? {
                        ...oldContentItem,
                        descItems: oldContentItem.descItems.map(
                          (oldDescItem, oldDescItemIdx) => {
                            return oldDescItemIdx === idxObj.descItemIdx
                              ? {
                                  ...oldDescItem,
                                  items: oldDescItem.items.filter(
                                    (item, itemIdx) =>
                                      itemIdx !== idxObj.targetIdx
                                  ),
                                }
                              : oldDescItem;
                          }
                        ),
                      }
                    : oldContentItem;
                }
              ),
            }
          : oldDatum;
      }),
    });
  };

  const editDescItem = ({ idxObj, value }) => {
    setData({
      ...data,
      body: data.body.map((oldDatum, oldDatumIdx) => {
        return oldDatumIdx === idxObj.bodyItemIdx
          ? {
              ...oldDatum,
              content: oldDatum.content.map(
                (oldContentItem, oldContentItemIdx) => {
                  return oldContentItemIdx === idxObj.contentItemIdx
                    ? {
                        ...oldContentItem,
                        descItems: oldContentItem.descItems.map(
                          (oldDescItem, oldDescItemIdx) => {
                            return oldDescItemIdx === idxObj.descItemIdx
                              ? {
                                  ...oldDescItem,
                                  items: oldDescItem.items.map(
                                    (item, itemIdx) =>
                                      itemIdx === idxObj.targetIdx
                                        ? value
                                        : item
                                  ),
                                }
                              : oldDescItem;
                          }
                        ),
                      }
                    : oldContentItem;
                }
              ),
            }
          : oldDatum;
      }),
    });
  };

  const editDescLink = ({ idxObj, value }) => {
    setData({
      ...data,
      body: data.body.map((oldDatum, oldDatumIdx) => {
        return oldDatumIdx === idxObj.bodyItemIdx
          ? {
              ...oldDatum,
              content: oldDatum.content.map(
                (oldContentItem, oldContentItemIdx) => {
                  return oldContentItemIdx === idxObj.contentItemIdx
                    ? {
                        ...oldContentItem,
                        descItems: oldContentItem.descItems.map(
                          (oldDescItem, oldDescItemIdx) => {
                            return oldDescItemIdx === idxObj.descItemIdx
                              ? {
                                  ...oldDescItem,
                                  title:
                                    idxObj.field === "title"
                                      ? value
                                      : oldDescItem.title,
                                  url:
                                    idxObj.field === "url"
                                      ? value
                                      : oldDescItem.url,
                                }
                              : oldDescItem;
                          }
                        ),
                      }
                    : oldContentItem;
                }
              ),
            }
          : oldDatum;
      }),
    });
  };

  return (
    <Page>
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

        <Input
          type="text"
          title="이름"
          value={data?.header?.name}
          placeholder="Gildong Hong"
          setValue={(event) => {
            setHeader({ field: "name", value: event.target.value });
          }}
        />
        <Input
          type="text"
          title="직책"
          value={data?.header?.position}
          placeholder="FRONTEND DEVELOPER"
          setValue={(event) => {
            setHeader({ field: "position", value: event.target.value });
          }}
        />
        <Input
          type="text"
          title="한마디"
          value={data?.header?.quote}
          placeholder='"한마디는 빈칸으로 둘 수 있습니다."'
          setValue={(event) => {
            setHeader({ field: "quote", value: event.target.value });
          }}
        />

        <ContactItems data={data} setData={setData} mainColor={mainColor} />

        <AddItem
          onClick={() => {
            setData({
              ...data,
              header: {
                ...data.header,
                contactItems: data.header?.contactItems
                  ? data.header.contactItems.concat({
                      type: "phone",
                      text: "",
                      id: new Date().getTime(),
                    })
                  : [{ type: "phone", text: "", id: new Date().getTime() }],
              },
            });
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
              <SectionIcon src="/upCircle.svg" />
              <SectionIcon src="/upCircle.svg" down={true} />
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
              data={sectionTypeData}
              setData={setSectionType}
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

            {bodyItem.type === "text" && (
              <InputContainer>
                <InputTitle>내용</InputTitle>
                <Textarea
                  value={bodyItem.desc}
                  onChange={(event) => {
                    setData({
                      ...data,
                      body: data.body.map((oldDatum, oldDatumIdx) => {
                        return oldDatumIdx === bodyItemIdx
                          ? { ...oldDatum, desc: event.target.value }
                          : oldDatum;
                      }),
                    });
                  }}
                />
              </InputContainer>
            )}

            {bodyItem.type === "short" &&
              bodyItem?.content?.map((contentItem, contentItemIdx) => {
                return (
                  <SectionItemContainer>
                    <InputContainer>
                      <InputTitle>일자</InputTitle>
                      <LargeInput
                        value={contentItem.year}
                        onChange={(event) => {
                          setContentItem({
                            idxObj: { bodyItemIdx, contentItemIdx },
                            field: "year",
                            value: event.target.value,
                          });
                        }}
                      />
                    </InputContainer>

                    <InputContainer>
                      <InputTitle>역할</InputTitle>
                      <LargeInput
                        value={contentItem.position}
                        onChange={(event) => {
                          setContentItem({
                            idxObj: { bodyItemIdx, contentItemIdx },
                            field: "position",
                            value: event.target.value,
                          });
                        }}
                      />
                    </InputContainer>

                    <InputContainer>
                      <InputTitle>활동명</InputTitle>
                      <LargeInput
                        value={contentItem.subscription}
                        onChange={(event) => {
                          setContentItem({
                            idxObj: { bodyItemIdx, contentItemIdx },
                            field: "subscription",
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
                          setContentItem({
                            idxObj: { bodyItemIdx, contentItemIdx },
                            field: "location",
                            value: event.target.value,
                          });
                        }}
                      />
                    </InputContainer>
                  </SectionItemContainer>
                );
              })}

            {bodyItem.type === "long" &&
              bodyItem?.content?.map((contentItem, contentItemIdx) => {
                return (
                  <SectionItemContainer>
                    <InputContainer>
                      <InputTitle>항목 이름</InputTitle>
                      <LargeInput
                        value={contentItem.title}
                        onChange={(event) => {
                          setContentItem({
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
                          setContentItem({
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
                          setContentItem({
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
                              setContentItem({
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
                                  setContentItem({
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
                            toggleUseEndDate({
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
                      contentItem={contentItem}
                      idxObj={{
                        bodyItemIdx,
                        contentItemIdx,
                      }}
                      setDescItemType={setDescItemType}
                      addDescItem={addDescItem}
                      deleteDescItem={deleteDescItem}
                      editDescItem={editDescItem}
                      editDescLink={editDescLink}
                    />

                    <AddItem
                      onClick={() => {
                        setData({
                          ...data,
                          body: data.body.map((oldDatum, oldDatumIdx) => {
                            return oldDatumIdx === bodyItemIdx
                              ? {
                                  ...oldDatum,
                                  content: oldDatum.content.map(
                                    (oldContentItem, oldContentItemIdx) => {
                                      return oldContentItemIdx ===
                                        contentItemIdx
                                        ? {
                                            ...oldContentItem,
                                            descItems: oldContentItem.descItems
                                              ? oldContentItem.descItems.concat(
                                                  {
                                                    type: "list",
                                                    items: [],
                                                  }
                                                )
                                              : [
                                                  {
                                                    type: "list",
                                                    items: [],
                                                  },
                                                ],
                                          }
                                        : oldContentItem;
                                    }
                                  ),
                                }
                              : oldDatum;
                          }),
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
