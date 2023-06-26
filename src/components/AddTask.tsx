import React, { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import Modal from "./Modal";

const AddTask = () => {
const [modalOpen,setModalOpen] =useState<boolean>(false);

  return (
    <div>
      <button className="btn btn-primary w-full">
        Add New task <AiOutlinePlus className="ml-2" size={18} />
      </button>

      <Modal modalOpen={modalOpen}/>
    </div>
  );
};

export default AddTask;
