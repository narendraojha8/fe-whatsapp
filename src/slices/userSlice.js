import { createSlice } from "@reduxjs/toolkit";
const initialState =  {
    status: "",
    error: "",
    user: {
        id: "",
        name: "",
        email: "",
        picture: "",
        token: "",
    }
}
export const userSlice = createSlice({
    name:'user',
    initialState,
    reducers:{
        add:()=>{
            
        },
        logout: (state) => {
                state.status = ""
                state.error = ""
                state.user = {
                    id: "",
                    name: "",
                    email: "",
                    picture: "",
                    token: "",
                }
             
        }
    }
})

export const {logout } = userSlice.actions;
export default userSlice.reducer;