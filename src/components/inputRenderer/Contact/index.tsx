/** @jsxImportSource @emotion/react */

import react from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import DraggableItem from "../Draggable";
import { CONTACT_DATA } from "./data";
import { Contact, Resume } from "@/types/resume";
import Image from "next/image";
import { defaultInput, largeInput } from "../Input/styles";

export default function ContactInput({
  data,
  setData,
}: {
  data: Contact[];
  setData: any;
}) {
  const setContactType = ({ idxObj, selectedValue }) => {
    setData({
      ...data,
      header: {
        ...data.header,
        contactItems: data.header.contactItems.map(
          (oldContactItem, oldContactItemIdx) => {
            return oldContactItemIdx === idxObj.contactItemIdx
              ? { ...oldContactItem, type: selectedValue }
              : oldContactItem;
          }
        ),
      },
    });
  };

  const updateContactItem = ({ idx, value }) => {
    setData({
      ...data,
      header: {
        ...data.header,
        contactItems: data.header.contactItems.map(
          (oldContactItem, oldContactItemIdx) => {
            return oldContactItemIdx === idx
              ? { ...oldContactItem, text: value }
              : oldContactItem;
          }
        ),
      },
    });
  };

  const deleteContactItem = ({ idx }) => {
    setData({
      ...data,
      header: {
        ...data.header,
        contactItems: data.header.contactItems.filter(
          (_, oldContactItemIdx) => oldContactItemIdx !== idx
        ),
      },
    });
  };

  const onDrag = react.useCallback((dragIndex: number, hoverIndex: number) => {
    setData((prevData: Resume) => {
      const prevContactList = [...prevData.userInfo.contact];

      prevContactList.splice(dragIndex, 1);
      prevContactList.splice(
        hoverIndex,
        0,
        prevData.userInfo.contact[dragIndex]
      );

      return {
        ...prevData,
        userInfo: {
          ...prevData.userInfo,
          contact: prevContactList,
        },
      };
    });
  }, []);

  return (
    <DndProvider backend={HTML5Backend}>
      <div style={{ display: "flex", flexDirection: "column", gap: "0.3rem" }}>
        {data.map((contactItem: Contact, contactItemIndex: number) => {
          const itemDefinition = CONTACT_DATA.find(
            (contactTypeDatum) => contactTypeDatum.type === contactItem.type
          )!;
          const type = itemDefinition.type;
          const placeholder = itemDefinition.placeholder;

          return (
            <DraggableItem
              key={contactItemIndex}
              onDrag={onDrag}
              id={contactItemIndex}
              index={contactItemIndex}
            >
              <div css={{ display: "flex", alignItems: "center" }}>
                <input
                  css={[defaultInput, largeInput]}
                  value={contactItem.content}
                  placeholder={placeholder}
                  onChange={(event) => {
                    // onChange(event.target.value);
                  }}
                />
                <Image
                  src="/drag.svg"
                  alt="drag icon"
                  width="24"
                  height="24"
                  css={{
                    cursor: "pointer",
                  }}
                />
              </div>
            </DraggableItem>
          );
        })}
      </div>
    </DndProvider>
  );
}
