import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getTopics } from "../Utilis/api";

const TopicsView = () => {
  const [topics, setTopics] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getTopics()
      .then((data) => {
        setTopics(data);
        setLoading(false);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="topicsContainer">
      {loading ? (
        <p>Loading topics...</p>
      ) : (
        topics.map((topic) => (
          <Link
            to={`/topics/${topic.slug}`}
            key={topic.slug}
            className="topicLink"
          >
            <div className="topicCard">
              <h3 className="topicTitle">{topic.slug}</h3>
              <p className="topicDescription">{topic.description}</p>
            </div>
          </Link>
        ))
      )}
    </div>
  );
};

export default TopicsView;
