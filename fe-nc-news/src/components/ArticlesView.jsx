import { useEffect, useState } from "react";
import { getArticle } from "../Utilis/api";
import { ArticleCard } from "./ArticleCard";
import { Link, useParams } from "react-router-dom";

export const ArticlesView = () => {
  const [articles, setArticles] = useState([]);

  const { article_id } = useParams();

  useEffect(() => {
    getArticle(article_id)
      .then((data) => {
        setArticles(data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
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
    </div>
  );
};
