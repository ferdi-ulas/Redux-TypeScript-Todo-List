import Todo from './Todo'
import { RootState } from '../redux/Store'
import { useSelector } from 'react-redux'
import { TodoType } from '../types/Types'

function TodoList() {

    const { todos } = useSelector((state: RootState) => state.todo)
    return (
        <div>
            {todos && todos.map((todo: TodoType) => (
                <Todo key={todo.id} todoProps={todo} />
            ))}

        </div>
    )
}

export default TodoList