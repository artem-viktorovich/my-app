import DialogItem from './Dialog/Dialog.jsx';
import Message from './Message/Message';
import D_s from './Dialogs.module.css';





const Dialogs = () => {

	let dialogs = [
		{ id: 1, name: 'Dimych' },
		{ id: 2, name: 'Andrew' },
		{ id: 3, name: 'Sveta' },
		{ id: 4, name: 'Sasha' },
		{ id: 5, name: 'Valera' }
	]
	let messages = [
		{ id: 1, message: 'Привет' },
		{ id: 2, message: 'Как дела?' },
		{ id: 3, message: 'Ты кто?' },
		{ id: 4, message: 'Пошли гулять' },
		{ id: 5, message: 'Хай' }
	]


	let dialogsElements = dialogs.map(dialogs => <DialogItem name={dialogs.name} id={dialogs.id} />);
	let messagesElements = messages.map(messages => <Message message={messages.message} />);


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


