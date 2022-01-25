import React from 'react';
import DialogItem from './Dialog/Dialog.jsx';
import Message from './Message/Message';

import { sendMessageCreator, updateNewMessageBodyCreator } from '../../redux/store';
import Dialogs from './Dialogs.jsx';





const DialogsContainer = (props) => {

	let state = props.store.getState().dialogsPage;

	let onSendMessageClick = () => {
		props.store.dispatch(sendMessageCreator());
	};

	let onNewMessageChange = (body) => {
		props.store.dispatch(updateNewMessageBodyCreator(body));  //ошибка
	};

	return (<Dialogs 
		updateNewMessageBody={onNewMessageChange}
		sendMessage={onSendMessageClick}
		dialogsPage = {state}
	/>
	);
}

export default DialogsContainer;


