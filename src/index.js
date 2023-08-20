import Express from "express";
import { router as pages } from "../routes/pages.js";
import { router as sessions } from "../routes/session.js";
import { router as documents } from "../routes/documents.js";
import session from "express-session";
import cookieParser from "cookie-parser";

const app = Express();
const PORT = 3000;

app.disable("x-powered-by");
app.use(Express.json());
app.use(Express.urlencoded({ extended: true }));
app.use(
	session({
		secret: "secret",
		resave: false,
		saveUninitialized: false,
		cookie: { maxAge: 3600000 },
	})
);
app.use(cookieParser());
app.use("/pages", pages);
app.use("/session", sessions);
app.use("/documents", documents);
app.set("view engine", "ejs");

app.listen(PORT, () => {
	console.log(`Server running on port http://localhost:${PORT}`);
});
