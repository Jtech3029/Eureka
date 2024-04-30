import getDatabase from "./dbmngr";

export function getNames(path: String) {
    const db = getDatabase(path);
    const sql = "SELECT * FROM APLang";
    let stmt = db.prepare(sql);
    let res = stmt.all();
    return res;
}