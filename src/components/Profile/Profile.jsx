import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import P_e from './Profile.module.css';

const Profile = () => {
	return (

		<section className={P_e.Profile_body}>
			<ProfileInfo />
			<MyPosts />

		</section>
	)
}

export default Profile;

