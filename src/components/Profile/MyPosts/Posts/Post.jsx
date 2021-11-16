import p_t from './Post.module.css';


const Post = (props) => {
	return (
		<section className={p_t.Post_body}>
			<div className={p_t.Post_item}>
				<img src="https://avatars.mds.yandex.net/i?id=026ff47b49d6475b8540af980292e791-5257871-images-thumbs&n=13" alt="avatar_user" />

				<div className={p_t.title}>{props.message}</div>
				
				<div className={p_t.Post_like}><span>Like</span>&#160;{props.LikesCount}</div>

			</div>
		</section>

	)
}

export default Post;

