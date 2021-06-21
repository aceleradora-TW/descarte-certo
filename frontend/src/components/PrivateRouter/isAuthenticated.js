export const isAuthenticated = () => {
  const token = localStorage.getItem("token-descarte-certo");
  return token !== null && token !== "";
};
