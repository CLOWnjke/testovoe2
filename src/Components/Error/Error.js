import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { dataThunk, detailsThunk } from "../../Store/Slice";

const Error = () => {
    const dispatch = useDispatch()
    // const error = useSelector((state) => state.listSlice.error)

    return <>
    <h1>Произошла ошибка</h1>
    <button onClick={() => {dispatch(dataThunk())}}>Повторить запрос</button>
    </>
}

export default Error