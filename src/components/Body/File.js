import { MdInsertDriveFile } from "react-icons/md";
import React from "react";

export default function File({ file }) {
  return (
    <a
      href={file.url}
      //   target="_blank"
      className="btn btn-outline-dark text-truncate w-100"
    >
      <MdInsertDriveFile className="mr-2" />
      {file}
    </a>
  );
}
