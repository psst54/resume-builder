import { Dispatch, SetStateAction } from "react";
import { ResumeContent, SectionType } from "@/types/resume";

export function onChangeSectionType({
  data,
  setData,
  idxObj,
  selectedValue,
}: {
  data: ResumeContent;
  setData: Dispatch<SetStateAction<ResumeContent>>;
  field: string;
  idxObj: { bodyItemIdx: number };
  selectedValue: SectionType;
}) {
  setData({
    ...data,
    body: data.body.map((oldDatum, oldDatumIdx) => {
      return oldDatumIdx === idxObj.bodyItemIdx
        ? { ...oldDatum, type: selectedValue }
        : oldDatum;
    }),
  });
}

export function onMoveUp({
  data,
  setData,
  index,
}: {
  data: ResumeContent;
  setData: Dispatch<SetStateAction<ResumeContent>>;
  index: number;
}) {
  const oldBody = [...data.body];
  oldBody[index] = data.body[index - 1];
  oldBody[index - 1] = data.body[index];
  setData({
    ...data,
    body: oldBody,
  });
}

export function onMoveDown({
  data,
  setData,
  index,
}: {
  data: ResumeContent;
  setData: Dispatch<SetStateAction<ResumeContent>>;
  index: number;
}) {
  const oldBody = [...data.body];
  oldBody[index] = data.body[index + 1];
  oldBody[index + 1] = data.body[index];
  setData({
    ...data,
    body: oldBody,
  });
}
