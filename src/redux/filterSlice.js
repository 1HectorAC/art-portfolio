import { createSlice } from '@reduxjs/toolkit'

export const filterSlice = createSlice({
    name: 'filter',
    initialState: {
        value: 'All'
    },
    reducers: {
        changeFilter: (state, action) => {
            state.value = action.payload
        }
    }
})

export const { changeFilter } = filterSlice.actions

export default filterSlice.reducer

export const selectFilter = state => state.filter.value