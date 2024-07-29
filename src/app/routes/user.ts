import { Router } from "express";

const router = Router();

router.get('/', (req, res, next) => {
  if (!req.query.page) {
    res.status(400).send('Missing page parameter');
    return;
  }
  res.status(200).send([
    { id: '1', name: 'Vitor' },
    { id: '2', name: 'Tester' },
  ])
});

export default router;