import { Dispatch, SetStateAction } from "react";
import {
  ResumeContent,
  LongSectionContent,
  DescItemType,
  DescItem,
} from "@/types/resumeOld";

export function onChangeDescItemType({
  data,
  setData,
  idxObj,
  selectedValue,
}: {
  data: ResumeContent;
  setData: Dispatch<SetStateAction<ResumeContent>>;
  idxObj: { bodyItemIdx: number; contentItemIdx: number; descItemIdx: number };
  selectedValue: DescItemType;
}) {
  setData({
    ...data,
    body: data.body.map((oldDatum, oldDatumIdx: number) => {
      return oldDatumIdx === idxObj.bodyItemIdx
        ? {
            ...oldDatum,
            content: (oldDatum.content as LongSectionContent[]).map(
              (oldContentItem, oldContentItemIdx: number) => {
                return oldContentItemIdx === idxObj.contentItemIdx
                  ? {
                      ...oldContentItem,
                      descItems: (oldContentItem.descItems as DescItem[]).map(
                        (oldDescItem: DescItem, oldDescItemIdx: number) => {
                          return oldDescItemIdx === idxObj.descItemIdx
                            ? {
                                ...oldDescItem,
                                type: selectedValue,
                              }
                            : oldDescItem;
                        }
                      ) as DescItem[],
                    }
                  : oldContentItem;
              }
            ),
          }
        : oldDatum;
    }),
  });
}

export function onAddDescItem({
  data,
  setData,
  idxObj,
}: {
  data: ResumeContent;
  setData: Dispatch<SetStateAction<ResumeContent>>;
  idxObj: { bodyItemIdx: number; contentItemIdx: number; descItemIdx: number };
}) {
  setData({
    ...data,
    body: data.body.map((oldDatum, oldDatumIdx: number) => {
      return oldDatumIdx === idxObj.bodyItemIdx
        ? {
            ...oldDatum,
            content: (oldDatum.content as LongSectionContent[]).map(
              (oldContentItem, oldContentItemIdx: number) => {
                return oldContentItemIdx === idxObj.contentItemIdx
                  ? {
                      ...oldContentItem,
                      descItems: (oldContentItem.descItems as DescItem[]).map(
                        (oldDescItem, oldDescItemIdx: number) => {
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
}

export function onDeleteDescItem({
  data,
  setData,
  idxObj,
}: {
  data: ResumeContent;
  setData: Dispatch<SetStateAction<ResumeContent>>;
  idxObj: {
    bodyItemIdx: number;
    contentItemIdx: number;
    descItemIdx: number;
    targetIdx: number;
  };
}) {
  setData({
    ...data,
    body: data.body.map((oldDatum, oldDatumIdx) => {
      return oldDatumIdx === idxObj.bodyItemIdx
        ? {
            ...oldDatum,
            content: (oldDatum.content as LongSectionContent[]).map(
              (oldContentItem, oldContentItemIdx) => {
                return oldContentItemIdx === idxObj.contentItemIdx
                  ? {
                      ...oldContentItem,
                      descItems: (oldContentItem.descItems as DescItem[]).map(
                        (oldDescItem: DescItem, oldDescItemIdx: number) => {
                          return oldDescItemIdx === idxObj.descItemIdx
                            ? {
                                ...oldDescItem,
                                items: oldDescItem.items.filter(
                                  (_, itemIdx) => itemIdx !== idxObj.targetIdx
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
}

export function onChangeDescItem({
  data,
  setData,
  idxObj,
  value,
}: {
  data: ResumeContent;
  setData: Dispatch<SetStateAction<ResumeContent>>;
  idxObj: {
    bodyItemIdx: number;
    contentItemIdx: number;
    descItemIdx: number;
    targetIdx: number;
  };
  value: string;
}) {
  setData({
    ...data,
    body: data.body.map((oldDatum, oldDatumIdx) => {
      return oldDatumIdx === idxObj.bodyItemIdx
        ? {
            ...oldDatum,
            content: (oldDatum.content as LongSectionContent[]).map(
              (oldContentItem, oldContentItemIdx) => {
                return oldContentItemIdx === idxObj.contentItemIdx
                  ? {
                      ...oldContentItem,
                      descItems: (oldContentItem.descItems as DescItem[]).map(
                        (oldDescItem: DescItem, oldDescItemIdx: number) => {
                          return oldDescItemIdx === idxObj.descItemIdx
                            ? {
                                ...oldDescItem,
                                items: oldDescItem.items.map((item, itemIdx) =>
                                  itemIdx === idxObj.targetIdx ? value : item
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
}

export function onChangeDescLink({
  data,
  setData,
  idxObj,
  value,
}: {
  data: ResumeContent;
  setData: Dispatch<SetStateAction<ResumeContent>>;
  idxObj: {
    bodyItemIdx: number;
    contentItemIdx: number;
    descItemIdx: number;
    field: string;
  };
  value: string;
}) {
  setData({
    ...data,
    body: data.body.map((oldDatum, oldDatumIdx) => {
      return oldDatumIdx === idxObj.bodyItemIdx
        ? {
            ...oldDatum,
            content: (oldDatum.content as LongSectionContent[]).map(
              (oldContentItem, oldContentItemIdx) => {
                return oldContentItemIdx === idxObj.contentItemIdx
                  ? {
                      ...oldContentItem,
                      descItems: (oldContentItem.descItems as DescItem[]).map(
                        (oldDescItem: DescItem, oldDescItemIdx: number) => {
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
}
