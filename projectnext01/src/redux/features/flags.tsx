import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import flagsService from '../../services/flags';


export interface IssueInitialState {
    projectIssues: string[]
}



export const findFlags = createAsyncThunk(
    'flags/find',
    flagsService.find
)

const flagsSlice = createSlice({
    name: "flag",
    initialState: {
        flag: [],
    },
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(
                findFlags.fulfilled,
                (state, { payload }) => {
                    console.log('flags loaded!');
                    console.log('payload', payload);
                    return payload;
                }
            )
            .addCase(
                findFlags.pending,
                (state, { payload }) => {
                    console.log('load flags');
                }
            )
            .addCase(
                findFlags.rejected,
                (state, { payload }) => {
                    console.log('busca de palavras rejeitada!');
                }
            )
    }
});


export default flagsSlice.reducer;

