import { express } from './jestGlobalSetup';

export default async () => {
  express?.server.close();
};