import { createSlice } from "@reduxjs/toolkit";
import { profileData } from "../../utils/profileData";

const initialState = profileData

const userSlice = createSlice({
    name: 'profileData',
    initialState,
    reducers: {
        getUser: (state) => state,
        updateUser: (state, action) => {
            return { ...state, ...action.payload }
        }
    }
})

export const { getUser, updateUser } = userSlice.actions
export default userSlice.reducer;