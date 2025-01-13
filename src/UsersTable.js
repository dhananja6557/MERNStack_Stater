import { TableContainer, Table, Paper, TableHead, TableBody, TableRow, TableCell, Button } from "@mui/material";

const UsersTable = ({ users }) => {
    return (
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>ID</TableCell>
                        <TableCell>Name</TableCell>
                        <TableCell>Actions</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        users.length > 0 ? users.map(user => (
                            <TableRow key={user.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                <TableCell component='th' scope="row">{user.id}</TableCell>
                                <TableCell component='th' scope="row">{user.name}</TableCell>
                                <TableCell>
                                    <Button
                                        sx={{ margin: '0 10px' }}
                                        onClick={() => {}}
                                    >
                                        Edit
                                    </Button>
                                    <Button
                                        sx={{ margin: '0 10px' }}
                                        onClick={() => {}}
                                    >
                                        Delete
                                    </Button>
                                </TableCell>
                            </TableRow>
                        )) : (
                            <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                <TableCell component='th' colSpan={3} align="center">No users</TableCell>
                            </TableRow>
                        )
                    }
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default UsersTable;