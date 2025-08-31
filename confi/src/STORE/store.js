import { createSlice , configureStore } from '@reduxjs/toolkit';


const user_Slice = createSlice({
    name:"my_",
    initialState:{count:0},
    reducers:{
    increment (state,action){state },
    decrement (state,action){state.count--}
    
    }
})
 export const actions = user_Slice.actions;

 const store = configureStore({reducer:user_Slice.reducer});

 export default store;