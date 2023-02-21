let BASE_URL = "https://strangers-things.herokuapp.com/api/2301-ftb-et-web-ft";

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
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user: {
          username:username,
          password:password 
        },
      }),
    });

    let result = await response.json();
    return result.data.token;
  } catch (error) {
    console.log(error);
  }
};
