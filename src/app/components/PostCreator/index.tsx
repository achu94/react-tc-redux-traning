import React, { useState } from "react";
import { addPost } from "../../features/PostsSlice";
import { useDispatch } from "react-redux";

import "./postCreator.css";

const getRandomNumber = (): number => {
  return Math.floor(Math.random() * 1000000);
};

const PostCreator = () => {
  const [postValue, setPostValue] = useState<string>("");
  const dispatch = useDispatch();
  
  const handleOnPost = () => {
    dispatch(addPost({ val: postValue, id: getRandomNumber() }));
    setPostValue("");
  }
  
  return (
    <div className="new-post">
      <input
        defaultValue={postValue}
        onChange={(e) => setPostValue(e.target.value)}
        maxLength={15}
        type="text"
        name="new-post"
      />
      <button
        className="post-submit"
        onClick={handleOnPost}
      >
        Post
      </button>
    </div>
  );
};

export default PostCreator;
