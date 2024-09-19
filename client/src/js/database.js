import { openDB } from 'idb';

const initdb = async () => {
  try {
    const db = await openDB('jate', 1, {
      upgrade(db) {
        if (!db.objectStoreNames.contains('jate')) {
          db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
          console.log('jate database created');
        }
      },
    });

    // Log the available object stores in the database
    console.log('Available object stores:', db.objectStoreNames);
  } catch (error) {
    console.error('Failed to initialize database', error);
  }
};

// TODO: Add logic to a method that accepts some content and adds it to the database
export const putDb = async (content) => {
  try {
    console.log('PUT to the database');
    const jateDb = await openDB('jate', 1);
    const tx = jateDb.transaction('jate', 'readwrite');
    const store = tx.objectStore('jate');
   // Ensure content is saved as an object
   const request = store.put({ id: 1, value: JSON.stringify(content) });
   const result = await request;
   console.log('Data saved to the database', result);
 } catch (error) {
   console.error('PUT failed', error);
 }
};

// TODO: Add logic for a method that gets all the content from the database
export const getDb = async () => {
  try {
    console.log('GET all from the database');
    const jateDb = await openDB('jate', 1);
    const tx = jateDb.transaction('jate', 'readonly');
    const store = tx.objectStore('jate');
    const request = store.getAll();
    const result = await request;
    console.log('result.value', result);
    return result.map(item => JSON.parse(item.value));
  } catch (error) {
    console.error('GET failed', error);
  }
};

initdb();