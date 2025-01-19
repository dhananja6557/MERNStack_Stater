import { Box } from "@mui/material";
import UserForm from "./UserForm";
import UsersTable from "./UsersTable";
import { useEffect, useState } from "react";
import Axios from "axios";

const Users = () => {
    const [usersData, setUsersData] = useState([]);
    const [selectedUser, setSelectedUser] = useState({});
    const [isEdit, setIsEdit] = useState(false);

    const getUserData = () => {
        Axios.get('http://localhost:3001/api/users')
            .then(response => {
                setUsersData(response.data.reasponse);
                console.log(response.data.reasponse);

            })
            .catch(error => {
                console.error("There was an error fetching the users!", error);
            });

    };

    const addUser = (data) => {
        setIsEdit(true);

        const payload = {
            id: data.id,
            name: data.name,
        }

        Axios.post('http://localhost:3001/api/createuser', payload)
            .then(response => {
                getUserData();
                setIsEdit(false);
            })
            .catch(error => {
                console.error("There was an error fetching the users!", error);
            });
    };

    const updateUser = (data) => {
        setIsEdit(true);

        const payload = {
            id: data.id,
            name: data.name,
        }

        Axios.post('http://localhost:3001/api/updateuser', payload)
            .then(() => {
                getUserData();
                setIsEdit(false);
            })
            .catch(error => {
                console.error("There was an error fetching the users!", error);
            });
    };

    const deleteUser = (id) => {
        Axios.post('http://localhost:3001/api/deleteuser', id)
            .then(() => {
                getUserData();
            })
            .catch(error => {
                console.error("There was an error fetching the users!", error);
            });
    };

    useEffect(() => {
        getUserData();
    }, []);

    return (
        <Box
            sx={{
                width: 'calc(100% - 100px)',
                margin: '0 auto',
                marginTop: '100px',
            }}
        >
            <UserForm
                addUser={addUser}
                updateUser={updateUser}
                selectedUser={selectedUser}
                isEdit={isEdit}
            />
            <UsersTable 
                users={usersData}
                deleteUser={data => {
                    window.confirm('Are you sure you want to delete this record!') && deleteUser({ id: data.id });
                }}
                selectedUserData={data => {
                    setSelectedUser(data);
                    setIsEdit(true);
                }}
            />
        </Box>
    );
}

export default Users;