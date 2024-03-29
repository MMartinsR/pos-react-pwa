// db.js
import Dexie from 'dexie';

export const db = new Dexie('minhas-tarefas');

db.version(1).stores({
    user: '++uid, email, emailVerify',
    category: '++uid, title',
    tasks: '++uid, title, date, hour, category, description, synced'
});