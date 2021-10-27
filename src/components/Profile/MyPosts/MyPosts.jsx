import Mp from './MyPosts.module.css';
import Post from './Posts/Post';

const MyPosts = () => {
	return (

		<div className={Mp.MyPosts}>
			<div className='MyPosts_body'>
				<textarea name=""></textarea>
				<button>Add Post</button>
			</div>
			<Post message='Привет бейби'/>
			<Post message='Здоров'/>
		</div>

	)
}

export default MyPosts;

