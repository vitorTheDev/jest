import { closeDatabase, db, initDatabase } from './database';
import { functions } from './functions';
import { afterAll, beforeAll, describe, expect, test } from '@jest/globals';

beforeAll(initDatabase);
afterAll(closeDatabase);

describe('add tests', () => {
  test('2 + 2 should be 4', () => {
    expect(db).toBeDefined();
    expect(functions.add(2,2)).toBe(4);
  });

  test('2 + 2 should not be 5', () => {
    expect(functions.add(2,2)).not.toBe(5);
  });
})


test('2 - 2 should be 0', () => {
  expect(db).toBeDefined();
  expect(functions.subtract(2,2)).toBe(0);
});

test('to be null', () => {
  expect(functions.null()).toBeNull();
});


test('user to be vitor', () => {
  expect(functions.createUser()).toEqual({
    name: 'Vitor', lastName: 'Barbieri',
  });
});

test('user to contain vitor', () => {
  expect(functions.users()).toContain('vitor');
});

test('fetch user and test name', () => {
  // expect.assertions(1);
  return functions.fetchUser()
    .then(data => expect(data.name).toBe('Leanne Graham'))
});

test('fetch user and test name using async await', async () => {
  const data = await functions.fetchUser();
  expect(data.name).toBe('Leanne Graham');
});
