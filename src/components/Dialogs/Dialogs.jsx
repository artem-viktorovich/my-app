import DialogItem from './Dialog/Dialog.jsx';
import Message from './Message/Message';
import D_s from './Dialogs.module.css';

let dialogsData = [
	{id: 1, name: 'Dimych'},
	{id: 2, name: 'Andrew'},
	{id: 3, name: 'Sveta'},
	{id: 4, name: 'Sasha'},
	{id: 5, name: 'Valera'}
]
let messageData = [
	{id: 1, message: 'Привет'},
	{id: 2, message: 'Как дела?'},
	{id: 3, message: 'Ты кто?'},
	{id: 4, message: 'Пошли гулять'},
	{id: 5, message: 'Хай'}
]

const Dialogs = () => {
	return (
		  <section className={D_s.Dialogs}>
			  <h1>Сообщения</h1>
			  <div className={D_s.Dialogs_body}>
				<div className={D_s.Dialogs__list}>
						<DialogItem name ={dialogsData[0].name} id = {dialogsData[0].id}/>
						<DialogItem name ={dialogsData[1].name} id = {dialogsData[1].id}/>
						<DialogItem name ={dialogsData[2].name} id = {dialogsData[2].id}/>
						<DialogItem name ={dialogsData[3].name} id = {dialogsData[3].id}/>
						<DialogItem name ={dialogsData[4].name} id = {dialogsData[4].id}/>

				</div>
				<div className={D_s.Dialogs__message}>
					<Message message ={messageData[0].message} id={messageData[0].id} />
					<Message message ={messageData[1].message} id={messageData[1].id} />
					<Message message ={messageData[2].message} id={messageData[2].id} />
					<Message message ={messageData[3].message} id={messageData[3].id} />
					<Message message ={messageData[4].message} id={messageData[4].id} />

				</div>
			  </div>
		  </section>
	);
  }
  
  export default Dialogs;
  
  
  