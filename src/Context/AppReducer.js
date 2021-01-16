const ACTIONS = {
  REMOVE_FRIEND: "remove-friend"
};

export default (state, action) => {
  switch (action.type) {
    case ACTIONS.REMOVE_FRIEND:
      return state.filter();
    // Not yet complete
    default:
      return;
  }
};

//Add, edit, read
