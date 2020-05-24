import axios from "axios";

const instance = axios.create({
  baseURL: "https://5eca26aa9ccbaf0016aa9249.mockapi.io/users",
});

export const registryUser = (data) => {
  return instance
    .post("/", data)
    .then((resp) => ({ data: resp.data }))
    .catch((error) => ({
      error: error.message,
    }));
};

export const loginUser = (data) => {
  return instance
    .get(`/?search=${data.email}&limit=1`)
    .then((resp) => {
      if (!resp.data.length) {
        throw new Error("No such account");
      }
      if (resp.data[0].password !== data.password) {
        throw new Error("Wrong password");
      }
      return { data: resp.data[0] };
    })
    .catch((error) => {
      return {
        error: error.message,
      };
    });
};

export const updateUser = (data) => {
  return instance
    .put(`/${data.id}`, data)
    .then((resp) => {
      return { data: resp.data };
    })
    .catch((error) => {
      return {
        error: error.message,
      };
    });
};
