import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


export const fetchContentMyBag = createAsyncThunk(
    'content/fetchContent',
    async () => {
        const res = await fetch('http://localhost:5000/my-bag')
        const data = await res.json()
        return data
    }
)


export const fetchAddToBag = createAsyncThunk(
    'mybag/fetchAddToBag',
    async (item) => {
        const res = await fetch('http://localhost:5000/add-goods', {
            method: 'POST',
            body: JSON.stringify(item),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const data = await res.json()
        return data
    }
);





const myBagSlice = createSlice({
    name: 'myBag',
    initialState: {
        arr: [],
        isLoading: false,
        error: null
    },
    reducer: {

    },
    extraReducers: (builder) => {
        // get data
        builder.addCase(fetchContentMyBag.pending, (state) => {
            state.isLoading = true
        })
        builder.addCase(fetchContentMyBag.fulfilled, (state, action) => {
            state.arr = action.payload
            state.isLoading = false
        })
        builder.addCase(fetchContentMyBag.rejected, (state, action) => {
            state.isLoading = false
            state.error = true
        })

        // addToBag
        builder.addCase(fetchAddToBag.pending, (state) => {
            state.isLoading = true;
            state.error = null;
        })
        builder.addCase(fetchAddToBag.fulfilled, (state, action) => {
            state.arr.push(action.payload)
            state.isLoading = false;
        })
        builder.addCase(fetchAddToBag.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.error.message;
        });
    }
})

export const { } = myBagSlice.actions

export default myBagSlice.reducer