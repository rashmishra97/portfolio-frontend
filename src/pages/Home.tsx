import MessageForm from "../components/MessageForm";
import MessageList from "../components/MessageList";

const Home = () => {
  return (
    <div style={{ maxWidth: "800px", margin: "auto" }}>
      <h1>Cloud Architect Portfolio</h1>
      <p>AWS | DevOps | MERN | Cloud Architecture</p>

      <MessageForm />
      <MessageList />
    </div>
  );
};

export default Home;
