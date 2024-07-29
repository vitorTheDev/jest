import { jest } from '@jest/globals';
import { faker } from '@faker-js/faker';

export const mockGetUser = jest.fn(() => {
  const user = {
    id: faker.string.uuid(),
    name: faker.person.fullName(),
  };
  return user;
});

const mock = jest.fn(() => ({
  getUser: mockGetUser,
}));

export default mock;