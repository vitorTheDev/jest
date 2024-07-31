import { describe, expect, test } from '@jest/globals';
import { request } from './supertest';

describe('basic server tests', () => {
  test('The server should be able to serve version', async () => {
    const res = await request.get('/version');
    expect(res.status).toBe(200);
  });
})
