import Mp from './MyPosts.module.css';
import Post from './Posts/Post';


const MyPosts = (props) => {

	let postElements = props.posts.map(p => <Post message={p.message}  LikesCount={p.LikesCount}/>); 
	//  

	return (
		<div className={Mp.MyPosts}>
			<h2>Добавить пост</h2>
			<div className={Mp.MyPosts_body}>
				<textarea name="" placeholder='your post...'></textarea>
				<button>Пост</button>
			</div>
			{postElements}
		</div>

	)
}

export default MyPosts;

