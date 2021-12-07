const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState =  {
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
	newMesssageBody: "",
};

export const dialogsReducer = (state = initialState, action) => {
	if (action.type === UPDATE_NEW_MESSAGE_BODY) {
		state.newMesssageBody = action.body;
	} else if (action.type === SEND_MESSAGE) {
		let body = state.newMesssageBody;
		state.newMesssageBody = '';
		state.messages.push({ id: 6, message: body });

	}
	return state;
};