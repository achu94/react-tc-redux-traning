import React from "react";

type propsType = {
  id: number;
  val: string;
  userImg: string | undefined;
  userName: string | undefined;
  postOwner: boolean;
  removeHandler: (id: number) => void;
};

const Post = (props: propsType) => {
  return (
    <div className="post-element">
      <div>
        <img src={props.userImg} alt={props.userName} />
      </div>
      <h3>{props.val}</h3>
      { props.postOwner ? <button onClick={() => props.removeHandler(props.id)} >Remove</button> : ''}
      
    </div>
  );
};

export default Post;
