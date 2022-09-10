import * as AuthApi from "../api/AuthRequest";

export const login = (formData) => async (dispatch) => {
  dispatch({ type: "AUTH_START" });

  try {
    const { data } = await AuthApi.login(formData);
    dispatch({ type: "AUTH_SUCCESSFULL!", data: data });
  } catch (error) {
    console.log(error);
    dispatch({ type: "AUTH_FAILD" });
  }
};

export const signUp = (formData) => async (dispatch) => {
  dispatch({ type: "AUTH_START" });

  try {
    const { data } = await AuthApi.signUp(formData);
    dispatch({ type: "AUTH_SUCCESSFULL!", data: data });
  } catch (error) {
    console.log(error);
    dispatch({ type: "AUTH_FAILD" });
  }
};

export const logOut = () => async (dispatch) => {
  dispatch({ type: "LOG_OUT" });
};
