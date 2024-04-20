/** @jsxImportSource @emotion/react */

import react from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

import { Contact, ContactType } from "@/types/resume";

import { CONTACT_DATA } from "./data";
import Icon from "./Icon";
import DraggableItem from "../Draggable";
import Selector from "@/components/Selector";
import { defaultInput, inputWrapper, largeInput } from "../Input/styles";
import { COLOR } from "@/styles/color";

export default function ContactInput({
  data,
  setContactData,
}: {
  data: Contact[];
  setContactData: ({ contact }: { contact: Contact[] }) => void;
}) {
  function onChangeType(index: number, value: ContactType) {
    const newContact: Contact[] = data.map(
      (datum: Contact, datumIndex: number) =>
        datumIndex === index ? { ...datum, type: value } : datum
    );
    setContactData({ contact: newContact });
  }

  function onChangeContent(index: number, value: string) {
    const newContact: Contact[] = data.map(
      (datum: Contact, datumIndex: number) =>
        datumIndex === index ? { ...datum, content: value } : datum
    );
    setContactData({ contact: newContact });
  }

  function onDelete(index: number) {
    setContactData({
      contact: data.filter(
        (_: Contact, prevIndex: number) => index !== prevIndex
      ),
    });
  }

  function onAdd() {
    const contactTemplate: Contact = {
      id: new Date().getTime(),
      type: "phone",
      content: "",
    };

    setContactData({ contact: data.concat(contactTemplate) });
  }

  const onDrag = react.useCallback(
    (dragIndex: number, hoverIndex: number) => {
      const newContact: Contact[] = [...data];
      newContact.splice(dragIndex, 1);
      newContact.splice(hoverIndex, 0, data[dragIndex]);

      setContactData({ contact: newContact });
    },
    [data]
  );

  return (
    <DndProvider backend={HTML5Backend}>
      <div style={{ display: "flex", flexDirection: "column", gap: "0.3rem" }}>
        {data.map((contactItem: Contact, contactItemIndex: number) => {
          const placeholder = CONTACT_DATA.find(
            (contactTypeDatum) => contactTypeDatum.type === contactItem.type
          )!.placeholder;

          return (
            <DraggableItem
              key={contactItemIndex}
              onDrag={onDrag}
              id={contactItemIndex}
              index={contactItemIndex}
            >
              <div css={inputWrapper}>
                <Selector
                  value={contactItem.type}
                  optionList={CONTACT_DATA.map((datum) => ({
                    label: datum.title,
                    value: datum.type,
                  }))}
                  onChange={(value: ContactType) => {
                    onChangeType(contactItemIndex, value);
                  }}
                />

                <div css={{ display: "flex", alignItems: "center" }}>
                  <input
                    css={[defaultInput, largeInput]}
                    value={contactItem.content}
                    placeholder={placeholder}
                    onChange={(event) => {
                      onChangeContent(contactItemIndex, event.target.value);
                    }}
                  />
                  <Icon title="drag" />
                  <Icon
                    title="delete"
                    onClick={() => {
                      onDelete(contactItemIndex);
                    }}
                  />
                </div>
              </div>
            </DraggableItem>
          );
        })}

        <button
          css={{
            display: "flex",
            width: "fit-content",
            background: "black",
            padding: "0.5rem 1rem",
            border: "none",
            borderRadius: "1rem",
            cursor: "pointer",
            color: "white",

            "&:active": {
              background: COLOR.GRAY.LIGHT,
            },
          }}
          onClick={() => {
            onAdd();
          }}
        >
          + 연락 수단 추가
        </button>
      </div>
    </DndProvider>
  );
}
