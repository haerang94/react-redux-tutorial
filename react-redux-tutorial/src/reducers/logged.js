const loggedReducer = (state = false, action) => {
  switch (action.type) {
    case "LogInOut":
      return !state;

    default:
      return state;
  }
};

export default loggedReducer;
