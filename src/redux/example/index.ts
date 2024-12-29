import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { exampleThunkAction } from './actions'
import { exampleReducer } from './reducers'

export interface IExampleSlice {
    hello: string
}

const initialState: IExampleSlice = {
    hello: 'world',
}

export const exampleSlice = createSlice({
    name: 'example',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(exampleThunkAction.pending, exampleReducer)
            .addCase(exampleThunkAction.fulfilled, exampleReducer)
            .addCase(exampleThunkAction.rejected, exampleReducer)
    },
})

// Action creators are generated for each case reducer function
export const {} = exampleSlice.actions

export default exampleSlice.reducer
