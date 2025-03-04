import { useRef, useEffect, useState } from "react";


export default function Chat() {
    const [arrayChat, setArrayChat] = useState([]);
    const areaRef = useRef(null);

    useEffect(() => {
        if (areaRef.current) {
            areaRef.current.scrollTop = areaRef.current.scrollHeight;
        }
    }, [arrayChat]);

    return (
        <div className="chat-container" ref={areaRef}>
            {arrayChat.map((message, index) => (
                <p key={index} className="chat-message">{message}</p>
            ))}
            <input
                className="chat-input"
                placeholder="Type a message..."
                onKeyDown={(e) => {
                    if (e.key === "Enter" && e.target.value.trim() !== "") {
                        setArrayChat([...arrayChat, e.target.value]);
                        e.target.value = "";
                    }
                }}
            />
        </div>
    );
}