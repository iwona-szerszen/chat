import React from 'react';
import styles from './UsersList.css';

const UsersList = props => {
	return (
		<div className={styles.Users}>
			<div className={styles.UsersOnline}>
				{props.users.length} people online
			</div>
			<ul className={styles.UsersList}>
				{props.users.map(user => <li key={user.id} className={styles.UserItem}>{user.name}</li>)}
			</ul>
		</div>
	);
	const users = props.users.map((user, index) => <User key={index} name={user.name} />);
	return <ul>{users}</ul>
}

export default UsersList;