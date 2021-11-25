import TaskListTableView from "./TaskListTableView"
import { useParams } from 'react-router'
import TaskService from "modules/tasks/services/task.service"
import { useEffect, useContext, useState} from 'react'
import { TaskListContext } from '../context/TaskListContext'
import useSnackbar from "_common/hooks/useSnackbar"


const TaskListTable = () => {

    const { status } = useParams()

    const { tasks, setTasks, filter, setTaskDialog } = useContext(TaskListContext)
    const [filteredTasks, setFilteredTasks] = useState(null);

    const [taskDelete, setTaskDelete] = useState(null);

    const { snackbar, snackbarSuccess } = useSnackbar();
   
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

    const handleEdit = (task) => {
        setTaskDialog({ open: true, task: {...task, responsible: task.responsible._id} })
    }

    const handleDeleteConfirmation = async () => {
        try {
            
            await TaskService.remove (taskDelete._id)
            setTasks((prevTask) => prevTask.filter((prevTask) => prevTask._id !== taskDelete._id))

            snackbarSuccess();

        } catch ({ response: { data } }) {
            snackbar(data.message);
        } finally {
            setTaskDelete(null);
        }
    }
  
    return (
       <TaskListTableView tasks={filteredTasks} {...{handleEdit, taskDelete, setTaskDelete, handleDeleteConfirmation}} />
    )
}

export default TaskListTable