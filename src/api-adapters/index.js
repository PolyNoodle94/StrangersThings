//its a let because if we make it a const the link is pushed into the next line and thats annoying
let BASE_URL = "https://strangers-things.herokuapp.com/api/2301-ftb-et-web-ft";

// Depending on whether there is a token stored in localStorage, return an object containing either both the content type and authorization key value pairs, or just the content type
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

//GET API method
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

//GET API method
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

//POST API method
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
//POST API method
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

//POST API method
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

//POST API method
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

//DELETE API method
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
