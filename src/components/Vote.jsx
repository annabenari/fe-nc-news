import React, { useState, useEffect } from "react";
import { voteArticle } from "../Utilis/api";

function Vote({ article_id, initialVotes }) {
  const [votes, setVotes] = useState(initialVotes);
  const [hasVoted, setHasVoted] = useState(false);

  useEffect(() => {
    const userHasVoted = false;

    setHasVoted(userHasVoted);
  }, [article_id]);

  const handleVote = (inc_vote) => {
    if (!hasVoted) {
      voteArticle(article_id, inc_vote)
        .then((response) => {
          setVotes(votes + (inc_vote === "upvote" ? 1 : -1));
          setHasVoted(true);
        })
        .catch((error) => {
          console.error("Error voting:", error);
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
