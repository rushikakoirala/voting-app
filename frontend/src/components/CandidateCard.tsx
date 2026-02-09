import React from "react";
import "./CandidateCard.css";
interface Candidate {
  id: number;
  name: string;
  party: string;
}

interface CandidateCardProps {
  candidate: Candidate;
  onVote: (candidateName: string) => void;
}

function CandidateCard({ candidate, onVote }: CandidateCardProps) {
  return (
    <div className="candidate-card">
      <h2>{candidate.name}</h2>
      <p>
        <strong>Party:</strong> {candidate.party}
      </p>
      <button onClick={() => onVote(candidate.name)}>Vote</button>
    </div>
  );
}
export default CandidateCard;
