import express, { Express } from "express";
import userRouter from "./routes/user";

const startApp = (port = 3000) => {
  const app: Express = express();

  app.get('/version', (_req, res) => res.status(200).send('1.0.0'))
  app.use('/user', userRouter);

  const server = app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
  });

  return {app, server};
}

export default startApp;