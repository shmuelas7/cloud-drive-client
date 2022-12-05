import { MdInsertDriveFile } from "react-icons/md";
import React, { useState } from "react";
import Option from "./Option";
import { AiOutlineMore } from "react-icons/ai";

export default function File({
  file,
  path,
  render,
  setRender,
  setCheckOption,
  checkOption,
}) {
  const [option, setOption] = useState(false);

  const openFile = function (e) {
    if (!checkOption) {
      setOption(true);
      setCheckOption(true);
    }
  };
  return (
    <div className="position-relative ">
      <div className="file  border rounded d-flex folderContainer border-2">
        <div className="btnn  bg-white d-flex align-items-center ">
          <MdInsertDriveFile className="mar-l" color="#C1C1C1" size="24px" />
          <span className=" text-dark  mar-l ">{file}</span>
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
            file={file}
            path={path}
            render={render}
            setRender={setRender}
            setCheckOption={setCheckOption}
            setOption={setOption}
          />
        ) : null}
      </div>
    </div>
  );
}
