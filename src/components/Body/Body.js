import React from "react";
import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import AddFolderBtn from "./AddFolderBtn";
import AddFileBtn from "./AddFileBtn";
import Folder from "./Folder";
import File from "./File";
import Header from "./Header";
import Option from "./Option";

import axios from "axios";

import FolderBreadcrumbs from "./FolderBreadcrumbs";

export default function Body() {
  const [path, setPath] = useState("root");
  const [render, setRender] = useState(false);
  const [fileList, setFileList] = useState([]);

  const [checkOption, setCheckOption] = useState(false);

  // const openFile = function (e) {
  //   checkOption ? setCheckOption(false) : setCheckOption(true);
  // };

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
  }, [path, render]);

  return (
    <>
      <Container fluid>
        <div className="container mainBox">
          <div className="d-flex  flex-row mt-5 headerContainer d-flex justify-content-center  ">
            <AddFolderBtn
              path={path}
              setPath={setPath}
              render={render}
              setRender={setRender}
            />
            <AddFileBtn path={path} render={render} setRender={setRender} />
            <Header />
          </div>
          <FolderBreadcrumbs
            path={path}
            setPath={setPath}
            render={render}
            setRender={setRender}
            checkOption={checkOption}
            setCheckOption={setCheckOption}
          />
          <div className="d-flex flex-wrap">
            {fileList.map((item, i) =>
              !item.includes(".") ? (
                <div key={i} className="p-2 ">
                  <Folder
                    folder={item}
                    setPath={setPath}
                    path={path}
                    setCheckOption={setCheckOption}
                    checkOption={checkOption}
                  />
                </div>
              ) : (
                <div
                  cl
                  key={i}
                  className="p-2 file"
                  // onClick={(e) => {
                  //   openFile(e);
                  // }}
                >
                  <File
                    file={item}
                    path={path}
                    render={render}
                    setRender={setRender}
                    checkOption={checkOption}
                    setCheckOption={setCheckOption}
                  />
                </div>
              )
            )}
          </div>
        </div>
      </Container>
    </>
  );
}
