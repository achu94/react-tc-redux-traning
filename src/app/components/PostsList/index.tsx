import React from "react";
import type { RootStore } from "../../store";
import { useSelector } from "react-redux";

import PostElement from "../PostElement";
import "./PostsList.css";

const PostList = () => {
  const postsList = useSelector((state: RootStore) => state.posts);

  return (
    <div className="postsList">
      {!postsList ? (
        <h1>Loading...</h1>
      ) : (
        postsList.map((data, index: number) => {
          return <PostElement key={index} val={data.val} id={data.id} />;
        })
      )}
    </div>
  );
};

export default PostList;
