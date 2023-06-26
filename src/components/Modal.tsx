import React from "react";

interface ModalProps {
  modalOpen: boolean;
}

const Modal: React.FC<ModalProps> = ({ modalOpen }) => {
  return (
    <div className={`modal ${modalOpen ? "modal-open" : ""}`}>
      <div className="modal-box relative">
        <label
          htmlFor="my-modal-3"
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
