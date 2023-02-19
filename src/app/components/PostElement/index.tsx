import React from "react";

type propsType = {
  id: number;
  val: string;
  removeHandler: (id: number) => void;
};

const Post = (props: propsType) => {
  return (
    <div>
      <h3>{props.val}</h3>
      <button onClick={() => props.removeHandler(props.id)} >Remove</button>
    </div>
  );
};

export default Post;
