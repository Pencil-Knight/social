import React from "react";
import s from "./myposts.module.css";
import Post from "./Posts/post";



let MyPosts = (props) => {
	let postsElements = 
	props.posts.map(p => <Post message={p.message} like={p.likeCount} />)
	
	let newPostElement= React.createRef()  //useRef(null) (попробовать как испраишь посты)

	let addPost = () => {
		props.addPost()
	}

	let onPostChange =()=>{
		let text = newPostElement.current.value
		props.updateNewPostText(text)
	}

	return (
    <div className={s.postBlock}>
      <div className={s.content}>
        <h3>My posts</h3>
        <div className={s.item}>
          <div>
            <textarea onChange={onPostChange} 
					ref = {newPostElement}
					value={props.newPostText} />
          </div>
          <div>
            <button onClick={addPost}>Add post</button>
          </div>
        </div>
        <div className={s.posts}>
				{postsElements}
				</div>
			</div>
    </div>
  );
};

export default MyPosts;
