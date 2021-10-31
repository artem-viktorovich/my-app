import DialogItem from './Dialog/Dialog.jsx';
import Message from './Message/Message';
import D_s from './Dialogs.module.css';



const Dialogs = () => {
	return (
		  <section className={D_s.Dialogs}>
			  <h1>Сообщения</h1>
			  <div className={D_s.Dialogs_body}>
				<div className={D_s.Dialogs__list}>
						<DialogItem name='Andrey'  id='1'/>
						<DialogItem name='Anton'  id='2'/>
						<DialogItem name='Dima'  id='3'/>
						<DialogItem name='Artem'  id='4'/>
						<DialogItem name='Artur'  id='5'/>
				</div>
				<div className={D_s.Dialogs__message}>
					<Message message = 'Привет' />
					<Message message = 'Как дела?' />
					<Message message = 'Ты кто?' />
					<Message message = 'Пошли гулять' />
					<Message message = 'Хай' />
				</div>
			  </div>
		  </section>
	);
  }
  
  export default Dialogs;
  
  
  