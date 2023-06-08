import {configureStore} from "@reduxjs/toolkit"
import { customReducer } from "./Reducer"

const store = configureStore({
    reducer: {saved: customReducer}
})

export default store