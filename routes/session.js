// Routes to handle session requests
import { Router } from "express";
import { loginFetch, registerFetch } from "../controllers/apiRequest.js";

export const router = Router();

// login
router.post("/login", async (req, res) => {
	// TODO: fetch to API to login
	try {
		const { user, password } = req.body;
		const response = await loginFetch(user, password);
        if (response.error) {
            req.session.loginError = response.error;
            return res.redirect("/pages/login");
        }
        // Create session
        req.session.user = response.data;
        res.redirect("/pages/panel/viewQR");
	} catch (error) {
        console.log(error);
        req.session.loginError = 'Error al iniciar sesión';
		res.redirect("/pages/login");
	}
});

// register
router.post("/register", async (req, res) => {
	// TODO: fetch to API to register
	try {
		const { user, password, name, email, img } = req.body;
		const response = await registerFetch(user, password, name, email, img);
		res.json(response);
	} catch (error) {
		res.json({
			error: error,
		});
	}
});

// register
router.post("/registerAdmin", async (req, res) => {
	// TODO: fetch to API to register
	try {
		const { user, password, name, email, img, type } = req.body;
        const idq = req.session.idq;
		const response = await registerFetch(user, password, name, email, img, idq, type);
		res.json(response);
	} catch (error) {
		res.json({
			error: error,
		});
	}
});

// logout
router.get("/logout", (req, res) => {
    // Destroy session
    try {
        req.session.destroy();
	    res.redirect("/pages/login");
    } catch (error) {
        console.log(error);
        res.redirect("/pages/login");
    }
});
