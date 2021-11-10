import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import P_e from './Profile.module.css';

const Profile = (props) => {

	return (
		<section className={P_e.Profile_body}>
			<ProfileInfo />
			<MyPosts posts={props.profilePage.posts}
				addPost={props.addPost}
				newPostText={props.profilePage.newPostText} 
				updateNewPostText={props.updateNewPostText}
				
				/>
		</section>
	)
}

export default Profile;

