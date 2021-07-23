import http from './httpServices';
import { apiUrl } from '../config.json';
import jwtDecode from 'jwt-decode';

const apiEndPoint = apiUrl + '/auth';
http.setjwt(getJwt());

export async function login(email, password) {
	const { data: jwt } = await http.post(apiEndPoint, { email, password });
	localStorage.setItem('token', jwt);
}

export function logout() {
	localStorage.removeItem('token');
}
export function getCurrentUser() {
	try {
		const jwt = localStorage.getItem('token');
		const user = jwtDecode(jwt);
		return user;
	} catch (error) {
		return null;
	}
}
export function loginWithjwt(jwt) {
	localStorage.setItem('token', jwt);
}
export function getJwt() {
	return localStorage.getItem('token');
}

export default {
	login,
	logout,
	getCurrentUser,
	loginWithjwt,
	getJwt,
};
