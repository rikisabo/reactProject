import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";


export default function LoginForm() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    
        const navi = useNavigate();
        const goThank = () => {
            navi("/Thank");
        }
    
    const handleSubmit = (event) => {
        event.preventDefault();
        // Simulate login action, e.g., send a request to authenticate
        console.log("Username:", username);
        console.log("Password:", password);
        // Clear the fields after submission
        setUsername("");
        setPassword("");
        goThank();

    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="username">Username:</label>
                <input
                    type="text"
                    id="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />
            </div>
            <div>
                <label htmlFor="password">Password:</label>
                <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
            </div>
            <button type="submit">Login</button>
        </form>
    );
}