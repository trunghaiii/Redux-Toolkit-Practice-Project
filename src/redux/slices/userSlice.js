import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const fetchAllUser = createAsyncThunk(
    'users/fetchAllUser',
    async () => {
        const response = await axios.get("http://localhost:8080/users/all")
        return response.data
    }
)

const initialState = {
    listUser: [],
    isLoading: false,
    isError: false
}

export const userSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        // Add reducers for additional action types here, and handle loading state as needed
        builder
            .addCase(fetchAllUser.pending, (state, action) => {
                // Add user to the state array
                state.isLoading = true
                state.isError = false
            })
            .addCase(fetchAllUser.fulfilled, (state, action) => {
                // Add user to the state array
                state.listUser = action.payload
                state.isLoading = false
                state.isError = false
            })
            .addCase(fetchAllUser.rejected, (state, action) => {
                // Add user to the state array
                state.entities.push(action.payload)
                state.isLoading = false
                state.isError = true
            })
    },
})

// Action creators are generated for each case reducer function
//export const { increment, decrement, incrementByAmount, } = userSlice.actions

export default userSlice.reducer