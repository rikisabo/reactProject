import React, { useState } from "react";
import Login, {  } from '@react-login-page/page5';
import { Username, Password } from '@react-login-page/page5'
import { UseLocalStorage } from "../hooks/useLocalStorage";
import { Reset, Submit } from '@react-login-page/page5';


export const Login7 = () => {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault(); // Prevent default form submission
        UseLocalStorage({ Name: name, Password: password }, "users", "post");
        // Optionally reset the fields after submission
        setName('');
        setPassword('');
    };
    return (
        <>
            {/* <Login style={{ height: 380 }} /> */}
            {/* <Login style={{ height: 380 }} onSubmit={useLocalStorage({ Name: name, Password: password }, "users", "post")}></Login> */}
            {/* onSubmit={handleSubmit} */}
            <Login style={{ height: 380 }} >
                <Login.Password onChange={(e)=>setPassword(e.target.value)}  ></Login.Password>
                <Login.Username onChange={(e)=>setName(e.target.value)} ></Login.Username>
                <Login.Submit onClick={handleSubmit}></Login.Submit>
            </Login>

            {/* onKeyUp={setPassword(Login.Password)} */}
            {/* onKeyUp={setName(Login.Name)} */}
        </>
    )
}
