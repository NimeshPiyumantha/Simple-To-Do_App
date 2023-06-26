"use client";

import React, { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import Modal from "./Modal";

const AddTask = () => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  return (
    <div>
      <button
        onClick={() => setModalOpen(true)}
        className="btn btn-primary w-full"
      >
        Add New task <AiOutlinePlus className="ml-2" size={18} />
      </button>

      <Modal modalOpen={modalOpen} setModalOpen={setModalOpen}>
        modal for add todo
      </Modal>
    </div>
  );
};

export default AddTask;
