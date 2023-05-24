import React from "react";
import c from'./post.module.css'

const Post = (props) => {
  return (
    <div>
      <div className={c.post}>
			<img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZpGRsQalYAzNe26GdGshYmZIlswbZUMgE5LcxCanMcANliiBmrWNjIMiMmBJVp9buWrk&usqp=CAU' />
			{props.message}
			</div>
			<div>
				<span>Like</span> {props.like}
			</div>
    </div>
  );
};

export default Post;
