import { useEffect, useState } from "react";

interface Message {
  _id: string;
  message: string;
}

const MessageList = () => {
  const [messages, setMessages] = useState<Message[]>([]);

  useEffect(() => {
    fetch(import.meta.env.VITE_API_URL + "/messages")
      .then((res) => res.json())
      .then(setMessages);
  }, []);

  return (
    <div>
      <h2>Messages</h2>
      <ul>
        {messages.map((msg) => (
          <li key={msg._id}>{msg.message}</li>
        ))}
      </ul>
    </div>
  );
};

export default MessageList;
