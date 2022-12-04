import React from "react";

const Header = (props)=>{
    console.log(props)
    return(
        <div>
            <h2>Header Component</h2>
            <p>Course Name : {props.courseName} </p>
            <p>Course Duration : {props.duration} </p>
        </div>
    )
}

export default Header