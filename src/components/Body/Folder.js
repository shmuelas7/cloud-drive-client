import React from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

import { BsFillFolderSymlinkFill } from "react-icons/bs";

export default function Folder({ folder, setPath, path }) {
  console.log(folder, path);
  return (
    <Button
      variant="outline-dark"
      className="text-truncate w-100"
      onClick={() => {
        setPath(`${path}/${folder}`);
      }}
    >
      <BsFillFolderSymlinkFill className="mr-2" />
      {folder}
    </Button>
  );
}
