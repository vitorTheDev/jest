import supertest from 'supertest';
import { afterAll, beforeAll, expect, test } from '@jest/globals';
import startApp from '../app/app';

const request = supertest('http://localhost:3333');
let express;

beforeAll(async () => {
  express = await startApp(3333);
});

afterAll(() =>{
  express.server.close();
  express = null;
});

test('The server should be able to start', async () => {
  const res = await request.get('/version');
  expect(res.status).toBe(200);
});