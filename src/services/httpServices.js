import axios from 'axios';
import { toast } from 'react-toastify';
import logger from './logService';

axios.interceptors.response.use(null, (error) => {
	const expected =
		error.response &&
		error.response.status >= 400 &&
		error.response.status < 500;

	if (!expected) {
		logger.log(error);
		toast.error('Unexpected error happen');
	}

	return Promise.reject(error);
});

function setjwt(jwt) {
	axios.defaults.headers.common['x-auth-token'] = jwt;
}

export default {
	get: axios.get,
	post: axios.post,
	put: axios.put,
	delete: axios.delete,
	setjwt,
};
