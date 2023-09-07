import React, { useEffect, useState } from "react";
import { getArticleId } from "../Utilis/api";
import { useParams } from "react-router";
import Comments from "./Comments";
import Vote from "./Vote";

function SingleArticleView() {
  const { article_id } = useParams();
  const [article, setArticle] = useState({});
  const [loading, setLoading] = useState(true);
  const [showComments, setShowComments] = useState(false);

  useEffect(() => {
    getArticleId(article_id)
      .then((data) => {
        setArticle(data[0]);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, [article_id]);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <article className="singleCard">
      <h2 className="title">{article.title}</h2>
      <h4 className="topicName">{article.topic}</h4>
      <img src={article.article_img_url} width="400px" alt={article.title} />
      <p>{article.body}</p>
      <p className="smallp">Written by {article.author}</p>
      <p className="smallp">Created at {article.created_at}</p>
      <Vote article_id={article_id} initialVotes={article.votes} />
      <button onClick={() => setShowComments(!showComments)}>
        {showComments ? "Hide Comments" : "Show Comments"}
      </button>
      {showComments && <Comments article_id={article_id} />}
    </article>
  );
}

export default SingleArticleView;
