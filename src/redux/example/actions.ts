import { createAsyncThunk } from '@reduxjs/toolkit'
import { RootState } from '../store'

export interface IParams {
    arg1: string
    arg2: string
}

export interface IReturns {
    helloWorld: string
}

export const exampleThunkAction = createAsyncThunk<Promise<IReturns>, IParams>(
    'example/thunkAction',
    async ({ arg1, arg2 }, { getState, dispatch }) => {
        const { example } = getState() as RootState

        dispatch(anotherExampleThunkAction)

        return { helloWorld: `${arg1} ${arg2} ${example?.hello}` }
    }
)

export const anotherExampleThunkAction = createAsyncThunk<
    Promise<void>,
    undefined
>('example/thunkAction', async (_, {}) => console.log('doing something'))
