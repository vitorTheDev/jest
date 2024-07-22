import { UUIDRegex } from "../utils/regex";
import UserRepository, { mockGetUser } from "../models/__mocks__/user";
import { beforeEach, expect, jest, test } from '@jest/globals';

jest.mock('./user.ts');

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
  repo.getUser();
  expect(mockGetUser).toBeCalledTimes(1);
});

test('Should create user and match uuid regex', async () => {
  const repo = new UserRepository();
  const user = repo.getUser();
  expect(user.id).toMatch(UUIDRegex);
});

test('Should create user and have a string name', async () => {
  const repo = new UserRepository();
  const user = repo.getUser();
  expect(user.name).toEqual(expect.any(String));
});