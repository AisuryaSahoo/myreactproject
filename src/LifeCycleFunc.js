import React, { useEffect, useState } from "react";

const LifeCycleFunc = () => {
 
    const [value,setValue]=useState("10");
    const handleValue = () =>{
        setValue(20);
    }
    useEffect(()=>{
        console.log("useEffect called");
        setTimeout(() => {
            document.getElementById("welcome").innerText="Welcome Srotaparna";
        }, 6000);
    })
    return (
        <>
            <h1>value={value}</h1>
            <button onClick={handleValue}>click</button>
            <h3 id="welcome">welcome</h3> 
        </>
    )
}

export default LifeCycleFunc;

