import supertest from 'supertest';
import { afterAll, beforeAll, expect, test } from '@jest/globals';
import startApp from '../../app/app';

const request = supertest('http://localhost:3333');
let express;

beforeAll(async () => {
  express = await startApp(3333);
});

afterAll(() =>{
  express.server.close();
  express = null;
});

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
