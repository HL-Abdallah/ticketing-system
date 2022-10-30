import { API_URL } from "../main";
/**
 * POST /auth/register to create a new user
 * @param data : the form fields's values
 */
export const register = (data: any) => {
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  };

  fetch(API_URL + "/auth/register", options)
    .then((res) => res.json())
    .then((data) => {
      return data;
    })
    .catch((err) => {
      return err;
    });
};
/**
 * POST /auth/login to authenticate user
 * @param data : the form fields's values
 */
export const login = (data: any) => {
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  };

  fetch(API_URL + "/auth/login", options)
    .then((res) => res.json())
    .then((data) => {
      console.log("logging data back from backend", data);
    })
    .catch((err) => {
      console.log(err);
    });
};
