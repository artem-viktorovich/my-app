const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
	posts: [
		{ id: 1, message: 'Привет бейби', LikesCount: 22 },
		{ id: 2, message: 'Здоров', LikesCount: 21 },
		{ id: 3, message: 'Пока', LikesCount: 21 },
		{ id: 4, message: 'Йоу', LikesCount: 21 }
	],
	newPostText: '',
};


export const profileReducer = (state = initialState, action) => {

	if (action.type === ADD_POST) {
		let newPost = {
			id: 5,
			message: state.newPostText,
			LikesCount: 0
		};
		state.posts.push(newPost);
		state.newPostText = '';
	} else if (action.type === UPDATE_NEW_POST_TEXT) {
		state.newPostText = action.newText;
	}
	return state;
};
