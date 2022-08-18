import React from "react";
import { Breadcrumb } from "react-bootstrap";

export default function FolderBreadcrumbs({ path, setPath }) {
  let currentFolder = path.split("/");
  console.log(currentFolder);

  return (
    <Breadcrumb
      className="flex-grow-1"
      listProps={{ className: "bg-white pl-0 m-0" }}
    >
      {currentFolder.map((folder, i) => (
        <Breadcrumb.Item
          key={i}
          onClick={(e) => {
            let click = e.target.innerHTML;
            let i = 0;
            let newPath = "root";
            while (currentFolder[i] !== click) {
              newPath += "/" + currentFolder[i + 1];
              i++;
            }
            setPath(newPath);
          }}
          className="text-truncate d-inline-block"
          style={{ maxWidth: "150px" }}
        >
          {folder}
        </Breadcrumb.Item>
      ))}
    </Breadcrumb>
  );
}
