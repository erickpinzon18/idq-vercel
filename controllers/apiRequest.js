// JS to fetch data from API
import axios from "axios";
const server = "https://c229-200-188-14-2.ngrok-free.app/api/"; // https://idq-vercel.vercel.app/
// const server = "http://localhost:3000/api/"; // https://idq-vercel.vercel.app/
// Fetch data from API
/**
 * Function to fetch login data from API
 * @param {*} user
 * @param {*} password
 * @returns {*} rslt.data | error
 */
export async function loginFetch(user, password) {
	try {
		const response = await axios
			.post(server + "login", {
				user,
				password,
			})
			.catch((e) => {
				return {
					error: "Error en la consulta",
				};
			});
		// *** OK ***
		return response.data;
	} catch (error) {
		return {
			error: error.response.data.error,
		};
	}
}

/**
 * Function to fetch register data from API
 * @param {*} user
 * @param {*} password
 * @param {*} name
 * @param {*} email
 * @param {*} img
 * @returns {*} rslt.data | error
 */
export async function registerFetch(
	user,
	password,
	name,
	email,
	img,
	idq,
	type
) {
	try {
		let response;
		if (!idq) {
			response = await axios.post(server + "user/newUser", {
				user,
				password,
				name,
				email,
				img,
			});
		} else {
			response = await axios.post(server + "user/newUser", {
				user,
				password,
				name,
				email,
				img,
				idq,
				type,
			});
		}
		return response.data;
	} catch (error) {
		return {
			error: error.response.data.error,
		};
	}
}

/**
 * Function to get Docs from user
 * @param {*} idqOrigin
 * @param {*} idqDestiny
 * @param {*} password
 * @returns
 */
export async function getUserFetch(idqOrigin, idqDestiny, password) {
	try {
		const response = await axios.post(
			server + "users/getUser/" + idqDestiny,
			{
				idqOrigin,
				password,
			}
		);
		return response.data;
	} catch (error) {
		return {
			error: error.response.data.error,
		};
	}
}

/**
 * Function to get all users
 * @param {*} idqOrigin
 * @param {*} password
 * @returns
 */
export async function getUsersFetch(idqOrigin, password) {
	try {
		const response = await axios.post(server + "users/getUsers", {
			idqOrigin,
			password,
		});
		return response.data;
	} catch (error) {
		return {
			error: error.response.data.error,
		};
	}
}

/**
 * Function to register a new document from user
 * @param {*} docType
 * @param {*} file
 * @param {*} idq
 * @param {*} password
 * @returns
 */
export async function registerDocumentFetch(docType, file, idq, password) {
	try {
		console.log(docType, file, idq, password);
		const response = await axios.post(
			server + "user/newDoc/",
			{
				docType,
				file,
				idq,
				password,
			},
			{
				headers: {
					"Content-Type": "multipart/form-data",
				},
			}
		);
		return response.data;
	} catch (error) {
		return {
			error: error.response.data.error,
		};
	}
}

/**
 * Function to update a document from user
 * @param {*} docType
 * @param {*} file
 * @param {*} idq
 * @returns
 */
export async function updateDocumentFetch(docType, file, idq) {
	try {
		const response = await axios.post(server + "users/updateDocument/", {
			docType,
			file,
			idq,
		});
		return response.data;
	} catch (error) {
		return {
			error: error.response.data.error,
		};
	}
}
