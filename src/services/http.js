import axios from 'axios';

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
    //   helpers.showError({
    //     message: error.response ? error.response.data?.message : 'Error: ERR_CONNECTION_REFUSED	',
    //     responseStatus: error.response?.status
    //   })

      return Promise.reject(error);
    }
);

export default instance;
