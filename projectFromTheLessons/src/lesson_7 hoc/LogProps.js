import React from "react";
export const LogProps=(Component)=>{
return function(props)
{
    console.log(props.name);
    return( 
    <>
    
    <Component {...props}></Component>
    </>
    )
}
}