import React from "react";
import "./style.css";
import { Button, Modal, Form } from "react-bootstrap";
import { BsFileEarmarkArrowUp } from "react-icons/bs";
import axios from "axios";
import { AiOutlinePlus } from "react-icons/ai";

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
      <div className="btnSpaseFile bg-primary  rounded  ">
        <Button className="btn btn-lg  ml-2  d-flex justify-content-between w-100 h-100 align-items-center ">
          <BsFileEarmarkArrowUp size="40px" />
          <input
            type="file"
            name="file"
            onChange={handleUpload}
            style={{ opacity: 0, position: "absolute", with: "100%" }}
          />
          <span>Upload File</span>
          <AiOutlinePlus size="25" />
        </Button>
      </div>
    </>
  );
}
