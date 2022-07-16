import Modal, { ModalBody, ModalFooter, ModalHeader } from "./Modal";

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
          <button onClick={() => setShowModal(false)}>Close</button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default MessageModal;
