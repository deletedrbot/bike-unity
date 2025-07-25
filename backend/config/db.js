const sqlite3 = require('sqlite3').verbose();
const path = require('path');

let db;

function initDb() {
  const dbPath = process.env.DB_PATH || path.join(__dirname, '../users.db');
  db = new sqlite3.Database(dbPath, (err) => {
    if (err) console.error(err.message);
    else {
      db.run(`CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        email TEXT UNIQUE,
        password TEXT,
        name TEXT,
        role TEXT DEFAULT 'user'
      )`);
    }
  });
}

function getDb() {
  return db;
}

module.exports = { initDb, getDb }; 