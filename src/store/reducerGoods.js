import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


export const fetchContentGoods = createAsyncThunk(
    'content/fetchContent',
    async () => {
        const res = await fetch('http://localhost:5000/goods')
        const data = await res.json()
        return data
    }
)


const goodsSlice = createSlice({
    name: 'goods',
    initialState: {
        arr: [],
        isLoading: false,
        error: null,
        postData: null,
    },
    reducer: {
        
    },
    extraReducers: (builder) => {
        builder.addCase(fetchContentGoods.pending, (state) => {
            state.isLoading = true
        })
        builder.addCase(fetchContentGoods.fulfilled, (state, action) => {
            state.arr = action.payload
            state.isLoading = false
        })
        builder.addCase(fetchContentGoods.rejected, (state, action) => {
            state.isLoading = false
            state.error = true
        })
    }
})


export const { } = goodsSlice.actions

export default goodsSlice.reducer