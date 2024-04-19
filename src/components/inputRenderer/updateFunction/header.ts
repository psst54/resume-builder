import { Dispatch, SetStateAction } from "react";
import { ResumeContent } from "@/types/resumeOld";
import { contactItemTemplate } from "@assets/resumeTemplate";

export function onChangeHeader({
  data,
  setData,
  field,
  value,
}: {
  data: ResumeContent;
  setData: Dispatch<SetStateAction<ResumeContent>>;
  field: string;
  value: string;
}): void {
  const newData: ResumeContent = { ...data };
  newData.header[field] = value;
  setData(newData);
}

export function onAddContactItem({
  data,
  setData,
}: {
  data: ResumeContent;
  setData: Dispatch<SetStateAction<ResumeContent>>;
}) {
  setData({
    ...data,
    header: {
      ...data.header,
      contactItems: data.header?.contactItems
        ? data.header.contactItems.concat(contactItemTemplate)
        : [contactItemTemplate],
    },
  });
}
