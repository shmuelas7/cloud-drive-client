import { MdInsertDriveFile } from "react-icons/md";
import React, { useState } from "react";
import Option from "./Option";

export default function File({ file, path, render, setRender }) {
  const [option, setOption] = useState(false);

  const openFile = function (e) {
    option ? setOption(false) : setOption(true);
  };
  return (
    <div>
      {option ? (
        <Option file={file} path={path} render={render} setRender={setRender} />
      ) : null}
      <div
        className="btn btn-outline-dark text-truncate w-100"
        onClick={(e) => {
          openFile(e);
        }}
      >
        <MdInsertDriveFile className="mr-2" />
        {file}
      </div>
    </div>
  );
}
