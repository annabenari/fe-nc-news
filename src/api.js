import axios from "axios";

const BASE_URL = "https://nc-news-69zd.onrender.com";

export const getArticle = () => {
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

export const getArticleId = (article_id) => {
  const endpoint = "/api/articles";
  return axios
    .get(`${BASE_URL}${endpoint}/${article_id}`)
    .then((response) => {
      return response.data.articles;
    })
    .catch((error) => {
      console.error("Error fetching articles:", error);
    });
};