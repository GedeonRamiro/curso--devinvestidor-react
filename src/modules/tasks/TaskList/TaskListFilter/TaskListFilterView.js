import { TextField } from '@material-ui/core';
import useStyles from './TaskListFilterStyle';

const TaskListFilterView = ({ handleChangeSearchTerm }) => {

    const classes = useStyles();

    return (
    <div className={classes.root}>
        <TextField placeholder="Pesquise por nome ou email" onChange={handleChangeSearchTerm} />
    </div>
    )
}

export default TaskListFilterView