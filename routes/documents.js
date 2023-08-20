import { Router } from "express";
import { registerDocumentFetch, updateDocumentFetch } from "../controllers/apiRequest.js";

export const router = Router();

router.post("/register", async (req, res) => {
    try {
        const { docType, file, password } = req.body;
		if (!req.session.user) return res.redirect("/pages/login");
		const idq = req.session.user.idq;
        const response = await registerDocumentFetch(docType, file, idq, password);
        res.json(response);
    } catch (error) {
        console.log(error);
        res.redirect("/pages/panel/updateDocs");
    }
});

router.post("/update", async (req, res) => {
    try {
        const { docType, file } = req.body;
        const idq = req.session.user.idq;
        const response = await updateDocumentFetch(docType, file, idq);
        res.json(response);    
    } catch (error) {
        console.log(error);
        res.redirect("/pages/panel/updateDocs");
    }
});