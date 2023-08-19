// Routes to handle get render requests
import { Router } from "express";
import { getUsersFetch, getUserFetch } from "../controllers/apiRequest.js";

// TODO: Remove this import
import QRCode from "qrcode";

export const router = Router();

router.get("/", (req, res) => {
	res.render("index");
});

router.get("/login", (req, res) => {
	res.render("login");
});

router.get("/register", (req, res) => {
	res.render("register");
});

router.get("/admin", async (req, res) => {
	// TODO: add validation to check if user is admin
    try {
        const users = await getUsersFetch('', ''); // TODO: add idqOrigin and password from session
        res.render("admin", { users });
    } catch (error) {
        console.log(error);
        res.redirect("/login");
    }
});

// TODO: move to separate file
// router.get("/logout", (req, res) => {
// 	req.session.destroy();
// 	res.redirect("/");
// });

router.get("/panel/viewQR", async (req, res) => {
	// TODO: add validation to check if user is basic
	await QRCode.toDataURL("3249823094") // TODO: add idq from session
		.then((url) => {
			res.render("panel/viewQR", { url });
		})
		.catch((err) => {
			console.error(err);
            res.redirect("/login");
		});
});

router.get("/panel/viewDocs", async (req, res) => {
	// TODO: add validation to check if user is basic
	try {
        const user = await getUserFetch('', '', '') // TODO: add idqOrigin and password from session
        res.render("panel/viewDocs", { user });
    } catch (error) {
        console.log(error);
        res.redirect("/login");
    }
});

router.get("/panel/updateDocs", (req, res) => {
	// TODO: add validation to check if user is basic
	res.render("panel/updateDocs");
});
