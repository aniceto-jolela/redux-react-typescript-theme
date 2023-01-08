export default (state = "#000000", action: any) => {
  switch (action.type) {
    case "CODIGO":
      return action.payload;
    default:
      return state;
  }
};
