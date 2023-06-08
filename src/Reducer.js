import {createReducer} from "@reduxjs/toolkit"
// import { act } from "react-dom/test-utils"

export const customReducer = createReducer({
    savedItems:[],total:0
},{
    addToCart:(state,action)=>{
        const item = action.payload
        // state.savedItems.push(item)
        const isItemExists = state.savedItems.find((i)=>  i.id ===  item.id)
        if (!isItemExists) {
            state.savedItems.push(item)
        }
    },
    removeCart:(state,action)=>{
      state.savedItems =   state.savedItems.filter((i)=> i.name !== action.payload)
    }
})