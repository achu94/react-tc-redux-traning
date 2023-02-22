import React, { useEffect } from "react";
import type { RootStore } from "../../store";
import { useSelector, useDispatch } from "react-redux";
import { setInitialData, removePost } from "../../features/PostsSlice";
import { getData } from "../../utils/localStorage";

import PostElement from "../PostElement";
import "./PostsList.css";

const PostList = () => {
  const postsList = useSelector((state: RootStore) => state.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      const savedData = await getData("posts");
      dispatch(setInitialData(savedData));
    })();
  }, []);

  const removeHandler = (id: number) => dispatch(removePost(id));

  return (
    <div className="postsList">
      {!postsList ? (
        <h1>Loading...</h1>
      ) : (
        postsList.map((data, index: number) => {
          return (
            <PostElement
              key={index}
              val={data.val}
              id={data.id}
              removeHandler={removeHandler}
            />
          );
        })
      )}
    </div>
  );
};

export default PostList;
