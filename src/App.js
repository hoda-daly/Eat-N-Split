import './App.css';
// import Button from './components/Button';
// import FormAdd from './components/FormAdd';
// import FormSplitBill from './components/FormSplitBill';
// import FriendList from './components/FriendList';
import { useState } from 'react';
import { Lsit } from './components/Lsit';
import { Button } from './components/Button';
import { FormAddFriend } from './components/FormAddFriend';
import { FromSplit } from './components/FromSplit';
const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

function App() {
  const [friends, setFriends] = useState(initialFriends)
  const [showAddFriendForm, setShowAddFriendForm] = useState(false);
  const [selectedFriend, setSelectFriend] = useState(null);
  function handleShowAddFriend() {
    setShowAddFriendForm((showAddFriendForm) => !showAddFriendForm);
  }

  function handleAddFriends(friend) {
    setFriends((friends) => [...friends, friend])
    setShowAddFriendForm(false)


  }

  function handleSelectedFriend(friend) {
    // setSelectFriend(friend);
    setSelectFriend((cur) => cur?.id === friend.id ? null : friend);
    setShowAddFriendForm(false);

  }

  function handleSplitBill(value) {
    setFriends(friends => friends.map(friend => friend.id === selectedFriend.id ?
      { ...friend, balance: friend.balance + value } : friend))
    setSelectFriend(null)
  }


  ///////////////////////////////
  return (
    <div className='App'>
      <div className='Aside'>
        <Lsit friends={friends} selectedFriend={selectedFriend} onhandleSelect={handleSelectedFriend} />
        <div className='btn1'>
          {showAddFriendForm && <FormAddFriend onAddFriend={handleAddFriends} />}
          <Button onClick={handleShowAddFriend}>{showAddFriendForm ? 'Close' : 'Add Friend'}</Button>
        </div>
      </div>
      {selectedFriend && <FromSplit selectedFriend={selectedFriend} onSplitBill={handleSplitBill} />}
    </div>
  )

}

export default App;
