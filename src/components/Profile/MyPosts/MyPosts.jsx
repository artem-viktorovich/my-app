import React from 'react';
import Mp from './MyPosts.module.css';
import Post from './Posts/Post';



const MyPosts = (props) => {

	let postElements = props.posts.map(p => <Post message={p.message} LikesCount={p.LikesCount} />);
	//  
	let newPostElement = React.createRef(); //создание ссылки для работы

	let addPost = () => {
		let text = newPostElement.current.value; //curent  ссылается на нативный html  элемент
		props.addPost(text);
		newPostElement.current.value = ' '; //обнуление textarea
	}

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

