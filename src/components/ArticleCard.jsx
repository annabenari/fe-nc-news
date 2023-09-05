export const ArticleCard = ({
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
    <div className="container">
      <article className="allArticles">
        <h3>{title}</h3>
        <h5>{topic}</h5>
        <img
          src={article_img_url}
          alt="An image realting to each article"
          width="150px"
        />
      </article>
    </div>
  );
};

export default ArticleCard;
