import { Dispatch, SetStateAction } from "react";
import { ResumeContent } from "@/types/resume";

export function onChangeContentItem({
  data,
  setData,
  idxObj,
  field,
  value,
}: {
  data: ResumeContent;
  setData: Dispatch<SetStateAction<ResumeContent>>;
  idxObj: { bodyItemIdx: number; contentItemIdx: number };
  field: string;
  value: string;
}) {
  setData({
    ...data,
    body: data.body.map((oldDatum, oldDatumIdx: number) => {
      return oldDatumIdx === idxObj.bodyItemIdx
        ? {
            ...oldDatum,
            content: oldDatum.content.map(
              (oldContentItem, oldContentItemIdx: number) => {
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
}

const DescItemTemplate = { type: "list", items: [], title: "", url: "" };

export function onAddContentItem({
  data,
  setData,
  idxObj,
}: {
  data: ResumeContent;
  setData: Dispatch<SetStateAction<ResumeContent>>;
  idxObj: { bodyItemIdx: number; contentItemIdx: number };
}) {
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
                      descItems: oldContentItem.descItems
                        ? oldContentItem.descItems.concat(DescItemTemplate)
                        : [DescItemTemplate],
                    }
                  : oldContentItem;
              }
            ),
          }
        : oldDatum;
    }),
  });
}

export function onToggleUseEndDate({
  data,
  setData,
  idxObj,
}: {
  data: ResumeContent;
  setData: Dispatch<SetStateAction<ResumeContent>>;
  idxObj: { bodyItemIdx: number; contentItemIdx: number };
}) {
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
}
