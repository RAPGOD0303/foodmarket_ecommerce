import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import  axios from 'axios';

const API_URL = "http://localhost:5000"; 

export const fetchUser = createAsyncThunk("user/fetchUser", 
    async (_, {rejectWithValue})=>{
    //here we have passed 2 arguments i.e. 1. _(no args), 2. rejectWithValue(use to handle custom error msgs)
try{
    const res = await axios.get(`${API_URL}/api/users`);
    //In the backend code there should be API created for the users, otherwise this won't work.
    return res.data;
}
catch(err){
return rejectWithValue(err.response?.data?.message || err.message)
}
}
);

const userSlice = createSlice({
    name: "users",
    initialState:{
        items: [], //initially empty to store the userdata
        loading:false, // boolean flag to check if any opertaion is in progress
        error:null //used for error handling
    },
    extraReducers: (builder)=>{
        builder
        .addCase(fetchUser.pending, (state)=>{
            state.loading = true;
            state.error = null;
        })
        .addCase(fetchUser.fulfilled, (state,action)=>{
            state.loading = false;
            state.items = action.payload;
        })
        .addCase(fetchUser.rejected,(state, action)=>{
            state.loading = false;
            state.error = action.payload || "Failed to fetch users";
        });
    }
})

export default userSlice.reducer;