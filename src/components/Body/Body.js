import React from "react";
import { Container } from "react-bootstrap";
// import { useFolder } from "../../hooks/useFolder";
import AddFolderBtn from "./AddFolderBtn";
import AddFileBtn from "./AddFileBtn";
// import Folder from "./Folder";
// import File from "./File";
// import Navbar from "./Navbar";
// import FolderBreadcrumbs from "./FolderBreadcrumbs";
// import { useParams, useLocation } from "react-router-dom";

export default function Dashboard() {
  // const { folderId } = useParams();
  // const { state = {} } = useLocation();
  // const { folder, childFolders, childFiles } = useFolder(
  //   folderId,
  //   state.folder
  // );

  return (
    <>
      {/* <Navbar /> */}
      <Container fluid>
        <div className="d-flex align-items-center">
          {/* <FolderBreadcrumbs currentFolder={folder} /> */}
          <AddFileBtn currentFolder={null} />
          <AddFolderBtn currentFolder={null} />
        </div>
      </Container>
    </>
  );
}
