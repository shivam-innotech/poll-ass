import { AppBar, Box, Toolbar, Typography, Button } from '@mui/material';
import { NavLink } from 'react-router-dom';
const Navbar = () => {
  return <>
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="secondary">
        <Toolbar>
          <Typography variant='h5' component={NavLink} to='/' sx={{ flexGrow: 1, color: 'white', textTransform: 'none' }}>POLLING</Typography>

          <Button component={NavLink} to='/' sx={{ color: 'white', textTransform: 'none' }}>Admin</Button>

          <Button component={NavLink} to='/contact' sx={{ color: 'white', textTransform: 'none' }}>Contact</Button>

          <Button component={NavLink} to='/login' sx={{ color: 'white', textTransform: 'none' }}>Login/Registration</Button>

        </Toolbar>
      </AppBar>
    </Box>
  </>;
};

export default Navbar;