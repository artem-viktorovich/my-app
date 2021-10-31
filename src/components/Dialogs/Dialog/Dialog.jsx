import D_l from './Dialog.module.css';
import { NavLink } from 'react-router-dom';


const DialogItem = (props) => {
	let path = '/dialogs/' + props.id;
	return (
		<div className = {D_l.dialog + ' ' + D_l.active}>
			<NavLink to = {path}>{props.name}</NavLink>
		</div>
	);
}

export default DialogItem;
