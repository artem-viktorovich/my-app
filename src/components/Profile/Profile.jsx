import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import P_e from './Profile.module.css';

const Profile = (props) => {

	return (
		<section className={P_e.Profile_body}>
			<ProfileInfo />
			<MyPosts posts={props.profilePage.posts}
				newPostText={props.profilePage.newPostText}
				dispath={props.dispath}

			/>
		</section>
	)
}

export default Profile;

