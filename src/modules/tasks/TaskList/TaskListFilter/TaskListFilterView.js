import { TextField } from '@material-ui/core';
import useStyles from './TaskListFilterStyle';

const TaskListFilterView = () => {

    const classes = useStyles();

    return (
    <div className={classes.root}>
        <TextField placeholder="Pesquise por nome ou email"  />
    </div>
    )
}

export default TaskListFilterView