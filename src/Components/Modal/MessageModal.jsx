import Modal, { ModalBody, ModalFooter, ModalHeader } from "./Modal";
import Button from "../Button/Button";

const MessageModal = ({ showModal, setShowModal, modalHeader, modalBody }) => {
  return (
    <div>
      <Modal show={showModal} setShow={setShowModal}>
        <ModalHeader>
          <h2>{modalHeader}</h2>
        </ModalHeader>
        <ModalBody>
          <p style={{ textAlign: "justify" }}>
            { modalBody}
          </p>
        </ModalBody>
        <ModalFooter>
          <Button onClick={() => setShowModal(false)}>Close</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default MessageModal;
