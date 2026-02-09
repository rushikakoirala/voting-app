import CandidateCard from "./CandidateCard";
import "./VotingGrid.css";
function VotingGrid({ candidates, onVote }) {
  return (
    <div className="voting-grid">
      {candidates.map((candidate) => (
        <CandidateCard
          key={candidate.id}
          candidate={candidate}
          onVote={onVote}
        />
      ))}
    </div>
  );
}

export default VotingGrid;
