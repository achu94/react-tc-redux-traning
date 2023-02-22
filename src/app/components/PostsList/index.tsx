import React, { useEffect } from "react";
import type { RootStore } from "../../store";
import { useSelector, useDispatch } from "react-redux";
import { setInitialData, removePost } from "../../features/PostsSlice";
import { getData } from "../../utils/localStorage";
import { getUserData, getUserIdDirect } from "../../utils/user";

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
  
  const postOwnerId = (postUserId: string | undefined) => {
    const userid = getUserIdDirect()
    return userid == postUserId;
  };
  
  return (
    <div className="postsList">
      {!postsList ? (
        <h1>Loading...</h1>
      ) : (
        postsList.map((data, index: number) => {
          const userData = getUserData(data.userId);
          
          return (
            <PostElement
              key={index}
              val={data.val}
              id={data.id}
              userImg={userData?.img}
              userName={userData?.name}
              postOwner={postOwnerId(userData?.id)}
              removeHandler={removeHandler}
            />
          );
        })
      )}
    </div>
  );
};

export default PostList;
