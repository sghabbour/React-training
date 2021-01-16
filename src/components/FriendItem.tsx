import React from "react";
import {
  Route,
  Link,
  BrowserRouter as Router,
  useHistory
} from "react-router-dom";
import EditFriend from "../Screens/EditFriend";

export default function FriendItem({ id, friendObject }) {
  let url = "/edit-friend/" + friendObject.key;

  let history = useHistory();
  // console.log("history", history);

  function handleClick() {
    history.push(url);
    // history.push({ pathname: "edit-friend" });
  }

  return (
    <div key={friendObject.key} className="card-body">
      <input className="form-check-input" type="checkbox" />
      <span>
        {friendObject.name}{" "}
        {friendObject.isBestFriend ? (
          <span role="img" aria-label="star">
            🌟
          </span>
        ) : null}
      </span>
      <button className="btn btn-light" onClick={handleClick}>
        {" "}
        Edit
        {/* <Link to={url}>Edit</Link> */}
        {/* (1) ROuter must be defined one time only per app */}
        {/* (2) Check https://reactrouter.com/web/api/Hooks/usehistory
          So we navigate between screens without Link component
          */}
        {/* Do you understand the routing wla l2 ? */}
        {/* Ok, let me call you in 5 mins  👍 */}
        {/* Check the route for edit friend "/edit/" is not defined ! */}
        {/* <Router>
            
            <Route
              path="/edit/:id"
              render={() => <EditFriend id={friendObject.key} />}
            />
          </Router> */}
      </button>
      <button className="btn btn-light"> Remove</button>
    </div>
  );
}
