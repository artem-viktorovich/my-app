import M_e from './Message.module.css';

const Message = (props) => {
	return (
		<div className={M_e.message}>
			<p>{props.message}</p>
		</div>
	);
}


export default Message;


