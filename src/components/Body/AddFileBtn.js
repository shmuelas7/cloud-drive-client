import React, { useState } from "react";

import { BsFillFileEarmarkArrowUpFill } from "react-icons/bs";
// import { ROOT_FOLDER } from "../../hooks/useFolder"
import { ProgressBar, Toast } from "react-bootstrap";

export default function AddFileBtn({ currentFolder }) {
  const [uploadingFiles, setUploadingFiles] = useState([]);

  function handleUpload(e) {
    const file = e.target.files[0];
    if (currentFolder == null || file == null) return;

    setUploadingFiles((prevUploadingFiles) => [
      ...prevUploadingFiles,
      { name: file.name, progress: 0, error: false },
    ]);
  }

  return (
    <>
      <label className="btn btn-outline-success btn-sm m-0 mr-2">
        <BsFillFileEarmarkArrowUpFill />
        <input
          type="file"
          onChange={handleUpload}
          style={{ opacity: 0, position: "absolute", left: "-9999px" }}
        />
      </label>

      <div
        style={{
          position: "absolute",
          bottom: "1rem",
          right: "1rem",
          maxWidth: "250px",
        }}
      >
        {uploadingFiles.map((file) => (
          <Toast
            key={file.id}
            onClose={() => {
              setUploadingFiles((prevUploadingFiles) => {
                return prevUploadingFiles.filter((uploadFile) => {
                  return uploadFile.id !== file.id;
                });
              });
            }}
          >
            <Toast.Header
              closeButton={file.error}
              className="text-truncate w-100 d-block"
            >
              {file.name}
            </Toast.Header>
            <Toast.Body>
              <ProgressBar
                animated={!file.error}
                variant={file.error ? "danger" : "primary"}
                now={file.error ? 100 : file.progress * 100}
                label={
                  file.error ? "Error" : `${Math.round(file.progress * 100)}%`
                }
              />
            </Toast.Body>
          </Toast>
        ))}
      </div>
    </>
  );
}
