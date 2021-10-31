import Mp from './MyPosts.module.css';
import Post from './Posts/Post';

let postData = [
	{id: 1, message: 'Привет бейби', LikesCount: 12},
	{id: 2, message: 'Здоров', LikesCount: 23}
]

const MyPosts = () => {
	return (

		<div className={Mp.MyPosts}>
			<h2>Добавить пост</h2>
			<div className={Mp.MyPosts_body}>
				<textarea name=""></textarea>
				<button>Пост</button>
			</div>
			<Post message={postData[0].message} LikesCount={postData[0].LikesCount }/>
			<Post message={postData[1].message} LikesCount={postData[1].LikesCount} />
		</div>

	)
}

export default MyPosts;

