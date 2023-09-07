import React, { useState } from "react";
import { voteArticle } from "../Utilis/api";

function Vote({ id, initialVotes }) {
  const [votes, setVotes] = useState(initialVotes);
  const [hasVoted, setHasVoted] = useState(false);
  const [voteError, setVoteError] = useState(null);

  const handleVote = (inc_vote) => {
    if (!hasVoted) {
      voteArticle(id, inc_vote)
        .then((response) => {
          setVotes(votes + (inc_vote === "upvote" ? 1 : -1));
          setHasVoted(true);
        })
        .catch((error) => {
          console.error("Error voting:", error);
          setVoteError("Voting failed. Please check your internet connection.");
        });
    }
  };

  return (
    <div>
      <p className="smallp">Likes: {votes}</p>
      <button onClick={() => handleVote("upvote")} disabled={hasVoted}>
        Like
      </button>
      <button onClick={() => handleVote("downvote")} disabled={hasVoted}>
        Dislike
      </button>
    </div>
  );
}

export default Vote;
