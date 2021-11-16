import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import LoadingSpinner from '_common/lotties/LoadingSpinner'
import EmptyBox from '_common/lotties/EmptyBox'
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import ConfirmationDialog from '_common/components/ConfirmationDialog';

const UsersListTableView = ({ users, handleEdit, userDelete, setUserDelete, handleDeleteConfirmation }) => {
  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell>Nome</TableCell>
              <TableCell>E-mail</TableCell>
              <TableCell width="150" align="center">Ações</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users &&
              users.map((user) => (
                <TableRow
                  hover
                  key={user._id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {user.name}
                  </TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell padding="none" align="right">
                    <IconButton onClick={() => handleEdit(user)}>
                      <EditIcon />
                    </IconButton>
                    <IconButton onClick={() => setUserDelete(user)}>
                      <DeleteIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    {!users && <LoadingSpinner />}
    {users && !users.length && <EmptyBox />}
    {userDelete && (
        <ConfirmationDialog
          title="Excluir Usuário"
          text={`Tem certeza que deseja excluir o usuário ${userDelete.name}?`}
          handleClose={() => setUserDelete(null)}
          handleConfirmation={handleDeleteConfirmation}
        />
      )}
    </>
  );
};

export default UsersListTableView;
