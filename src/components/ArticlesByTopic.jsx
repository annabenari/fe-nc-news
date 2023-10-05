import { useState, useEffect } from "react";
import { getOneTopic } from "../Utilis/api";
import ArticleCard from "./ArticleCard";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const ArticlesByTopic = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const { selectedTopic } = useParams();

  useEffect(() => {
    getOneTopic(selectedTopic)
      .then((data) => {
        setArticles(data);
        setLoading(false);
      })
      .catch((error) => console.error("API Error:", error));
  }, [selectedTopic]);

  if (loading) {
    return <p>Loading articles...</p>;
  }

  return (
    <article>
      <section className="card">
        {articles.map(
          ({
            article_id,
            article_img_url,
            author,
            comment_count,
            created_at,
            title,
            topic,
            votes,
          }) => {
            return (
              <section key={article_id}>
                <Link to={`/articles/${article_id}`}>
                  <ArticleCard
                    article_id={article_id}
                    article_img_url={article_img_url}
                    author={author}
                    comment_count={comment_count}
                    created_at={created_at}
                    title={title}
                    topic={topic}
                    votes={votes}
                  />
                </Link>
              </section>
            );
          }
        )}
      </section>
    </article>
  );
};

export default ArticlesByTopic;
