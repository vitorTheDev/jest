export let db;

export const initDatabase = async () => {
  console.log('db init');
  db = true;
}

export const closeDatabase = async () => {
  console.log('db close');
  db = false;
}