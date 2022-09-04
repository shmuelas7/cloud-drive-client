import axios from "axios";
import React, { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";

export default function Option({ file, path, render, setRender }) {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");

  function openModal() {
    setOpen(true);
  }

  function closeModal() {
    setOpen(false);
  }

  const fileDel = async function () {
    let res = await axios.post("http://localhost:3001/delFile", {
      body: path + "/" + file,
    });
    console.log(res);
    render ? setRender(false) : setRender(true);
  };
  const rename = async function (e) {
    e.preventDefault();
    let endName = file.split(".");
    endName = endName[1];
    console.log(endName);
    let res = await axios.post("http://localhost:3001/renameFile", {
      path: path + "/" + file,
      name: path + "/" + name + "." + endName,
    });
    console.log(res);
    setName("");
    closeModal();
    render ? setRender(false) : setRender(true);
  };

  async function download() {}

  return (
    <div className=" d-flex flex-between ">
      <button
        className="btn btn-outline-primary border rounded-left"
        onClick={download}
      >
        download
      </button>
      <button className="btn btn-outline-primary border" onClick={fileDel}>
        delete
      </button>
      <button
        className="btn btn-outline-primary border rounded-right"
        onClick={openModal}
      >
        rename
      </button>
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
  );
}
