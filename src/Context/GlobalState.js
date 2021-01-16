import React, { createContext, useReducer } from "react";

import AppReducer from "./AppReducer";

const initialState = {
  friends: [
    {
      key: 0,
      name: "Mina",
      isBestFriend: true
    },
    {
      key: 1,
      name: "Ahmed",
      isBestFriend: false
    },
    {
      key: 2,
      name: "Adel",
      isBestFriend: false
    }
  ],
  cities: []
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // action-creator
  function editFriend(editedFriend) {
    dispatch({ type: "", payload: editedFriend });
  }

  return (
    <GlobalContext.Provider value={{ friends: state.friends, editFriend }}>
      {children}
    </GlobalContext.Provider>
  );
};
