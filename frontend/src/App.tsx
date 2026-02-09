import { useState } from "react";
import VotingGrid from "./components/VotingGrid";
interface Candidate {
  id: number;
  name: string;
  party: string;
}

function App() {
  const [candidates, setCandidates] = useState<Candidate[]>([
    { id: 1, name: "Ram Sharma", party: "Democratic Party" },
    { id: 2, name: "Ramesh Yadav", party: "Public Party" },
    { id: 3, name: "Hari Kumar", party: "Independent Party" },
  ]);

  const [message, setMessage] = useState<string>("");

  const handleVote = (candidateName: string): void => {
    setMessage(`Thank you for voting for ${candidateName}!`);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Voter Interface</h1>

      <VotingGrid candidates={candidates} onVote={handleVote} />

      {message && <h2 style={{ color: "black" }}>{message}</h2>}
    </div>
  );
}

export default App;
