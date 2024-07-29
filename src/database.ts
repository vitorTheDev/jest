export let db;

export const initDatabase = async () => {
  console.log('db init');
  db = {};
}

export const closeDatabase = async () => {
  console.log('db close');
  db = undefined;
}