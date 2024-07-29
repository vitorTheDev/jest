import { UUIDRegex } from "../src/utils/regex";
import UserRepository, { mockGetUsers } from "../src/models/__mocks__/user.mock";
import { beforeEach, expect, jest, test } from '@jest/globals';

jest.mock('../src/models/user/user.ts', () => new UserRepository());

beforeEach(() => {
  UserRepository.mockClear();
});

test('Should be able to instantiate the repository', async () => {
  const repo = new UserRepository();
  expect(repo).toBeTruthy();
});

test('Should call constructor 1 times', async () => {
  new UserRepository();
  expect(UserRepository).toBeCalledTimes(1);
});

test('Should call create user 1 times', async () => {
  const repo = new UserRepository();
  repo.getUsers();
  expect(mockGetUsers).toBeCalledTimes(1);
});

test('Should create user and match uuid regex', async () => {
  const repo = new UserRepository();
  const users = repo.getUsers();
  expect(users?.shift()?.id).toMatch(UUIDRegex);
});

test('Should create user and have a string name', async () => {
  const repo = new UserRepository();
  const users = repo.getUsers();
  expect(users?.shift()?.name).toEqual(expect.any(String));
});