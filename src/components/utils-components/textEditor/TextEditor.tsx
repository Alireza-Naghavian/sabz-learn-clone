"use client";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import "ckeditor5-premium-features/ckeditor5-premium-features.css";
import editorConfig from "@/utils/EditorConfig";
import { ClassicEditor } from "ckeditor5";
import "./textEditor.css";
import "ckeditor5/ckeditor5.css";
import { SetState } from "@/types/global.t";
function TextEditor({
  onChange,
  value,
}: {
  onChange: SetState<string>;
  value: string;
}) {
  return (
    <div className=" child:border-none dark:bg-dark border-gray-300 rounded-lg ">
      <CKEditor
        onChange={(event, editor) => {
          const data = editor.getData();
          onChange(data);
        }}
        data={value}
        editor={ClassicEditor}
        config={editorConfig}
      />
    </div>
  );
}

export default TextEditor;
