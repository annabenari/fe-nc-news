import React, { useState } from "react";
import { voteArticle } from "../Utilis/api";

function Vote({ article_id, initialVotes }) {
  const [votes, setVotes] = useState(initialVotes);
  const [hasVoted, setHasVoted] = useState(false);
  const [voteError, setVoteError] = useState(null);

  const handleVote = (inc_vote) => {
    if (!hasVoted) {
      voteArticle(article_id, inc_vote)
        .then((response) => {
          setVotes(votes + (inc_vote === "like" ? 1 : -1));
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
      <button onClick={() => handleVote("like")} disabled={hasVoted}>
        Like
      </button>
      <button onClick={() => handleVote("dislike")} disabled={hasVoted}>
        Dislike
      </button>
    </div>
  );
}

export default Vote;
