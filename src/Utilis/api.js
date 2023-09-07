import axios from "axios";

const BASE_URL = "https://nc-news-69zd.onrender.com";

export const getArticles = () => {
  const endpoint = "/api/articles";
  return axios
    .get(`${BASE_URL}${endpoint}`)
    .then((response) => {
      return response.data.articles;
    })
    .catch((error) => {
      console.error("Error fetching articles:", error);
    });
};

export const getArticleId = (id) => {
  const endpoint = "/api/articles";
  return axios
    .get(`${BASE_URL}${endpoint}/`, { id })
    .then((response) => {
      console.log(response.data.articles);
      return response.data.articles;
    })
    .catch((error) => {
      console.error("Error fetching articles:", error);
    });
};

export const getComments = (article_id) => {
  const endpoint = "/api/articles";
  return axios
    .get(`${BASE_URL}${endpoint}/${article_id}/comments`)
    .then((response) => {
      return response.data.comments;
    })
    .catch((error) => {
      console.error("Error fetching articles:", error);
    });
};

export const voteArticle = (article_id, inc_vote) => {
  const endpoint = "/api/articles";
  return axios
    .patch(`${BASE_URL}${endpoint}/${article_id}`, {
      inc_votes: inc_vote === "like" ? 1 : -1,
    })
    .then((response) => {
      return response.data.articles;
    })
    .catch((error) => {
      console.error("Error fetching articles:", error);
    });
};

export const postComment = (article_id, commentData) => {
  const endpoint = "/api/articles";
  return axios
    .post(`${BASE_URL}${endpoint}/${article_id}/comments`, commentData)
    .then((response) => {
      return response.data.comments;
    })
    .catch((error) => {
      console.error("Error posting articles:", error);
    });
};
