export const goToLoginPage = (history) => {
  history.push("/");
};
export const goToSignUpPage = (history) => {
  history.push("/signup");
};
export const goToFeedPage = (history) => {
  history.push("/feed");
};
export const goToPostDetailsPage = (history) => {
  history.push("/posts/:postid");
};
