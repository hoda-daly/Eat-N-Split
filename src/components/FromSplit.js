import { useState } from 'react';
import { Button } from './Button';

// Form Split
export function FromSplit({ selectedFriend, onSplitBill }) {
	const [bill, setBill] = useState();
	const [expense, setExpense] = useState();
	const [whoIsPaying, setWhoIsPaying] = useState('user');
	const paidByFriend = bill ? bill - expense : '';

	function handleSubmit(e) {
		e.preventDefault();

		if (!bill || !expense)
			return;
		onSplitBill(whoIsPaying === 'user' ? paidByFriend : -expense);
	}
	return (
		<form className='form2' onSubmit={handleSubmit}>
			<h1>SPLIT A BILL WITH {selectedFriend.name}</h1>
			<div className='form-spilt'>
				<label>💰 Bill value</label>
				<input type='text'
					value={bill}
					onChange={(e) => setBill(Number(e.target.value))} />
				<label>🧍‍♀️ Your expense</label>
				<input type='text'
					value={expense}
					onChange={(e) => setExpense(+e.target.value)} />
				<label>👫 {selectedFriend.name}'s expense</label>
				<input type='text' disabled value={paidByFriend} />
				<label>🤑 Who is paying the bill</label>
				<select
					value={whoIsPaying}
					onChange={(e) => setWhoIsPaying(e.target.value)}>
					<option value="user">You</option>
					<option value="friend">{selectedFriend.name}</option>
				</select>
			</div>
			<Button>Split bill</Button>

		</form>
	);
}
