import { useState, useEffect } from "react";
import { io } from "socket.io-client";

const socket = io("http://localhost:3000");

function App() {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    socket.on("chat message", (msg) => {
      setMessages((prev) => [...prev, msg]);
    });

    return () => {
      socket.off("chat message");
    };
  }, []);

  const sendMessage = (e) => {
    e.preventDefault();
    if (message.trim() === "") return;
    socket.emit("chat message", message);
    setMessage("");
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>React + Socket.IO Chat</h2>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {messages.map((msg, i) => (
          <li key={i} style={{ padding: "5px 0", borderBottom: "1px solid #ddd" }}>
            {msg}
          </li>
        ))}
      </ul>
      <form onSubmit={sendMessage} style={{ marginTop: 10 }}>
        <input
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type message..."
          style={{ padding: 10, width: "70%" }}
        />
        <button type="submit" style={{ padding: 10 }}>Send</button>
      </form>
    </div>
  );
}

export default App;