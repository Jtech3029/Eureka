import db from "./dbmngr";
export function getNames() {
    const sql = "SELECT * FROM APLang";
    let stmt = db.prepare(sql);
    let res = stmt.all();
    return res;
}