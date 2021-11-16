import TaskListTableView from "./TaskListTableView"
import { useParams } from 'react-router'
import TaskService from "modules/tasks/services/task.services"
import { useEffect } from 'react'


const TaskListTable = () => {

    const { status } = useParams()
   
    useEffect(() => {

        const fetchTasks =  async () => {
            const { 
                data : { body } 
            } = await TaskService.getByStatus(status)

            console.log({ body })
        }
        fetchTasks()
    }, [status])
  
    return (
       <TaskListTableView />
    )
}

export default TaskListTable