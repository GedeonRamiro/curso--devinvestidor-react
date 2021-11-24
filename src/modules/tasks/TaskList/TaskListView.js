import  Button from '@material-ui/core/Button'
import PageHeader from '_common/components/PageHeader'
import TaskListFilter from './TaskListFilter'
import TaskListTable from './TaskListTable'
import TaskDialog from './TaskDialog'

const TaskListView = ({ taskDialog, handleNew }) => {
    const newButton = <Button onClick={handleNew}>Nova</Button>


    return (
       <> 
            < PageHeader title='Tarefas' actionButton={newButton} />
            < TaskListFilter />
            < TaskListTable />
            {taskDialog.open && <TaskDialog />}
       </>
    )
}

export default TaskListView