import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

let initialstate = {
    user: "",
    token: "",
    loading: false
}

export const loginuser = createAsyncThunk('user', async (body) => {
    let res = await fetch(`https://secure-refuge-14993.herokuapp.com/login?username=admin&password=admin`, {
        method: 'post',
        headers: {
            'Content=Type': 'application/json',
            Authorization: localStorage.getItem('token')
        },
        body: JSON.stringify(body)
    })
    return await res.json();
})

const authSlice = createSlice({
    name: 'user',
    initialstate,
    reducer: {
        addToken: (state, action) => {
            state.token = localStorage.getItem('token')
        },
        addUser: (state, action) => {
            state.token = localStorage.getItem('user')
        }
    },
    extraReducers: {
        [loginuser.pending]: (state, action) => {
            state.loading = true
        },
        [loginuser.fulfilled]: (state, { payload: { user, token } }) =>
            state.loading = true
    },
    [loginuser.fulfilled]: (state, { payload: { user, token } }) => {
        state.loading = false
        state.token = token;
        state.user = user
        localStorage.setItem('token', JSON.stringify(token))
        localStorage.setItem('user', JSON.stringify(user))
    },
    [loginuser.rejected]: (state, action) => {
        state.loading = true
    }
})

export const { addToken, addUser } = authSlice.actions;
export default authSlice.reducer;