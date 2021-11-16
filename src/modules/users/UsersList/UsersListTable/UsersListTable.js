import UsersListTableView from "./UsersListTableView"
import UserService from 'modules/users/services/user.service';
import { useEffect, useContext, useState } from 'react'
import { UsersListContext } from '../context/UsersListContext'
import useSnackbar from '_common/hooks/useSnackbar';


const UsersListTable = () => {

    const { users, setUsers, filter, setUserDialog } = useContext(UsersListContext);
    const [filteredUsers, setFilteredUsers] = useState(null)
    const [userDelete, setUserDelete] = useState(null);

    const { snackbar, snackbarSuccess } = useSnackbar();

    useEffect(() => {
        const fetchUsers = async () => {
            const { data: { body } } = await UserService.getAll()
            setUsers(body)
            setFilteredUsers(body)
        }


        fetchUsers()
    }, [setUsers])

    useEffect(() => {
        if(users){
            const result = users.filter(
                (user) => user.name.toLowerCase().includes(filter.toLowerCase()) 
                || user.email.toLowerCase().includes(filter.toLowerCase)
            )
        
            setFilteredUsers(result)
        };

    },[filter, users])

    const handleEdit = (user) => setUserDialog({ open: true, user });

    const handleDeleteConfirmation = async () => {
        try {
            
            await UserService.remove(userDelete._id)
            setUsers((prevUsers) => prevUsers.filter((prevUser) => prevUser._id !== userDelete._id));
            snackbarSuccess();    
        } catch ({response: { data }}) {
            snackbar(data.message);
        } finally {
            setUserDelete(null);
        }
    }
  
    return <UsersListTableView users={filteredUsers} {...{ handleEdit, userDelete, setUserDelete, handleDeleteConfirmation }} />;
}

export default UsersListTable