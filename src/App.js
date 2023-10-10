import React from "react";
import {useSelector } from "react-redux";
import List from "./Components/UL/Ul";
import Error from "./Components/Error/Error";

const App = () => {
    const error = useSelector((state) => state.listSlice.error)


    return <>
    {error ?  <Error />:  <List/>}  
    </>
}

export default App