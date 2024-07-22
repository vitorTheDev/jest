import express, { Express } from "express";
import userRouter from "./routes/user";

const startApp = async () => {
  const app: Express = express();
  const port = 3000;

  app.get('/version', (_req, res) => res.status(200).send('1.0.0'))
  app.use('/user', userRouter);

  app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
  });
}

export default startApp;