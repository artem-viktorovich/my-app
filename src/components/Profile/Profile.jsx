import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import P_e from './Profile.module.css';

const Profile = () => {
	let posts = [
		{ id: 1, message: 'Привет бейби', LikesCount: 22},
		{ id: 2, message: 'Здоров', LikesCount: 21 },
		{ id: 2, message: 'Пока', LikesCount: 21 },
		{ id: 2, message: 'Йоу', LikesCount: 21 }
	]
	return (
		<section className={P_e.Profile_body}>
			<ProfileInfo />
			<MyPosts props={posts} />
		</section>
	)
}

export default Profile;

