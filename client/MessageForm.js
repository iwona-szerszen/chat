import React, { Component } from 'react';
import styles from './MessageForm.css';

class MessageForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			text: ''
		}
	}
	handleSubmit(event) {
		event.preventDefault();
		const message = {
			text: this.state.text,
			from: this.props.name
		};
		this.props.onMessageSubmit(message);
		this.setState({
			text: ''
		});
	}
	handleChange(event) {
		this.setState({
			text: event.target.value
		});
	}
	render() {
		return (
			<form className={styles.MessageForm} onSubmit={event => this.handleSubmit(event)}>
				<input
					className={styles.MessageInput}
					placeholder='Message'
					onChange={event => this.handleChange(event)}
					value={this.state.text}
				/>
			</form>
		);
	}
}

export default MessageForm;