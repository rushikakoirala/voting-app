import { useState } from "react";
import VotingGrid from "./components/VotingGrid";

function App() {
  const [candidates, setCandidates] = useState([
    { id: 1, name: "Ram Sharma", party: "Democratic Party" },
    { id: 2, name: "Ramesh Yadav", party: "Public Party" },
    { id: 3, name: "Hari Kumar", party: "Independent Party" },
  ]);

  const [message, setMessage] = useState("");

  const handleVote = (candidateName) => {
    setMessage(`Thank you for voting for ${candidateName}!`);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1> Voter Interface</h1>

      <VotingGrid candidates={candidates} onVote={handleVote} />

      {message && <h2 style={{ color: "black" }}>{message}</h2>}
    </div>
  );
}

export default App;
