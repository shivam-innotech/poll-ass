import { TextField, Button, Box, Alert } from '@mui/material';
import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import axios from 'axios'

const Home = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    console.log({ email, password })
    const handleEmail = (e) => {
        setEmail(e.target.value)
    }
    const navigate = useNavigate();
    const handlePassword = (e) => {
        setPassword(e.target.value)
    }
    const handleApi = () => {
        console.log({ email, password })
        axios.get(`https://secure-refuge-14993.herokuapp.com/list_users`)
            .then(Response => {
                console.log(Response.data.data)
                if (Response.data === email) {
                    alert("Invalid !")
                }
                else {
                    navigate('/polls')
                }
            })
    }

    const [error, setError] = useState({
        status: false,
        msg: "",
        type: ""
    })

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = new FormData(e.currentTarget);
        const actualData = {
            email: data.get('email'),
            password: data.get('password'),
        }
        if (actualData.email && actualData.password) {
            console.log(actualData);

            document.getElementById('login-form').reset()
            setError({ status: true, msg: "Login Success", type: 'success' })
            navigate('/dashboard')
        } else {
            setError({ status: true, msg: "All Fields are Required", type: 'error' })
        }
    }
    return <>
        <Box component='form' noValidate sx={{ mt: 2 }} id='login-form' onSubmit={handleSubmit}>
            <TextField margin='normal' required fullWidth id='email' name='email' label='Email Address' />
            <TextField margin='normal' required fullWidth id='password' name='password' label='Password' />
            <Box textAlign='center'>
                <Button type='submit' variant='contained' sx={{ mt: 3, mb: 2, px: 5 }}>Login</Button>
            </Box>
            <NavLink to='/sendpasswordresetemail' >Forgot Password ?</NavLink>
            {error.status ? <Alert severity={error.type} sx={{ mt: 3 }}>{error.msg}</Alert> : ''}
        </Box>
    </>;
};

export default Home;