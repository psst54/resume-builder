/** @jsxImportSource @emotion/react */

import { RefObject } from "react";
import { color } from "@/styles/color";
import {
  formWrapper,
  inputBox,
  inputListWrapper,
  submitButton,
} from "../styles";
import type { Field } from "./fieldData";

const warngingMessage = {
  color: color.invalid,
  fontSize: "0.8rem",
};

export default function Form({
  data,
  formRef,
  onChange,
  warningMessageList = [],
  onSubmit,
  buttonText,
}: {
  data: Field[];
  formRef?: RefObject<HTMLFormElement>;
  onChange?: () => void;
  warningMessageList?: string[];
  onSubmit: (formData: FormData) => Promise<void>;
  buttonText: string;
}) {
  return (
    <form css={formWrapper} ref={formRef}>
      <div css={inputListWrapper}>
        {data.map((field: any, index: number) => (
          <div key={index}>
            <p>{field.label}</p>
            <input
              id={field.field}
              type={field?.type}
              placeholder={field.placeholder}
              autoComplete={field?.autoComplete}
              onChange={() => {
                if (onChange) {
                  onChange();
                }
              }}
              css={inputBox}
              required
            />
          </div>
        ))}
      </div>

      {warningMessageList.length > 0 && (
        <div>
          {warningMessageList.map((message: string, index: number) => (
            <p key={index} css={warngingMessage}>
              {message}
            </p>
          ))}
        </div>
      )}

      <button css={submitButton} formAction={onSubmit}>
        {buttonText}
      </button>
    </form>
  );
}
