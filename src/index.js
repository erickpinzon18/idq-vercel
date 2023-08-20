import Express from "express";
import { connectMongoDB } from "../utils/connection.js";
import { router as userRouter } from "../routes/user.js";
import { router as authRouter } from "../routes/auth.js";
import { PORT } from "../config/constants.js";
import session from "express-session";
import cookieParser from "cookie-parser";
import { router as pages } from "../routes/pages.js";
import { router as sessions } from "../routes/session.js";
import { router as documents } from "../routes/documents.js";

connectMongoDB();

const app = Express();

app.disable("x-powered-by");
app.use(Express.json());
app.use(Express.urlencoded({ extended: true }));


app.use(session({
    secret: "secret",
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: 3600000 },
})
);
app.use(cookieParser());
app.use('/api/', authRouter);
app.use('/api/user', userRouter);
app.use("/pages", pages);
app.use("/session", sessions);
app.use("/documents", documents);
app.set("view engine", "ejs");

app.use((req, res) => {
    res.json('404');
});

app.listen(PORT, () => {
	console.log(`Server running on port http://localhost:${PORT}`);
});
