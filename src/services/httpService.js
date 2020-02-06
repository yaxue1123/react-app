// use http service module
// in our app module, we don't care what library we are using.
import axios from 'axios';
import { toast } from 'react-toastify';

// check unexpected error.
axios.interceptors.response.use(null, error => {
    const expectedError = error.response && error.response.status >= 400 && error.response.status < 500;
    
    if (!expectedError) {
      console.log('Logging the error', error);
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
