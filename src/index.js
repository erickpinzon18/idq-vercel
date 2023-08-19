import Express from "express";
import { connectMongoDB } from "../utils/connection.js";
import { router as userRouter } from "../routes/user.js";
import { router as authRouter } from "../routes/auth.js";
import { PORT } from "../config/config.js";

connectMongoDB();

const app = Express();

app.disable("x-powered-by");
app.use(Express.json());
app.use(Express.urlencoded({ extended: true }));

app.use('api/', authRouter);
app.use('api/user', userRouter);

app.listen(PORT, () => {
  console.log(`Server running on port http://localhost:${PORT}`);
});
