import type { CaseReducer, PayloadAction } from '@reduxjs/toolkit'
import { IExampleSlice } from '.'
import { DeepPartial } from '../../types'
import { IReturns } from './actions'

export const exampleReducer: CaseReducer<
    IExampleSlice,
    PayloadAction<DeepPartial<IReturns>>
> = (state, { payload }) => {
    return { ...state, hello: payload.helloWorld ?? '' }
}
