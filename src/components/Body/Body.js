import React from "react";
import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import AddFolderBtn from "./AddFolderBtn";
import AddFileBtn from "./AddFileBtn";
import Folder from "./Folder";
import File from "./File";

import axios from "axios";

import FolderBreadcrumbs from "./FolderBreadcrumbs";

export default function Body() {
  const [path, setPath] = useState("root");
  const [fileList, setFileList] = useState([]);

  useEffect(() => {
    const getData = async () => {
      console.log(path);
      const data = await axios.get(`http://localhost:3001/root`, {
        params: { path: path },
      });
      console.log(data.data);
      setFileList(data.data);
    };
    console.log("Running");
    getData();
  }, [path]);

  return (
    <>
      <Container fluid>
        <FolderBreadcrumbs path={path} setPath={setPath} />
        <div className="d-flex  flex-row-reverse  ">
          <AddFolderBtn path={path} />
          <AddFileBtn currentFolder={null} />
        </div>
        <div className="d-flex flex-wrap">
          {fileList.map((item, i) =>
            !item.includes(".") ? (
              <div key={i} style={{ maxWidth: "250px" }} className="p-2">
                <Folder folder={item} setPath={setPath} path={path} />
              </div>
            ) : (
              <div key={i} style={{ maxWidth: "250px" }} className="p-2">
                <File file={item} />
              </div>
            )
          )}
        </div>
      </Container>
    </>
  );
}
