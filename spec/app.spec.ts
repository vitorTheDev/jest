import supertest from 'supertest';
import { expect, test } from '@jest/globals';

const request = supertest('http://localhost:3000');

test('The server should be able to start', async () => {
  const res = await request.get('/version');
  expect(res.status).toBe(200);
});