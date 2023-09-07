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

export const getComments = (id) => {
  const endpoint = "/api/articles";
  return axios
    .get(`${BASE_URL}${endpoint}/`, { id }, `/comments`)
    .then((response) => {
      return response.data.comments;
    })
    .catch((error) => {
      console.error("Error fetching articles:", error);
    });
};

export const voteArticle = (id, inc_vote) => {
  const endpoint = "/api/articles";
  return axios
    .patch(
      `${BASE_URL}${endpoint}/`,
      { id },
      {
        inc_votes: inc_vote === "upvote" ? 1 : -1,
      }
    )
    .then((response) => {
      return response.data.articles;
    })
    .catch((error) => {
      console.error("Error fetching articles:", error);
    });
};
