import { useState } from 'react';
import { Button } from './Button';

// Add Friend
export function FormAddFriend({ onAddFriend }) {
	const [name, setName] = useState('');
	const [image, setImage] = useState('https://i.pravatar.cc/48');

	function handleSubmit(e) {
		e.preventDefault();
		const id = crypto.randomUUID();
		if (!name || !image)
			return;
		const NewObject = {
			id,
			name,
			image: `${image}?=${id}`,
			balance: 0
		};
		onAddFriend(NewObject);
		console.log(NewObject);
	}
	return (
		<form className='form' onSubmit={handleSubmit}>
			<div>
				<label>👫Friend Name</label>
				<input type='text' placeholder='Name'
					value={name} onChange={(e) => setName(e.target.value)} />
			</div>
			<div>
				<label>🌄 Image URL-</label>
				<input type='text' placeholder='Image'
					value={image}
					onChange={e => setImage(e.target.value)} />
			</div>
			<Button>Add</Button>
		</form>
	);
}
