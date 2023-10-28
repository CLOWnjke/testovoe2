import React, { useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { Spin } from 'antd';

import { dataThunk, detailsThunk } from '../../Store/Slice'
const List = () => {
    const dispatch = useDispatch()
    const data = useSelector((state) => state.listSlice.data)
    const loading = useSelector((state) => state.listSlice.loading)
    const details = useSelector((state) => state.listSlice.details)
    

    useEffect(() => {
        dispatch(dataThunk())
    }, [])

    console.log(data)
    console.log(details)


    return <>
    {loading ? 
    <Spin size="large" style={{marginLeft: "40px", marginTop: "40px"}}/> : 
    <ul>
        {data.map(({id, name, price}) => (
            <li key={id}><a src='#' onClick={() => dispatch(detailsThunk(id))}>{name}</a> - {price}</li>
                ))}
    </ul>}  
    </>
}
// 1
export default List