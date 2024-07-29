import { Router } from "express";
import UserRepository from "../../models/user/user";

const router = Router();

router.get('/', async (req, res, next) => {
  if (!req.query.page) {
    res.status(400).send('Missing page parameter');
    return;
  }
  const users = await UserRepository.repo.getUsers();
  res.status(200).send(users);
});

export default router;