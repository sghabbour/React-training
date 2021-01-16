import React, { useState, useContext } from "react";
import { GlobalContext } from "../Context/GlobalState";

export default function EditFriendForm({ selectedFriend }) {
  const { friends } = useContext(GlobalContext);
  const [name, setName] = useState("");
  console.log(selectedFriend);

  //(1) get the friend object
  //(2) set name to the current friend's object
  //(3) complete the onSubmit function

  return (
    <form>
      <input
        type="text"
        placeholder="Edit Friend Name"
        className="form-control"
        value={selectedFriend.name}
        onChange={(e) => setName(e.target.value)}
      />
    </form>
  );
}
