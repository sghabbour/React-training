import React, { useContext, useState, useEffect } from "react";
import EditFriendForm from "../components/EditFriendForm";
import { GlobalContext } from "../Context/GlobalState";
import { useParams } from "react-router-dom";

export default function EditFriend() {
  const params = useParams();
  // console.log("params " + Object.keys(params));
  // console.log(params.id);
  const { friends } = useContext(GlobalContext);
  const [selectedFriend, setSelectedFriend] = useState();

  useEffect(() => {
    // getSelectedFriend(params.id);
    const friendToEdit = friends.filter((object) => object.key === params.id);
    setSelectedFriend(friendToEdit);
    console.log(friendToEdit);
  }, []);

  // function getSelectedFriend(id) {
  //   const currentFriend = friends.filter((object) => object.key === id);
  //   setSelectedFriend(currentFriend);
  // }

  return (
    <div>
      <EditFriendForm selectedFriend />
    </div>
  );
}

// (1) upon render set the data of the selected friend (useEffect)
// from router props get (id)
// (2) set current friend's state ... on submit route back to Friends
