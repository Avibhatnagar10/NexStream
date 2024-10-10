// components/ChatBox.js
import React, { useState } from 'react';

const ChatBox = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const sendMessage = () => {
    if (input.trim()) {
      setMessages([...messages, { text: input, id: messages.length }]);
      setInput('');
    }
  };

  return (
    <div className="flex flex-col h-full">
      <div className="flex-1 bg-gray-700 overflow-y-scroll p-2">
        {messages.map((message) => (
          <div
            key={message.id}
            className="bg-blue-500 text-white p-2 rounded mb-2"
          >
            {message.text}
          </div>
        ))}
      </div>
      <div className="mt-auto flex">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-1 p-2 bg-gray-600 text-white rounded-l"
        />
        <button
          onClick={sendMessage}
          className="bg-blue-500 text-white p-2 rounded-r"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatBox;
