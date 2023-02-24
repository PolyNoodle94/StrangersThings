let BASE_URL = "https://strangers-things.herokuapp.com/api/2301-ftb-et-web-ft";

// export let apiWebToken = "";

// export const setApiWebToken = (string) => {
//   apiWebToken = string;
//   console.log(apiWebToken);
// };

const makeHeaders = () => {
  if (localStorage.getItem("token")) {
    const token = localStorage.getItem("token");
    return {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    };
  } else {
    return {
      "Content-Type": "application/json",
    };
  }
};

export const fetchAllPosts = async () => {
  try {
    let response = await fetch(`${BASE_URL}/posts`, {
      method: "GET",
      headers: makeHeaders(),
    });
    let result = await response.json();
    return result.data.posts;
  } catch (error) {
    console.log(error);
  }
};

export const fetchUserData = async () => {
  try {
    let response = await fetch(`${BASE_URL}/users/me`, {
      headers: makeHeaders(),
    });
    let result = await response.json();
    return result.data;
  } catch (error) {
    console.log(error);
  }
};

export const createNewPost = async (
  title,
  description,
  price,
  location,
  willDeliver
) => {
  try {
    let response = await fetch(`${BASE_URL}/posts`, {
      method: "POST",
      headers: makeHeaders(),
      body: JSON.stringify({
        post: {
          title: title,
          description: description,
          price: price,
          location: location,
          willDeliver: willDeliver,
        },
      }),
    });
    let result = await response.json();
    return result.data.post;
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

export const deletePost = async (postId) => {
  try {
    await fetch(`${BASE_URL}/posts/${postId}`, {
      method: "DELETE",
      headers: makeHeaders(),
    });
  } catch (error) {
    console.log(error);
  }
};

export const sendMessage = async (postId, message) => {
  try {
    await fetch(`${BASE_URL}/posts/${postId}/messages`, {
      method: "POST",
      headers: makeHeaders(),
      body: JSON.stringify({
        message: {
          content: message,
        },
      }),
    });
  } catch (error) {
    console.log(error);
  }
};
