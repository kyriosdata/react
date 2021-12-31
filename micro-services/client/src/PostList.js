import React, { useState, useEffect } from "react";
import axios from "axios";

const PostList = () => {
  const [posts, setPosts] = useState({});

  const fetchPosts = async () => {
    const res = await axios.get("http://localhost:4000/posts");
    setPosts(res.data);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const toShow = (objeto) => Object.values(objeto).map((p) => p.title);

  const render = (titulo) => {
    return (
      <div className="level-left">
        <div className="leve-item">
          <div className="card">
            <div className="card-content">
              <div className="media-content">
                <p className="title is-4">{titulo}</p>
              </div>
              <div className="content">{titulo}</div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return <div className="level">{toShow(posts).map((t) => render(t))}</div>;
};

export default PostList;
