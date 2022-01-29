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

	switch (action.type) {
		case ADD_POST: {
			let newPost = {
				id: 5,
				message: state.newPostText,
				LikesCount: 0
			};
			let stateCopy = [...state];
			stateCopy.posts = [...state.posts]; //копирование и вызов постов в стайте
			stateCopy.posts.push(newPost); //jтправляем пост
			stateCopy.newPostText = '';
			return stateCopy;
		}
		case UPDATE_NEW_POST_TEXT: {
			let stateCopy = { ...state };
			stateCopy.newPostText = action.newText;
			return stateCopy;
		}
		default:
			return state;
	}
}

export const sendMessageCreator = () => ({ type: ADD_POST })
export const updateNewMessageBodyCreator = (text) =>
	({ type: UPDATE_NEW_POST_TEXT, newText: text })

export default profileReducer;