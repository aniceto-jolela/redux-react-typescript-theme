export const theme = (
  background: string,
  container: string,
  letras: string
) => {
  return {
    type: "THEME",
    payload: [background, container, letras],
  };
};
