import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const TextEditor = () => {
  const [value, setValue] = useState("");

  console.log(value);

  return (
    <div>
      <h4>TextEditor...</h4>
      <ReactQuill theme="snow" value={value} onChange={setValue} />
    </div>
  );
};

export default TextEditor;
