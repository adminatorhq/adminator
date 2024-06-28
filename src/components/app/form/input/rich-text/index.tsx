import "react-quill/dist/quill.snow.css";
import dynamic from "next/dynamic";
import { noop } from "shared/lib/noop";
import { useLingui } from "@lingui/react";
import { msg } from "@lingui/macro";
import {
  LabelAndError,
  generateClassNames,
} from "@/components/app/form/input/label-and-error";
import styles from "./styles.module.css";
import { ISharedFormInput } from "@/components/app/form/input/types";

const ReactQuill = dynamic<any>(
  () => {
    return import("react-quill");
  },
  { ssr: false }
);

const modules = {
  toolbar: [
    [{ size: [] }, { font: [] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [
      { list: "ordered" },
      { list: "bullet" },
      { indent: "-1" },
      { indent: "+1" },
    ],
    ["link"],
    ["clean"],
  ],
  clipboard: {
    matchVisual: false,
  },
};

export function FormRichTextArea(formInput: ISharedFormInput) {
  const {
    input: { onFocus, name, onBlur, ...inputProps },
    disabled,
    meta,
  } = formInput;
  noop(onBlur, onFocus);

  const { _ } = useLingui();

  return (
    <LabelAndError formInput={formInput}>
      <div className={styles.root}>
        <ReactQuill
          {...inputProps}
          className={generateClassNames(meta)}
          readOnly={disabled}
          modules={modules}
          id={name}
          placeholder={_(msg`Start Typing`)}
          theme="snow"
        />
      </div>
    </LabelAndError>
  );
}
