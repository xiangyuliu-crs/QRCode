import Modal, { ModalBody, ModalFooter, ModalHeader } from "./Modal";

const MessageModal = ({ showModal, setShowModal }) => {
  return (
    <div>
      <Modal show={showModal} setShow={setShowModal}>
        <ModalHeader>
          <h2>Modal header</h2>
        </ModalHeader>
        <ModalBody>
          <p style={{ textAlign: "justify" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
            maxime dolorem asperiores laboriosam ad delectus ea. Tempora tempore
            repellendus laudantium fugiat saepe mollitia eius illo possimus
            laborum consequuntur, tenetur neque.
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
