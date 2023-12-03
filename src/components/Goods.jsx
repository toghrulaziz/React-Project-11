import { useEffect } from "react"
import { useSelector, useDispatch } from 'react-redux'
import { fetchContentGoods } from "../store/reducerGoods"
import { fetchAddToBag } from "../store/reducerMyBag"


function Goods() {
    let arr = useSelector((state) => state.goods.arr)
    let loading = useSelector((state) => state.goods.isLoading)
    let error = useSelector((state) => state.goods.error)
    let dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchContentGoods())
    }, [dispatch])


    if(loading === true){
        return <p>Loading</p>
    }
    if(error === true){
        return <p>Error</p>
    }


    
    return (
        <div className="App">
            <ul class="grid-container">
                {arr.map((item) => {
                    return (
                        <li class="grid-item">
                            <p>{item.product_name}</p>
                            <p>{item.product_description}</p>
                            <p>{item.product_price}</p>
                            <button onClick={() => {
                                dispatch(fetchAddToBag(item))
                            }}>ADD</button>
                        </li>
                    )
                })}
            </ul>
        </div>
    );
}

export default Goods;