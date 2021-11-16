import TaskListTableView from "./TaskListTableView"
import { useParams } from 'react-router'
import TaskService from "modules/tasks/services/task.services"
import { useEffect, useContext, useState} from 'react'
import { TaskListContext } from '../context/TaskListContext'


const TaskListTable = () => {

    const { status } = useParams()

    const { setTasks, tasks } = useContext(TaskListContext)
    const [filteredTasks, setFilteredTasks] = useState(null);
   
    useEffect(() => {

        const fetchTasks =  async () => {
            const { 
                data : { body } 
            } = await TaskService.getByStatus(status)

            setTasks(body)
            setFilteredTasks(body)
        }
        fetchTasks()
    }, [status])
  
    return (
       <TaskListTableView tasks={filteredTasks} />
    )
}

export default TaskListTable