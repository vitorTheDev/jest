import supertest from 'supertest';
import { expect, test } from '@jest/globals';

const request = supertest('http://localhost:3000');

test('GET /users should return BAD REQUEST', async () => {
  const res = await request.get('/user');
  expect(res.status).toBe(400);
});

test('GET /users should return OK', async () => {
  const res = await request.get('/user?page=1');
  expect(res.status).toBe(200);
});

test('GET /users should return 2 users', async () => {
  const res = await request.get('/user?page=1');
  expect(res.body.length).toBe(2);
});
