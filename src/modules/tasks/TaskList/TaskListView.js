import  Button from '@material-ui/core/Button'
import PageHeader from '_common/components/PageHeader'
import TaskListFilter from './TaskListFilter'
import TaskListTable from './TaskListTable'

const TaskListView = () => {
    const newButton = <Button>Nova</Button>


    return (
       <> 
            < PageHeader title='Tarefas' actionButton={newButton} />
            < TaskListFilter />
            < TaskListTable />
       </>
    )
}

export default TaskListView