import { TableContainer, Table, Paper, TableHead, TableBody, TableRow, TableCell, Button } from "@mui/material";

const UsersTable = ({ users, deleteUser, selectedUserData }) => {
    return (
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>ID</TableCell>
                        <TableCell>Name</TableCell>
                        <TableCell>Encrypted ID</TableCell>
                        <TableCell>Actions</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        users.length > 0 ? users.map(user => (
                            <TableRow key={user._id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                <TableCell component='th' scope="row">{user.id}</TableCell>
                                <TableCell component='th' scope="row">{user.name}</TableCell>
                                <TableCell component='th' scope="row">{user._id}</TableCell>
                                <TableCell>
                                    <Button
                                        sx={{ margin: '0 10px' }}
                                        onClick={() => selectedUserData({ id: user.id, name: user.name })}
                                    >
                                        Edit
                                    </Button>
                                    <Button
                                        sx={{ margin: '0 10px', color: 'red' }}
                                        onClick={() => deleteUser({ id: user.id })}
                                    >
                                        Delete
                                    </Button>
                                </TableCell>
                            </TableRow>
                        )) : (
                            <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                <TableCell component='th' colSpan={4} align="center">No users</TableCell>
                            </TableRow>
                        )
                    }
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default UsersTable;