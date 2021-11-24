import jsonPlacholder from "../apis/jsonPlaceholder";

export const fetchPost = () => async (dispatch) => {
  const response = await jsonPlacholder.get("/posts");

  dispatch({ type: "FETCH_POSTS", payload: response });
};
