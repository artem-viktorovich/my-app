import React from 'react';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/store';
import MyPosts from './MyPosts';
import Post from './Posts/Post';



const MyPostsContainer = (props) => {

	let postElements = props.posts.map(p => <Post message={p.message} LikesCount={p.LikesCount} />);

	let newPostElement = React.createRef(); //создание ссылки для работы

	


	let addPost = () => {
		props.dispatch(addPostActionCreator());
	}

	let onPostChange = (text) => {
		let action = updateNewPostTextActionCreator(text);
		props.dispatch(action); 
	}

	return (	<MyPosts updateNewPostText={onPostChange}	addPost={addPost})
}

export default MyPostsContainer;

