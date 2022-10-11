import axios from 'axios';
import store from "@/store";

const instance = axios.create({
  baseURL: process.env.VUE_APP_BACKEND_URL,
  timeout: 20000,
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json",
  }
});

instance.interceptors.response.use(
  function (response) {
    return response;
  },

  function (error) {
    //Best solution for error handle.
    //But it can handle with "error.response.status"
    store.dispatch('notification/setNotification', {
      message: error.response.data.message ?? 'Unknown Error!',
      status: true,
      type: "success",
    });

    return Promise.reject(error);
  }
);

export default instance;
