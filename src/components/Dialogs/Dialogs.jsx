import DialogItem from './Dialog/Dialog.jsx';
import Message from './Message/Message';
import D_s from './Dialogs.module.css';





const Dialogs = (props) => {

	let dialogsElements = props.state.dialogs.map(dialogs => <DialogItem name={dialogs.name} id={dialogs.id} />);
	let messagesElements = props.state.messages.map(messages => <Message message={messages.message} />);


	return (
		<section className={D_s.Dialogs}>
			<h1>Сообщения</h1>
			<div className={D_s.Dialogs_body}>
				<div className={D_s.Dialogs__list}>
					{dialogsElements}
				</div>
				<div className={D_s.Dialogs__message}>
					{messagesElements}
				</div>
			</div>
		</section>
	);
}

export default Dialogs;


