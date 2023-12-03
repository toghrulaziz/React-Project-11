import { configureStore } from '@reduxjs/toolkit'
import goodsSlice from './reducerGoods'
import myBagSlice from './reducerMyBag'

let myStore = configureStore({
    reducer:{
        goods: goodsSlice,
        myBag: myBagSlice
    }
})

export default myStore;