/** @jsxImportSource @emotion/react */

import type { RefObject } from "react";
import {
  formWrapper,
  inputBox,
  inputListWrapper,
  submitButton,
  warngingMessage,
} from "./styles";
import type { Field } from "./fieldData";

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
        {data.map((field: Field, index: number) => (
          <div key={index}>
            <p>{field.label}</p>
            <input
              id={field.field}
              name={field.field}
              type={field?.type}
              placeholder={field.placeholder}
              autoComplete={field?.autoComplete}
              minLength={field?.minLength}
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

      <button
        css={submitButton}
        formAction={onSubmit}
        disabled={warningMessageList.length > 0}
      >
        {buttonText}
      </button>
    </form>
  );
}
