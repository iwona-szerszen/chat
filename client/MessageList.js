import React from 'react';
import styles from './MessageList.css';

const Message = props => {
	return (
		<div className={styles.Message}>
			<strong>{props.from}: </strong>
			<span>{props.text}</span>
		</div>
	);
}

const MessageList = props => {
	return (
		<div className={styles.MessageList}>
			{props.messages.map((message, index) => <Message key={index} from={message.from} text={message.text} />)}
		</div>
	);
}

export default MessageList;