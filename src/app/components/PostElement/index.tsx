import React from "react";

type propsType = {
  id: number;
  val: string;
};

const Post = (props: propsType) => {
  return (
    <div>
      <h3>{props.val}</h3>
    </div>
  );
};

export default Post;
