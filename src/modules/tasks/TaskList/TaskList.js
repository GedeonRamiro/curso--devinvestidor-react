import TaskListView from "./TaskListView"
import { useContext } from 'react';
import { TaskListContext } from './context/TaskListContext'


const TaskList = () => {

    const { taskDialog, setTaskDialog } = useContext(TaskListContext);
  
    const handleNew = () => setTaskDialog({ open: true });

    return (
       <TaskListView {...{taskDialog, handleNew}} />
    )
}

export default TaskList