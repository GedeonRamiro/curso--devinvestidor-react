import Paper from "@material-ui/core/Paper";
import Chip from '@material-ui/core/Chip';
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import EmptyBox from '_common/lotties/EmptyBox';
import LoadingSpinner from '_common/lotties/LoadingSpinner';
import { TASK_STATUS } from '_common/constants/common.constants';

const TaskListTableView = ({ tasks }) => {

  const renderStatusChip = (status) => {
    switch (status) {
      case TASK_STATUS.OPEN:
        return <Chip size="small" label="Aberta" color="primary" />;
      default:
        return <Chip size="small" label="Fechada" />;
    }
  };

    return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell>Situação</TableCell>
              <TableCell>Descrição</TableCell>
              <TableCell>Responsável</TableCell>
              <TableCell width="150" align="center">Ações</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tasks &&
              tasks.map((task) => (
                <TableRow
                  hover
                  key={task._id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {task.description}
                  </TableCell>
                  <TableCell>{renderStatusChip(task.status)}</TableCell>
                  <TableCell>{task.responsible.name}</TableCell>
                  <TableCell padding="none" align="right">
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    {!tasks && <LoadingSpinner />}
    {tasks && !tasks.length && <EmptyBox />}
    </>
    )
}

export default TaskListTableView