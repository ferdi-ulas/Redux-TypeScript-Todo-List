import { IoMdRemoveCircleOutline } from "react-icons/io";
import { FaCheck } from "react-icons/fa";
import { FaRegEdit } from "react-icons/fa";
import "../css/Todo.css"
import { TodoType } from '../types/Types';
import { useDispatch } from "react-redux";
import { removeTodoById, updateTodo } from "../redux/TodoSlice";
import { useState } from "react";

interface TodoProps {
    todoProps: TodoType
}

function Todo({ todoProps }: TodoProps) {

    const { id, content } = todoProps;

    const [editable, setEditable] = useState<boolean>(false);
    const [newTodo, setNewTodo] = useState<string>(content);

    const dispatch = useDispatch();

    const handleRemoveTodo = () => {
        dispatch(removeTodoById(id));
    }

    const handleUpdateTodo = () => {
        const payload: TodoType = {
            id: id,
            content: newTodo
        }
        dispatch(updateTodo(payload))
        setEditable(false)
    }

    return (

        <div className='todoDiv'>
            {editable ? <input className="current-input" type="text " value={newTodo} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setNewTodo(e.target.value)} /> : <div>{content}</div>}
            <div>
                <IoMdRemoveCircleOutline className='icons' onClick={handleRemoveTodo} style={{ marginRight: "5px" }} />
                {editable ? <FaCheck className="icons" onClick={handleUpdateTodo} /> : <FaRegEdit onClick={() => setEditable(true)} className='icons' />}

            </div>
        </div>

    )
}

export default Todo