import { jest } from '@jest/globals';
import { faker } from '@faker-js/faker';

export const mockGetUsers = jest.fn(() => {
  const createUser = () => ({
    id: faker.string.uuid(),
    name: faker.person.fullName(),
  });
  return new Array(20).fill(null).map(_ => createUser());
});

const mock = jest.fn(() => ({
  getUsers: mockGetUsers,
}));

export default mock;