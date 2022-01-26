import React from 'react';
import DialogItem from './Dialog/Dialog.jsx';
import Message from './Message/Message';

import { sendMessageCreator, updateNewMessageBodyCreator } from '../../redux/store';
import Dialogs from './Dialogs.jsx';
import StoreContext from '../../StoreContext.js';





const DialogsContainer = () => {

	return <StoreContext.Consumer>
		{
			(store) => {
				let state = store.getState().dialogsPage;

				let onSendMessageClick = () => {
					store.dispatch(sendMessageCreator());
				};

				let onNewMessageChange = (body) => {
					store.dispatch(updateNewMessageBodyCreator(body));  //ошибка
				};
				return <Dialogs
					updateNewMessageBody={onNewMessageChange}
					sendMessage={onSendMessageClick}
					dialogsPage={state}
				/>
			}
		}
	</StoreContext.Consumer>
}

export default DialogsContainer;


