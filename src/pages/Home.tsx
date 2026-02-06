import { useEffect, useState } from "react";
import MessageForm from "../components/MessageForm";
import MessageList from "../components/MessageList";

export interface Message {
  _id: string;
  message: string;
}

const Home = () => {
  const [messages, setMessages] = useState<Message[]>([]);

  // fetch messages once
  useEffect(() => {
    fetch(import.meta.env.VITE_API_URL + "/messages")
      .then((res) => res.json())
      .then(setMessages);
  }, []);

  // add new message instantly
  const addMessage = (msg: Message) => {
    setMessages((prev) => [msg, ...prev]);
  };

  return (
    <div style={{ maxWidth: "800px", margin: "auto" }}>
      <h1>Cloud Architect Portfolio</h1>
      <p>AWS Testing | DevOps | Cloud Architecture</p>

      <MessageForm onMessageSent={addMessage} />
      <MessageList messages={messages} />
    </div>
  );
};

export default Home;





// import MessageForm from "../components/MessageForm";
// import MessageList from "../components/MessageList";

// const Home = () => {
//   return (
//     <div style={{ maxWidth: "800px", margin: "auto" }}>
//       <h1>Cloud Architect Portfolio</h1>
//       <p>AWS | DevOps | MERN | Cloud Architecture</p>

//       <MessageForm />
//       <MessageList />
//     </div>
//   );
// };

// export default Home;
