export default (state = "#0ac533", action: any) => {
  switch (action.type) {
    case "THEME":
      return action.payload;
    default:
      return state;
  }
};
