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
    <article>
      <h3>{title}</h3>
      <h5>{topic}</h5>
      <img src={article_img_url} width="150px" />
    </article>
  );
};
