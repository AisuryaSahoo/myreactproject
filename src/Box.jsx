import React from 'react'
const Box = (props) =>{
return(
    <>
    <div className="mybox" style={{height:"200px",width:"200px",backgroundColor:props.colorName, margin:"30px"}}>{props.boxName}</div>
    </>
)
}
export default Box



function add(a,b)
{
    return a+b
}

add(5,6)
add(10,20)