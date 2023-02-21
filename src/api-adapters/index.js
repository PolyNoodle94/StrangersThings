let BASE_URL = "https://strangers-things.herokuapp.com/api/2301-ftb-et-web-ft";

export let apiWebToken = "";

export const setApiWebToken = (string) => {
  apiWebToken = string;
  console.log(apiWebToken);
};

const makeHeaders = () => {
  if (apiWebToken.length > 0) {
    console.log("apiWebToken length > 0 ran");
    return {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiWebToken}`,
    };
  } else {
    console.log("apiWebToken with 0 length ran");
    return {
      "Content-Type": "application/json",
    };
  }
};

export const testMethod1 = async () => {
  try {
    console.log("apiWebToken" + apiWebToken);
    let response = await fetch(`${BASE_URL}/test/me`, {
      method: "GET",
      header: makeHeaders(),
    });
    let result = await response.json();
    console.log(result.data.message);
  } catch (error) {
    console.log("this was in testMethod1");
  }
};

export const logUserIn = async (username, password) => {
  try {
    let response = await fetch(`${BASE_URL}/users/login`, {
      method: "POST",
      headers: makeHeaders(),
      body: JSON.stringify({
        user: {
          username: username,
          password: password,
        },
      }),
    });
    let result = await response.json();
    return result.data.token;
  } catch (error) {
    console.log(error);
  }
};

export const fetchAllPosts = async () => {
  try {
    let response = await fetch(`${BASE_URL}/posts`);
    let result = await response.json();
    return result.data.posts;
  } catch (error) {
    console.log(error);
  }
};

//To register user as well as get JSON Web Token
export const registerNewUser = async (username, password) => {
  try {
    let response = await fetch(`${BASE_URL}/users/register`, {
      method: "POST",
      headers: makeHeaders(),
      body: JSON.stringify({
        user: {
          username: username,
          password: password,
        },
      }),
    });

    let result = await response.json();
    return result.data.token;
  } catch (error) {
    console.log(error);
  }
};
