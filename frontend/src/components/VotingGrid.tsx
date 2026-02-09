import CandidateCard from "./CandidateCard";
import "./VotingGrid.css";
interface Candidate {
  id: number;
  name: string;
  party: string;
}

interface VotingGridProps {
  candidates: Candidate[];
  onVote: (candidateName: string) => void;
}

function VotingGrid({ candidates, onVote }: VotingGridProps) {
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
