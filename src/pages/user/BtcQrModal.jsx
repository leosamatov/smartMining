import "./BtcQrModal.css";
import Button from "react-bootstrap/Button";
import Tooltip from "react-bootstrap/Tooltip";
import Overlay from "react-bootstrap/Overlay";
import { useEffect, useRef, useState } from "react";
import Modal from "react-bootstrap/Modal";
import { TextField } from "@mui/material";
import Alert from "react-bootstrap/Alert";

function Copy({ copyText }) {
  const [show, setShow] = useState(false);
  const target = useRef(null);
  return (
    <>
      <Button
        className="btc_buttons"
        ref={target}
        onClick={() => {
          setShow(!show);
          navigator.clipboard.writeText(copyText);
        }}
      >
        <i class="fa-solid fa-copy"></i>
      </Button>
      <Overlay target={target.current} show={show} placement="bottom">
        {(props) => (
          <Tooltip id="overlay-example" {...props}>
            Copied
          </Tooltip>
        )}
      </Overlay>
    </>
  );
}
function HashModal({ showModal, setShowModal }) {
  const [show, setShow] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleClose = () => {
    setShow(false);
    setShowModal(false);
    setSuccess(false);
  };

  useEffect(() => {
    setShow(showModal);
  }, [showModal]);

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Body>
          {!success ? (
            <>
              <Modal.Header closeButton>
                <Modal.Title>Enter the transaction hash</Modal.Title>
              </Modal.Header>
              <TextField
                id="outlined-basic"
                label="Enter the transaction hash"
                variant="outlined"
                style={{
                  marginRight: "10px",
                }}
              />
              <Button
                variant="primary"
                style={{
                  backgroundColor: "#7AD475",
                  borderColor: "#7AD475",
                  padding: "15px",
                }}
                onClick={() => setSuccess(true)}
              >
                Send
              </Button>
            </>
          ) : (
            <Alert
              variant={"success "}
              style={{
                zIndex: "20",
                position: "absolute",
                top: "20px",
              }}
            >
              <Alert.Heading>Success Transaction!</Alert.Heading>
            </Alert>
          )}
          <Modal.Footer>
            {success && (
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
            )}
          </Modal.Footer>
        </Modal.Body>
      </Modal>
    </>
  );
}

const BtcQrModal = ({
  adress = "bc1qmzxqma9txclalccr67uz9xclma52a8kmqf3tgn",
  BitcoinModalOptions,
}) => {
  const { open, summa } = BitcoinModalOptions.BitcoinModalOptions;
  const { setBitcoinModalOptions } = BitcoinModalOptions;
  const [isOpen, setOpen] = useState(open);
  const [showModal, setShowModal] = useState(false);
  useEffect(() => {
    setOpen(open);
  }, [open]);
  return (
    isOpen && (
      <>
        <section className="bitcoin_buy_container">
          <div className="btc_block">
            <header className="btc__header">
              <div>
                <p>Get BTC</p>
              </div>

              <div>
                <a
                  href="#"
                  onClick={() => {
                    if (open) {
                      setBitcoinModalOptions({
                        open: false,
                        summa: null,
                      });
                    }
                    setOpen(!open);
                  }}
                  style={{
                    top: "7px",
                  }}
                  id="close_modal"
                  className="absolute top-4 right-4 z-50"
                >
                  <img src="img/Close.svg" />
                </a>
              </div>
            </header>
            <div className="btc_content">
              <section className="qs-1">
                <div>
                  <img src="./img/qr.png" alt="img" />
                </div>
              </section>
              <section className="qs-2">
                <div>
                  <p>{summa}</p>
                </div>
                <div>
                  <Copy copyText={summa} />
                </div>
              </section>
              <section className="qs-3">
                <div>
                  <p>{adress}</p>
                </div>
                <div>
                  <Copy copyText={adress} />
                </div>
              </section>
              <section className="qs-3">
                <Button
                  className="btc_buy_buttons"
                  onClick={() => setShowModal(true)}
                >
                  I'm buying
                </Button>
              </section>
            </div>
          </div>
        </section>
        <HashModal showModal={showModal} setShowModal={setShowModal} />
      </>
    )
  );
};
export default BtcQrModal;
