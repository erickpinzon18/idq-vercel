// Routes to handle get render requests
import { Router } from "express";
import { getUsersFetch, getUserFetch } from "../controllers/apiRequest.js";
import QRCode from "qrcode";

export const router = Router();

router.get("/", (req, res) => {
	res.render("index");
});

router.get("/login", (req, res) => {
	try {
		if (req.session.user) return res.redirect("/pages/panel/viewQR");
		let error;
		if (req.session.loginError) {
			error = req.session.loginError;
			req.session.destroy();
		}
		res.render("login", { error });
	} catch (error) {
		res.render("login", { error: "Error al iniciar sesion" });
	}
});

router.get("/register", (req, res) => {
	res.render("register");
});

router.get("/admin/viewUser", (req, res) => {
	try {
		if (!req.session.user) return res.redirect("/login");
		if (req.session.user.type !== "admin")
			return res.redirect("/pages/panel/viewQR");
		res.render("/admin/requestPass", { to: "viewUsers" });
	} catch (error) {
		res.redirect("/login");
	}
});

router.post("/admin/viewUsers", async (req, res) => {
	try {
		if (!req.session.user) return res.redirect("/login");
		if (req.session.user.type !== "admin")
			return res.redirect("/pages/panel/viewQR");
		if (!req.body.password) return res.redirect("/admin/requestPass");
		const users = await getUsersFetch(req.session.idq, req.body.password);
		console.log(users);
		//res.render("admin/viewUsers", { users });
		res.json(users);
	} catch (error) {
		console.log(error);
		req.session.loginError = "Error en el servidor";
		res.redirect("/login");
	}
});

router.get("/admin/addAdmin", (req, res) => {
	try {
		if (!req.session.user) return res.redirect("/login");
		if (req.session.user.type !== "admin")
			return res.redirect("/pages/panel/viewQR");
		res.render("admin/addAdmin");
	} catch (error) {
		req.session.loginError = "Error en el servidor";
		res.redirect("/login");
	}
});

router.get("/panel/viewQR", async (req, res) => {
	// TODO: add validation to check if user is basic
	try {
        if (!req.session.user) return res.redirect('../../pages/login')
		await QRCode.toDataURL(req.session.user.idq) // TODO: add idq from session
			.then((url) => {
				res.render("panel/viewQR", { url, name: req.session.user.name });
			})
			.catch((err) => {
				console.error(err);
				req.session.loginError = "Error en el servidor";
				res.redirect("/login");
			});
	} catch (error) {
		console.log(error);
		req.session.loginError = "Error en el servidor";
		res.redirect("pages/login");
	}
});

router.get("/panel/viewDocs", async (req, res) => {
	// TODO: add validation to check if user is basic
	try {
        if (!req.session.user) return res.redirect('../../pages/login')
		const user = await getUserFetch("", "", ""); // TODO: add idqOrigin and password from session
		res.render("panel/viewDocs", { user });
	} catch (error) {
		console.log(error);
		req.session.loginError = "Error en el servidor";
		res.redirect("/login");
	}
});

router.get("/panel/updateDocs", (req, res) => {
    try {
        if (!req.session.user) return res.redirect('../../pages/login')
	    res.render("panel/updateDocs");
    } catch (error) {
        console.log(error)
        res.redirect('pages/login')
    }
});
