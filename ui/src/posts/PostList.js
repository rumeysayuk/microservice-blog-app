import React, { useEffect, useState } from "react";
import axios from "axios";
import CommentCreate from "../comments/CommentCreate";
import CommentList from "../comments/CommentList";

const PostList = () => {
  const [posts, setPosts] = useState({});
  const fetchPosts = async () => {
    const res = await axios.get("http://localhost:4000/posts");
    console.log(res.data);
    setPosts(res.data);
  };
  useEffect(() => {
    fetchPosts();
  }, [posts]);

  const renderedPosts = Object.values(posts).map((post) => {
    return (
      <div
        className="card"
        style={{ width: "30%", marginBottom: "20px" }}
        key={post.id}
      >
        <div className="card-body">
          <h3>{post.title}</h3>
          <CommentList comments={post.comments || []} />
          <CommentCreate postId={post.id} />
        </div>
      </div>
    );
  });
  return (
    <div className="d-flex flex-row flex-wrap justify-content-between">
      {renderedPosts}
    </div>
  );
};

export default PostList;
