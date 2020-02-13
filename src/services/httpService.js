// use http service module
// in our app module, we don't care what library we are using.
import axios from 'axios';
import logger from './logService';
import auth from './authService';
import { toast } from 'react-toastify';

// Each time we have a http request, this token will be included, set in header.
// If the user is not logged in, token will be undefined.
axios.defaults.headers.common['x-auth-token'] = auth.getJwt();

// check unexpected error.
axios.interceptors.response.use(null, error => {
    const expectedError = 
      error.response && 
      error.response.status >= 400 && 
      error.response.status < 500;
    
    if (!expectedError) {
      logger.log(error);
      toast.error("An unexpected error occurred.");
      // besides use as obj, can use as method.
      // toast("An unexpected error occurred.");
    } 
    
    return Promise.reject(error);
});

export default {
    get: axios.get,
    post: axios.post,
    put: axios.put,
    delete: axios.delete,
};
