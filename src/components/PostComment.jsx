import React, { useState } from "react";
import { postComment } from "../Utilis/api";

function CommentForm({ article_id }) {
  const [commentText, setCommentText] = useState("");
  const [error, setError] = useState(null);

  const handleCommentSubmit = (event) => {
    event.preventDefault();
    setError(null);

    const usernameValue = "jessjelly";

    const commentData = {
      username: usernameValue,
      body: commentText,
    };

    postComment(article_id, commentData)
      .then(() => {
        setCommentText("");
      })
      .catch((err) => {
        setError("Error posting comment. Please try again.");
        console.error("Error posting comment:", err);
      });
  };

  return (
    <form onSubmit={handleCommentSubmit}>
      <input
        type="text"
        value={commentText}
        onChange={(e) => setCommentText(e.target.value)}
        placeholder="Write your comment..."
      />

      <button type="submit">Post Comment</button>
      {error && <p className="error">{error}</p>}
    </form>
  );
}

export default CommentForm;
