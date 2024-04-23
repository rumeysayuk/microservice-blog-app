import React from "react";
import PostCreate from "./posts/PostCreate";
import { Navbar } from "react-bootstrap";
import PostList from "./posts/PostList";
const App = () => {
  return (
    <div className="container">
      <Navbar bg="light" variant="danger">
        <Navbar.Brand bg="dark" color="dark" href="#home">
          Blog App
        </Navbar.Brand>
      </Navbar>

      <h1 className="text-secondary">Create Post</h1>
      <PostCreate />
      <hr />
      <h1>Posts</h1>
      <PostList />
    </div>
  );
};

export default App;
