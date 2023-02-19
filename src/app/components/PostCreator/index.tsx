import React, { ChangeEvent, useState } from "react";
import { addPost } from "../../features/PostsSlice";
import { useDispatch } from "react-redux";

import "./postCreator.css";

const getRandomNumber = (): number => {
  return Math.floor(Math.random() * 1000000);
};

const PostCreator = () => {
  const [postValue, setPostValue] = useState<string>("");
  const [postButtonDisabled, setPostButtonDisabled] = useState<boolean>(true);
  
  const dispatch = useDispatch();
  
  const handleOnchangePostInput = (e: ChangeEvent<HTMLInputElement>) => {
    setPostValue(e.target.value);
    setPostButtonDisabled(e.target.value ? false : true);
  } 
  
  const handleOnPost = () => {
    if(!postValue) return;
  
    dispatch(addPost({ val: postValue, id: getRandomNumber() }));
    setPostValue("");
    setPostButtonDisabled(true);
  }
  
  return (
    <div className="new-post">
      <input
        value={postValue}
        onChange={handleOnchangePostInput}
        onKeyUp={ (e) => e.code === 'Enter' ? handleOnPost() : ""}
        maxLength={15}
        type="text"
        name="new-post"
      />
      <button
        className="post-submit"
        onClick={handleOnPost}
        disabled={postButtonDisabled}
      >
        Post
      </button>
    </div>
  );
};

export default PostCreator;
