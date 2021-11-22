import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
//import sidebarReducer from "./sidebar-reducer";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';


let store = {
	_state: {
		profilePage: {
			posts: [
				{ id: 1, message: 'Привет бейби', LikesCount: 22 },
				{ id: 2, message: 'Здоров', LikesCount: 21 },
				{ id: 3, message: 'Пока', LikesCount: 21 },
				{ id: 4, message: 'Йоу', LikesCount: 21 }
			],
			newPostText: '',
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
			],
			newMesssageBody: 'drgdrgdr',
		},
		sidebar: {

		}
	},
	_callSubscriber() {
		console.log('Kazah');
	},
	getState() {
		return this._state;
	},

	dispatch(action) {

		this._state.profilePage = profileReducer(this._state.profilePage.action);
		this._state.dialogsPage = dialogsReducer(this._state.dialogsPage.action);
		//this._state.sidebar = sidebarReducer(this._state.sidebar.action);
		this._callSubscriber(this._state);
	},


	subscribe(observer) {
		this._callSubscriber = observer;
	}
}
export const addPostActionCreator = () =>
	({ type: ADD_POST });

export const updateNewPostTextActionCreator = (text) =>
	({ type: UPDATE_NEW_POST_TEXT, newText: text });

export const updateNewMessageBodyCreator = (body) =>
	({ type: UPDATE_NEW_MESSAGE_BODY, body: body });

export const sendMessageCreator = () =>
	({ type: SEND_MESSAGE });





export default store;
//window.store = store;
