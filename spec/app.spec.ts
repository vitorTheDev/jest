import { afterAll, beforeAll, describe, expect, test } from '@jest/globals';
import startApp from '../app/app';
import { request } from './supertest';
import './routes/user';

let express: ReturnType<typeof startApp> | null;

beforeAll(() => {
  express = startApp(3333);
})

afterAll(() => {
  express!.server.close();
  express = null;
})

describe('basic server tests', () => {
  test('The server should be able to start', async () => {
    const res = await request.get('/version');
    expect(res.status).toBe(200);
  });
})
