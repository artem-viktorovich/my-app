import Mp from './MyPosts.module.css';
import Post from './Posts/Post';

const MyPosts = () => {
	return (

		<div className={Mp.MyPosts}>
			<div className='MyPosts_body'>
				<textarea name=""></textarea>
				<button>Add Post</button>
			</div>
			<Post />
		</div>

	)
}

export default MyPosts;

