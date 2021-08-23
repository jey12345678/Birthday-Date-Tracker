import Task from "./Task.js"

//state is immutable, you cannot change it.
const Tasks = ({tasks,onDelete, onToggle}) => {


    return (
        <>
        {tasks.map((task) =>(<Task key = {task} task = {task} onDelete = {onDelete} onToggle = {onToggle} />))}
            
        </>
    )
}

export default Tasks
