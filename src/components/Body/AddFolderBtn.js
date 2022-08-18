import React, { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import { FaFolderPlus } from "react-icons/fa";
import axios from "axios";

export default function AddFolderBtn({ path, setPath }) {
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
    setPath(path);
  }

  return (
    <div className="containerAddFolder">
      <Button onClick={openModal} variant="outline-success" size="sm">
        {<FaFolderPlus size="40px" />}
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
