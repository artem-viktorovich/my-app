import {rerenderEntureTree} from '../render';


let state = {
	profilePage : {
		posts: [
			{ id: 1, message: 'Привет бейби', LikesCount: 22},
			{ id: 2, message: 'Здоров', LikesCount: 21 },
			{ id: 3, message: 'Пока', LikesCount: 21 },
			{ id: 4, message: 'Йоу', LikesCount: 21 }
		],
		newPostText  : ''
	},
	dialogsPage : {
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

}
	window.state = state;
	export let addPost = () => {
		let newPost = {
			id: 5,
			message: state.profilePage.newPostText,
			LikesCount: 0
		};
		state.profilePage.posts.push(newPost);
		state.profilePage.newPostText = '';
		rerenderEntureTree(state); //запускает перерисовку BLL
	}

	export let updateNewPostText = (newText) => {
		state.profilePage.newPostText = newText;
		rerenderEntureTree(state);
	}




export default state;