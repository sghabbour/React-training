import React from "react";

export default function NewFriendForm() {
  return (
    <div>
      <div className="mb-3">
        <label for="newFriendsName" className="form-label">
          Friend's name
        </label>
        <input
          id="newFriendsName"
          className="form-control"
          type="text"
          placeholder="Enter your Frineds name"
        />
      </div>
      <div className="mb-3 form-check">
        <label className="form-label">Is bestfriend?</label>
        <input className="form-check-input" type="checkbox"></input>
      </div>
    </div>
  );
}
