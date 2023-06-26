import React from "react";

interface ModalProps {
  modalOpen: boolean;
  setModalOpen: (open: boolean) => void;
}

const Modal: React.FC<ModalProps> = ({ modalOpen, setModalOpen }) => {
  return (
    <div className={`modal ${modalOpen ? "modal-open" : ""}`}>
      <div className="modal-box relative">
        <label
          onClick={() => setModalOpen(false)}
          className="btn btn-sm btn-circle absolute right-2 top-2"
        >
          x
        </label>
        <p className="py-4">This modal works with a hidden checkbox!</p>
      </div>
    </div>
  );
};

export default Modal;
