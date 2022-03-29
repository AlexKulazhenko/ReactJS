import React from "react";
import classes from "./MyInput.module.css"

const MyInput = React.forwardRef((props, ref) => {
    return(
        <div>
            <input ref = {ref} className={classes.MyInput} {...props}/>
        </div>
        
    )
}) 

export default MyInput;