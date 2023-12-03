import { useEffect, useState } from "react"
import { useSelector, useDispatch } from 'react-redux'
import { fetchContentMyBag } from "../store/reducerMyBag"


function MyBag() {
  let arr = useSelector((state) => state.myBag.arr)
  let loading = useSelector((state) => state.myBag.isLoading)
  let error = useSelector((state) => state.myBag.error)
  let dispatch = useDispatch()
  
  


  useEffect(() => {
    dispatch(fetchContentMyBag())
  }, [dispatch])


  if (loading === true) {
    return <p>Loading</p>
  }
  if (error === true) {
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
            </li>
          )
        })}
      </ul>
    </div>
  );
}

export default MyBag;