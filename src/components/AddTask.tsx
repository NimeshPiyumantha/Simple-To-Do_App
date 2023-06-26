import React from "react";
import {AiOutlinePlus} from "react-icons/ai"

const AddTask = () => {
  return (
    <div>
      <button className="btn btn-primary w-full">Add New task <AiOutlinePlus className="ml-2" size={18}/></button>
    </div>
  );
};

export default AddTask;
