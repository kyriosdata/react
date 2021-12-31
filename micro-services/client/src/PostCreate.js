import React, { useState } from "react";
import axios from "axios";

const Create = () => {
  const [title, setTitle] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();

    if (!title || title === "") {
      return;
    }

    await axios.post("http://localhost:4000/posts", { title });

    setTitle("");
  };

  return (
    <div className="container">
      <form onSubmit={onSubmit}>
        <div className="field">
          <label className="label">Title</label>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="control"
          />
        </div>
        <button className="button">Submit</button>
      </form>
    </div>
  );
};

export default Create;
