import React, { useEffect, useState } from "react";
import { getComments } from "../Utilis/api";

function Comments({ article_id }) {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getComments(article_id)
      .then((commentData) => {
        setComments(commentData);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setComments([]);
        setLoading(false);
      });
  }, [article_id]);

  console.log("State comments:", comments);

  if (loading) {
    return <p>Loading comments...</p>;
  }

  return (
    <div>
      <ul>
        {comments.map((comment) => (
          <li key={comment.comment_id} className="commentCard">
            <section>
              <p className="commentBody">{comment.body}</p>
              <p className="smallp">Posted by: {comment.author}</p>
              <p className="smallp">Posted at: {comment.created_at}</p>
            </section>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Comments;
