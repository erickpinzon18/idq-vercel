import { config } from "../config/config.js";

import Express from "express";
import { connectMongoDB } from "../utils/connection.js";
import { router as userRouter } from "../routes/user.js";
import { router as authRouter } from "../routes/auth.js";

await config();
connectMongoDB();

const app = Express();

app.disable("x-powered-by");
app.use(Express.json());
app.use(Express.urlencoded({ extended: true }));

app.use('api/', authRouter);
app.use('api/user', userRouter);

const { PORT } = process.env;

app.listen(PORT, () => {
  console.log(`Server running on port http://localhost:${PORT}`);
});
