import React, { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import { BsFolderPlus } from "react-icons/bs";
import { AiOutlinePlus } from "react-icons/ai";
import axios from "axios";

export default function AddFolderBtn({ path, setPath, render, setRender }) {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");

  function openModal() {
    setOpen(true);
  }

  function closeModal() {
    setOpen(false);
  }

  async function handleSubmit(e) {
    e.preventDefault();

    console.log(name);
    axios.post("http://localhost:3001/createFolder", {
      name: name,
      path: path,
    });

    setName("");
    closeModal();
    render ? setRender(false) : setRender(true);
  }

  return (
    <div className="containerAddFolder bg-primary  rounded ">
      <Button
        onClick={openModal}
        size="lg"
        className=" d-flex justify-content-between w-100 h-100 align-items-center"
      >
        <BsFolderPlus size="40px" />
        <span>New Folder</span>
        <AiOutlinePlus size="25" />
      </Button>
      <Modal show={open} onHide={closeModal}>
        <Form onSubmit={handleSubmit}>
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
              Add Folder
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </div>
  );
}
