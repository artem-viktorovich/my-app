import React from 'react';
import DialogItem from './Dialog/Dialog.jsx';
import Message from './Message/Message';
import D_s from './Dialogs.module.css';
import { sendMessageCreator, updateNewMessageBodyCreator } from '../../redux/store';





const Dialogs = (props) => {

	let state = props.dialogsPage;

	let dialogsElements = state.dialogs.map(dialogs => <DialogItem name={dialogs.name} id={dialogs.id} />);
	let messagesElements = state.messages.map(messages => <Message message={messages.message} />);
	let newMessageBody = state.newMessageBody;

	let onSendMessageClick = () => {
		props.sendMessage();
	};
	
	let onNewMessageChange = (e) => {
		let body = e.target.value;
		props.updateNewMessageBody(body);
	};

	return (
		<section className={D_s.Dialogs}>
			<h1>Сообщения</h1>
			<div className={D_s.Dialogs_body}>
				<div className={D_s.Dialogs__list}>
					{dialogsElements}
				</div>
				<div className={D_s.Dialogs__messages_body}>
					<div className={D_s.Dialogs__messages_text}>{messagesElements}</div>
					<div className={D_s.Sending_sms}>
						<div className={D_s.typing}>
							<textarea onChange={onNewMessageChange}
								value={newMessageBody}
								placeholder='Send you message...' /></div>
						<div><button onClick={onSendMessageClick}>Send</button></div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Dialogs;


