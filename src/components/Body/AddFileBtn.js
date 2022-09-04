import React from "react";
import "./style.css";

import { BsFillFileEarmarkArrowUpFill } from "react-icons/bs";
import axios from "axios";

export default function AddFileBtn({ path, render, setRender }) {
  // const [file, setFile] = useState(null);

  function handleUpload(e) {
    e.preventDefault();
    const file = e.target.files[0];
    file.path = path;
    const newPath = path.replace("/", "*");
    console.log(newPath);
    const formData = new FormData();

    formData.append("file", file);

    console.log(file);
    console.log(formData);

    axios.post(`http://localhost:3001/upload/${newPath}`, formData, {
      headers: { "content-type": "multipart/form-data" },
    });
    render ? setRender(false) : setRender(true);
  }

  return (
    <>
      <label className="btn btn-outline-success btn-sm  ml-2 btnSpaseFile">
        <BsFillFileEarmarkArrowUpFill size="40px" />
        <input
          type="file"
          name="file"
          onChange={handleUpload}
          style={{ opacity: 0, position: "absolute", left: "-9999px" }}
        />
      </label>
    </>
  );
}
