import { ListOfFriends } from "./ListOfFriends";

export function Lsit({ friends, onhandleSelect, selectedFriend }) {
	return (
		<div>
			{friends.map(friend => <ListOfFriends friend={friend} key={friend.id} onhandleSelect={onhandleSelect} selectedFriend={selectedFriend} />)}
		</div>


	);

}
