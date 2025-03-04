import { useEffect, useState,useRef } from "react"

const Message=()=>{
    const[input,setInput]=useState('');
    const[message,setMessage]=useState([]);
    const myMessage = useRef(null);
    // useEffect(()=>{

    // },message);
    
    useEffect(()=>{  
        if (myMessage.current) {
            // const { scrollTop, scrollHeight, clientHeight } = myMessage.current;
            // if (scrollTop + clientHeight === scrollHeight) {
            //     console.log(scrollTop + clientHeight);
            //     console.log("reached bottom");
            //     console.log(scrollHeight);
            //   console.log("reached bottom");
            // }
            console.log("jihuyg");
            myMessage.current.scrollTop = myMessage.current.scrollHeight;
          }
        },[message])
   
return(
    <>
    {/* <div ref={myMessage}>
      {message}
    </div> */}
    <div ref={myMessage} >
    <h1>my message:❤️❤️❤️</h1>
    <input type="text" placeholder="type your message" onBlur={(e)=>setInput(e.target.value)}></input>
    <button onClick={()=>{setMessage([...message,input])}}>add message</button>
    {/* <button onClick={onScroll}>add message</button> */}
    {message.map((i)=>(<h1>{i}</h1>))}
    </div>
    </>
)
}
export default Message;