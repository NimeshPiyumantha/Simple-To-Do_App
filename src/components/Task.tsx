import { ITask } from "@/types/tasks";
import { FiEdit, FiTrash2 } from "react-icons/fi";
import React, { FormEventHandler, useState } from "react";
import { useRouter } from "next/navigation";
import Modal from "./Modal";

interface TaskProps {
  task: ITask;
}

const Task: React.FC<TaskProps> = ({ task }) => {
  const router = useRouter();
  const [openModalEdit, setOpenModalEdit] = useState<boolean>(false);
  const [openModalDelete, setOpenModalDelete] = useState<boolean>(false);
  const [editTaskValue, setEditTaskValue] = useState<string>(task.text);

  const handleSubmitEditTodo = () => {};

  return (
    <tr key={task.id}>
      <td className="w-full">{task.text}</td>
      <td className="flex gap-5">
        <FiEdit cursor="pointer" className="text-yellow-500" size={25} />
        <Modal modalOpen={openModalEdit} setModalOpen={setOpenModalEdit}>
          <form onSubmit={handleSubmitEditTodo}>
            <h3 className="font-bold text-lg">Add new task</h3>
            <div className="modal-action">
              <input
                value={editTaskValue}
                onChange={(e) => setEditTaskValue(e.target.value)}
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full"
              />
              <button type="submit" className="btn">
                Submit
              </button>
            </div>
          </form>
        </Modal>
        <FiTrash2 cursor="pointer" className="text-red-500" size={25} />
      </td>
    </tr>
  );
};

export default Task;
