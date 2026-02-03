import { useState } from "react";

const MessageForm = () => {
  const [message, setMessage] = useState("");

  const submitHandler = async (e: React.FormEvent) => {
    e.preventDefault();

    await fetch(import.meta.env.VITE_API_URL + "/messages", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message }),
    });

    setMessage("");
  };

  return (
    <form onSubmit={submitHandler}>
      <h2>Write a Message</h2>
      <textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        required
      />
      <br />
      <button type="submit">Send</button>
    </form>
  );
};

export default MessageForm;
