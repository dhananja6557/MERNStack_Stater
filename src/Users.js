import { Box } from "@mui/material";
import UserForm from "./UserForm";
import UsersTable from "./UsersTable";

const usersData = [
    {
        id: 1,
        name: 'John Doe',
        email: ''
    },
    {
        id: 2,
        name: 'Jane Doe',
        email: ''
    },
    {
        id: 3,
        name: 'John Smith',
        email: ''
    },
    {
        id: 4,
        name: 'Jane Smith',
        email: ''
    }
];

const Users = () => {
    return (
        <Box
            sx={{
                width: 'calc(100% - 100px)',
                margin: '0 auto',
                marginTop: '100px',
            }}
        >
            <UserForm />
            <UsersTable users={usersData} />
        </Box>
    );
}

export default Users;