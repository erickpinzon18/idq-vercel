// JS to fetch data from API
import axios from "axios";
const server = "https://idq-vercel.vercel.app/api/"; // https://idq-vercel.vercel.app/
// Fetch data from API
/**
 * Function to fetch login data from API
 * @param {*} user
 * @param {*} password
 * @returns {*} rslt.data | error
 */
export async function loginFetch(user, password) {
	try {
		console.log(user, password, server + "login");
		const response = await axios.post(server + "login", {
			user,
			password,
		});

		if (!response.ok) {
			console.log(response.error);
			return {
				error: response.error,
			};
		}
		// *** OK ***
		console.log(response.data);
		return response.data;
	} catch (error) {
		return {
			error: error,
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
export async function registerFetch(user, password, name, email, img) {
	try {
		const response = await axios.post(server + "register", {
            user,
            password,
            name,
            email,
            img,
        });
        if (!response.ok) {
            console.log(response.error);
            return {
                error: response.error,
            };
        }
        // *** OK ***
        console.log(response.data);
        return response.data;
	} catch (error) {
		return {
			error: error,
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
		const response = await axios.post(server + "users/getUser/" + idqDestiny, {
            idqOrigin,
            password,
        });
        if (!response.ok) {
            console.log(response.error);
            return {
                error: response.error,
            };
        }
        // *** OK ***
        console.log(response.data);
        return response.data;
	} catch (error) {
		return {
			error: error,
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
        if (!response.ok) {
            console.log(response.error);
            return {
                error: response.error,
            };
        }
        // *** OK ***
        console.log(response.data);
        return response.data;
    } catch (error) {
        return {
            error: error,
        };
    }
}
