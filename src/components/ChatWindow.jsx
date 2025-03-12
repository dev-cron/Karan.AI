import React, { useState, useEffect, useRef } from "react";

const ChatWindow = () => {
  const [messages, setMessages] = useState([]); // Chat messages
  const [input, setInput] = useState(""); // User input
  const chatContainerRef = useRef(null); // Ref for scrolling

  // Function to add user message & simulate bot response
  const sendMessage = (event) => {
    if (event.key === "Enter" && input.trim() !== "") {
      const newMessages = [...messages, { text: input, type: "user" }];
      setMessages(newMessages);
      setInput("");

      // Simulate bot response after 1 second
      setTimeout(() => {
        setMessages((prev) => [...prev, { text: "This is a bot reply!", type: "bot" }]);
      }, 1000);
    }
  };

  // Auto-scroll to the latest message
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <div className="nes-container with-title chat-window">
      <p className="title">NES Chat</p>
      <div className="message-list" ref={chatContainerRef}>
        {messages.map((msg, index) => (
          <div key={index} className={`message ${msg.type === "user" ? "-right" : "-left"}`}>
            <div className={`nes-balloon ${msg.type === "user" ? "from-right" : "from-left"}`}>
              <p>{msg.text}</p>
            </div>
          </div>
        ))}
      </div>
      <input
        type="text"
        className="nes-input"
        placeholder="Type a message..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={sendMessage} // Send on Enter
      />
    </div>
  );
};

export default ChatWindow;
