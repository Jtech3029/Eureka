const sqlite = require("better-sqlite3")
const db = new sqlite("./test-questions.db");

export default db;