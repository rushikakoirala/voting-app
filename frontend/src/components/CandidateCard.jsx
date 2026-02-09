import React from "react";
import "./CandidateCard.css";
     function CandidateCard({ candidate, onVote }) {
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