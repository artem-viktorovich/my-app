import React from 'react';

import ProfileInfo from './ProfileInfo/ProfileInfo';
import P_e from './Profile.module.css';
import MyPostsContainer from './MyPosts/MyPostsContainer';

const Profile = (props) => {

	return (
		<section className={P_e.Profile_body}>
			<ProfileInfo />
		
			<MyPostsContainer store = {props.store}

			/>
		</section>
	)
}

export default Profile;

