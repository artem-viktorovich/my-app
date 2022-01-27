import React from 'react';
import { sendMessageCreator, updateNewMessageBodyCreator } from '../../redux/store';
import Dialogs from './Dialogs.jsx';
import { connect } from 'react-redux';


let mapStateToProps = (state) => {
	return {
		dialogsPage: state.dialogsPage
	}
}
let mapDispatchToProps = (dispatch) => {
	return {
		updateNewMessageBody: () => {
			dispatch(sendMessageCreator());
		},
		sendMessage: (body) => {
			dispatch(updateNewMessageBodyCreator(body));
		}
	}
}


const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;


