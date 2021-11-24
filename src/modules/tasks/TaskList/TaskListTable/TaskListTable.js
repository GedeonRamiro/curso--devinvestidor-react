import TaskListTableView from "./TaskListTableView"
import { useParams } from 'react-router'
import TaskService from "modules/tasks/services/task.service"
import { useEffect, useContext, useState} from 'react'
import { TaskListContext } from '../context/TaskListContext'


const TaskListTable = () => {

    const { status } = useParams()

    const { tasks, setTasks, filter } = useContext(TaskListContext)
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
        return () => {
            setTasks(null)
            setFilteredTasks(null)
        }

    }, [status, setTasks])

    useEffect(() => {

        if(tasks){
            const result = tasks.filter(
                (task) => 
                task.description.toLowerCase().includes(filter.toLowerCase()) ||
                task.responsible.name.toLowerCase().includes(filter.toLowerCase()) 
            )

            setFilteredTasks(result)
        }

    },[filter, tasks])
  
    return (
       <TaskListTableView tasks={filteredTasks} />
    )
}

export default TaskListTable