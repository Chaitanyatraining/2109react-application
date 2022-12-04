import React from 'react'
import './externalcss.css'
import primarybtn from './CardComp.module.css'
    // different ways to write CSS
        // inline CSS
        // internal CSS
        // external CSS
        // module css
    const styles = {
        btnStyles : {
            padding:"10px 20px",
            color:"blue",
            backgroundColor:"orange",
            border:"none"
        },

    }

function Stylings({btnname,externalname}) {
  return (
    <div>
        <h2 style={{color:"red",backgroundColor:"yellow",fontSize:"20px"}}>Stylings component</h2>
        <button style={styles.btnStyles}>{btnname}</button>
        <div>
            {/* <img src="" /> */}
            <button className='btn'>{externalname}</button>
        </div>

        {/* module css */}
        <div>
            <h2>Module Styles</h2>
            <button className={primarybtn.btn}>Module css</button>
        </div>
    </div>
  )
}

export default Stylings