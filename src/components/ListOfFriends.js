import { Button } from "./Button";


export function ListOfFriends({ friend, onhandleSelect, selectedFriend }) {
	const isSelectd = selectedFriend?.id === friend.id;
	return (
		<div className='card'>
			<div className={`card-list ${isSelectd && 'selected'}`}>
				<img src={friend.image} alt={friend.name} />
				<div>
					<h2>{friend.name}</h2>
					{friend.balance > 0 ?
						<p className='green'>{friend.name}  Owes You  {friend.balance}€</p>
						: friend.balance < 0 ? <p className='red'>
							You Owe {friend.name} {Math.abs(friend.balance)}€</p> :
							<p>You and {friend.name} are even</p>}
				</div>
			</div>
			<Button onClick={() => onhandleSelect(friend)}>{isSelectd ? 'Close' : ' Select'}</Button>

		</div>
	);
}

