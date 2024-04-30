const sqlite = require("better-sqlite3")

export default function getDatabase(path: String) {
    return new sqlite(path);
}
