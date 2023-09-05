import React, { useEffect, useState } from "react";
import { getArticleId } from "../Utilis/api";
import { useParams } from "react-router";

function SingleArticleView() {
  const [article, setArticle] = useState({});
  const [loading, setLoading] = useState(true);

  const { article_id } = useParams();

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

  if (article === null) {
    return <p>Error: Unable to fetch article.</p>;
  }

  console.log(article);

  return (
    <article className="singleCard">
      <h2 className="title">{article.title}</h2>
      <h4 className="topicName">{article.topic}</h4>
      <img src={article.article_img_url} width="400px" alt={article.title} />
      <p>{article.body}</p>
      <p className="smallp">Written by {article.author}</p>
      <p className="smallp">Created at {article.created_at}</p>
      <p className="smallp">Comments {article.comment_count}</p>
    </article>
  );
}

export default SingleArticleView;
