import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useNavigate } from "react-router-dom";
import "./SyncModal.scss";

function SyncModal({ URL }) {
  const navigate = useNavigate();
  const [smShow, setSmShow] = useState(true);

  const onClickHandler = (e) => {
    e.preventDefault();
    console.log("Clicked !");

    if (URL) {
      // setSmShow(false);
      // navigate(URL);
    } else {
      // setSmShow(false);
    }
  };
  return (
    <>
      <Modal
        className="syncModalMain"
        onBackdropClick={() => setSmShow(true)}
        keyboard={false}
        animation={false}
        backdrop="static"
        show={smShow}
      >
        <Modal.Header
          style={
            {
              // borderBottom: "none",
            }
          }
        >
          <Modal.Title id="example-modal-sizes-title-sm">
            For further work with the website synchronise your wallet
          </Modal.Title>
        </Modal.Header>

        <Modal.Body className="syncModal-body">
          <Button
            onClick={onClickHandler}
            style={{
              backgroundColor: "#ff7043",
              borderColor: "#ff7043",
              padding: "15px",
            }}
          >
            <i class="fas fa-sync-alt"></i> Synchronize
          </Button>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default SyncModal;
