import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction} from '@reduxjs/toolkit'

export interface userState  {
    firstname: string,
    lastname: string,
    age: number
}

const initialState : userState = {
    firstname:'Chux',
    lastname: 'Agu',
    age:90
}

export const userSlice = createSlice({
    name:"user",
    initialState,
    reducers:{
        updateName: (state, action:PayloadAction<string>)=>{
            state.firstname = action.payload
        }
    }
})


export const {updateName} = userSlice.actions
export default userSlice.reducer