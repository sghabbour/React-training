import React, { useContext } from "react";
import { GlobalContext } from "../Context/GlobalState";
import FriendItem from "./FriendItem";

export default function FriendList() {
  // { friends: state.friends, editFriend }
  const { friends } = useContext(GlobalContext);
  console.log(friends);

  //function to pass the props to FriendItem component
  function createFriend(key, friendObject) {
    return <FriendItem key={key} friendObject={friendObject} />;
  }

  if (!friends) return <h1>No firends yet!!! </h1>;
  /// Copy/Paste list
  return (
    <div className="row justify-content-center">
      <div className="col-md-6 col-lg-6 col-sm-6">
        {friends.map((friendObject) =>
          createFriend(friendObject.key, friendObject)
        )}
      </div>
    </div>
  );
}

//TODO: upon click on Edit Friend route to the EditFriend path: /edit/:id
// friends/edit/1
