import startApp from "../src/app/app";

export let express: ReturnType<typeof startApp> | null;

export default async () => {
  express = startApp(3333);
};
