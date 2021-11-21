const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';


const dialogsReducer = (state, action) => {
	if (action.type === SEND_MESSAGE) {
		let body = state.newMesssageBody;
		state.messages.push({ id: 6, message: body });
		state.newMesssageBody = '';
	} else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
		state.newMesssageBody = action.body;
	}
	return state;
}

export default dialogsReducer;