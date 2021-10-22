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

  const toShow = Object.values(posts).map((p) => p.title);

  return (
    <div className="container">
      <ol>
        {toShow.map((t) => (
          <li>{t}</li>
        ))}
      </ol>
    </div>
  );
};

export default PostList;
