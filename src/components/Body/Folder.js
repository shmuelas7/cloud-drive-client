import React, { useState } from "react";
import "./style.css";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { AiOutlineMore } from "react-icons/ai";
import { BsFolderFill } from "react-icons/bs";
import Option from "./Option";

export default function Folder({
  folder,
  setPath,
  path,
  setCheckOption,
  render,
  setRender,
  checkOption,
}) {
  const [option, setOption] = useState(false);

  const openFile = function (e) {
    if (!checkOption) {
      setOption(true);
      setCheckOption(true);
    }
  };
  console.log(folder, path);
  return (
    <div className=" file  border rounded d-flex folderContainer border-2">
      <div
        className="btnn  bg-white d-flex align-items-center "
        onClick={() => {
          setPath(`${path}/${folder}`);
          setCheckOption(false);
        }}
      >
        <BsFolderFill className="mar-l" color="#C1C1C1" size="24px" />
        <span className=" text-dark  mar-l ">{folder}</span>
      </div>
      <AiOutlineMore
        onClick={(e) => {
          openFile(e);
        }}
        color="#C1C1C1"
        className="d-flex align-items-end icon-dot"
        size={30}
      />
      {option ? (
        <Option
          file={folder}
          path={path}
          render={render}
          setRender={setRender}
          setCheckOption={setCheckOption}
          setOption={setOption}
        />
      ) : null}
    </div>
  );
}
