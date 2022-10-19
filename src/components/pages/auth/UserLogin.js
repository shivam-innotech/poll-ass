import { TextField, Button, Box, Alert } from '@mui/material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { loginuser } from '../../../redux/authSlice';
// import axios from 'axios'

const UserLogin = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const dispatch = useDispatch()
    const handleEmail = event => {
        setEmail(event.target.value);
    };
    const handlePassword = event => {
        setPassword(event.target.value);
    };
    const handleLogin = () => {
        dispatch(loginuser(email, password))
    }
    // const [email, setEmail] = useState('')
    // const [password, setPassword] = useState('')

    // const handleEmail = (e) => {
    //     setEmail(e.target.value)
    // }
    // const navigate = useNavigate();
    // const handlePassword = (e) => {
    //     setPassword(e.target.value)
    // }
    // const handleApi = () => {
    //     console.log({ email, password })
    //     axios.get(`https://secure-refuge-14993.herokuapp.com/list_users`)
    //         .then(Response => {
    //             console.log(Response.data.data)
    //             if (Response.data === email) {
    //                 alert("Invalid !")
    //             }
    //             else {
    //                 navigate('/polls')
    //             }
    //         })
    // }
    const [error, setError] = useState({
        status: false,
        msg: "",
        type: ""
    })
    const navigate = useNavigate();
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
        <Box component='form' noValidate sx={{ mt: 1 }} id='login-form' onSubmit={handleSubmit}>

            <TextField margin='normal' required fullWidth id='email' name='email' label='Email Address'
                onChange={handleEmail} value={email} />

            <TextField margin='normal' required fullWidth id='password' name='password' label='Password'
                onChange={handlePassword} value={password} />

            <Box textAlign='center'>
                <Button type='submit' variant='contained' sx={{ mt: 3, mb: 2, px: 5 }}>Login0</Button>
            </Box>
            <button onClick={handleLogin}>log</button>
            {error.status ? <Alert severity={error.type} sx={{ mt: 3 }}>{error.msg}</Alert> : ''}
        </Box>
    </>;
};

export default UserLogin;