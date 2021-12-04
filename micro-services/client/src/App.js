import "./App.css";
import PostCreate from "./PostCreate";
import PostList from "./PostList";

const App = () => {
  return (
    <div className="container is-fluid mt-3">
      <h1 className="title">Create Post</h1>
      <PostCreate />
      <hr />

      <h1 className="title">Post</h1>
      <PostList />
    </div>
  );
};

export default App;
