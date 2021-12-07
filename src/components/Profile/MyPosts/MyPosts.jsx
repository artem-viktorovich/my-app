import React from 'react';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/store';
import Mp from './MyPosts.module.css';
import Post from './Posts/Post';



const MyPosts = (props) => {

	let postElements = props.posts.map(p => <Post message={p.message} LikesCount={p.LikesCount} />);

	let newPostElement = React.createRef(); //создание ссылки для работы

	


	let addPost = () => {
		props.dispatch(addPostActionCreator());
	}

	let onPostChange = () => {
		let text = newPostElement.current.value; //отправка поста в бизнес
		let action = updateNewPostTextActionCreator(text);
		props.dispatch(action); 
	}

	return (
		<div className={Mp.MyPosts}>
			<h2>Добавить пост</h2>
			<div className={Mp.MyPosts_body}>
				<textarea onChange={onPostChange} ref={newPostElement} placeholder='your post...'
					value={props.newPostText} />
				<button onClick={addPost}>Пост</button>
			</div>
			{postElements}
		</div>

	)
}

export default MyPosts;

