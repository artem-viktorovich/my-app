const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';


let store = {
	_state: {
		profilePage: {
			posts: [
				{ id: 1, message: 'Привет бейби', LikesCount: 22 },
				{ id: 2, message: 'Здоров', LikesCount: 21 },
				{ id: 3, message: 'Пока', LikesCount: 21 },
				{ id: 4, message: 'Йоу', LikesCount: 21 }
			],
			newPostText: ''
		},
		dialogsPage: {
			dialogs: [
				{ id: 1, name: 'Dimych' },
				{ id: 2, name: 'Andrew' },
				{ id: 3, name: 'Sveta' },
				{ id: 4, name: 'Sasha' },
				{ id: 5, name: 'Valera' }
			],
			messages: [
				{ id: 1, message: 'Привет' },
				{ id: 2, message: 'Как дела?' },
				{ id: 3, message: 'Ты кто?' },
				{ id: 4, message: 'Пошли гулять' },
				{ id: 5, message: 'Хай' }
			]
		}

	},
	_callSubscriber() {
		console.log('Kazah');
	},
	getState() {
		return this._state;
	},

	dispath(action) {
		if (action.type === ADD_POST) {
			let newPost = {
				id: 5,
				message: this._state.profilePage.newPostText,
				LikesCount: 0
			};
			this._state.profilePage.posts.push(newPost);
			this._state.profilePage.newPostText = '';
			this._callSubscriber(this._state); //запускает перерисовку BLL
		} else if (action.type === UPDATE_NEW_POST_TEXT ) {
			this._state.profilePage.newPostText = action.newText;
			this._callSubscriber(this._state);
		}

	},


subscribe(observer) {
		this._callSubscriber = observer;
	}
}
export const addPostActionCreator = () => {
	return {
		type: ADD_POST
	}
}

export const updateNewPostTextAction = (text) => {
	return {
		type: UPDATE_NEW_POST_TEXT , newText: text
	}
}
export default store;
