import axios from "axios";
import "./style.css";
import React, { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import { AiOutlineClose } from "react-icons/ai";

export default function Option({
  file,
  path,
  render,
  setRender,
  setCheckOption,
  setOption,
}) {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [, updateState] = React.useState();
  const forceUpdate = React.useCallback(() => updateState({}), []);

  function openModal() {
    setOpen(true);
  }

  function closeModal() {
    setOpen(false);
  }
  function reset() {
    setOption(false);
    setCheckOption(false);
    forceUpdate();
    render ? setRender(false) : setRender(true);
  }

  const fileDel = async function (e) {
    e.preventDefault();
    let endName = file.split(".");
    endName = endName[1];
    console.log(endName);
    let res = "";
    if (endName !== undefined) {
      res = await axios.post("http://localhost:3001/delFile", {
        body: path + "/" + file,
      });
      console.log("1");
      reset();
    } else {
      console.log("2");
      res = await axios.post("http://localhost:3001/delFolder", {
        body: path + "/" + file,
      });
      reset();
    }
    console.log(res);
  };
  const rename = async function (e) {
    e.preventDefault();
    let endName = file.split(".");
    endName = endName[1];
    console.log(endName);
    if (endName !== undefined) {
      let res = await axios.post("http://localhost:3001/renameFile", {
        path: path + "/" + file,
        name: path + "/" + name + "." + endName,
      });
    } else {
      let res = await axios.post("http://localhost:3001/renameFile", {
        path: path + "/" + file,
        name: path + "/" + name,
      });
    }
    setName("");
    setOption(false);
    setCheckOption(false);
    closeModal();
    render ? setRender(false) : setRender(true);
  };
  //TODO:
  async function download() {
    let res = await axios.get("http://localhost:3001/download", {
      params: { path: path + "/" + file },
    });
    // const aTag = document.createElement("a");

    // aTag.href = res;
    // aTag.download = file;
    // aTag.click();
    console.log(res);
  }

  return (
    <div className=" d-flex position-absolute action containerOption border rounded">
      <div className=" d-flex x ">
        <AiOutlineClose
          onClick={() => {
            setCheckOption(false);
            setOption(false);
          }}
        />
      </div>
      <div className=" d-flex  justify-content-center align-items-center flex-column  ">
        <div
          className="btnSize justify-content-center align-items-center  d-flex"
          onClick={download}
        >
          download
        </div>
        <div
          className=" btnSize justify-content-center  d-flex"
          onClick={fileDel}
        >
          delete
        </div>
        <div
          onClick={openModal}
          className="btnSize justify-content-center  d-flex"
        >
          rename
        </div>

        <Modal show={open} onHide={closeModal}>
          <Form onSubmit={rename}>
            <Modal.Body>
              <Form.Group>
                <Form.Label>Folder Name</Form.Label>
                <Form.Control
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </Form.Group>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={closeModal}>
                Close
              </Button>
              <Button variant="success" type="submit">
                Change Name
              </Button>
            </Modal.Footer>
          </Form>
        </Modal>
      </div>
    </div>
  );
}
