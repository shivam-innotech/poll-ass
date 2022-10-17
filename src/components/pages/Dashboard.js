import { Button, CssBaseline, Grid, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import ChangePassword from './auth/ChangePassword';

const Dashboard = () => {
    const navigate = useNavigate()
    const handleLogout = () => {
        console.log("Logout Clicked");
        navigate('/login')
    }
    return <>
        <CssBaseline />
        <Grid container>
            <Grid item sx={{ p: 2 }}>
                <Button variant='contained' color='warning' size='large' onClick={handleLogout} sx={{ mt: 2 }}>Logout</Button>
            </Grid>
            <Grid item sm={8}>
                <ChangePassword />
            </Grid>
        </Grid>
    </>;
};

export default Dashboard;