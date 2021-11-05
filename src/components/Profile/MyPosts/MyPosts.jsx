import React from 'react';
import Mp from './MyPosts.module.css';
import Post from './Posts/Post';

let newPostElement = React.createRef(); //создание ссылки для работы

let addPost = () => {
	let text = newPostElement.current.value;
	alert(text);
}

const MyPosts = (props) => {

	let postElements = props.posts.map(p => <Post message={p.message} LikesCount={p.LikesCount} />);
	//  

	return (
		<div className={Mp.MyPosts}>
			<h2>Добавить пост</h2>
			<div className={Mp.MyPosts_body}>
				<textarea ref={newPostElement} placeholder='your post...'></textarea>
				<button onClick={addPost}>Пост</button>
			</div>
			{postElements}
		</div>

	)
}

export default MyPosts;

