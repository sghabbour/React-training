import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { GlobalProvider } from "./Context/GlobalState";
import { Home, Friends, AddFriend, EditFriend } from "./Screens";

export default function App() {
  return (
    <div className="container">
      <GlobalProvider>
        <Router>
          <nav className="navbar navbar-expand-md navbar-light bg-light">
            <div className="container-fluid">
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarTogglerDemo01"
                aria-controls="navbarTogglerDemo01"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>

              <div
                className="collapse navbar-collapse"
                id="navbarTogglerDemo01"
              >
                <ul className="col-md-3 col-lg-2 ml-5 navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <Link className="nav-link" to="/">
                      HOME
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/friends">
                      FRIENDS
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/add-friend">
                      ADD FRIEND
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>

          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/friends">
              <Friends />
            </Route>
            <Route path="/add-friend">
              <AddFriend />
            </Route>
            <Route path="/edit-friend/:id">
              <EditFriend />
            </Route>
          </Switch>
        </Router>
      </GlobalProvider>
    </div>
  );
}
// 1- Install react-router-dom
// 2- Create 4 screens , Home,Friends, AddFriend , Edit friend
// 3-
