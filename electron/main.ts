import { app, BrowserWindow, ipcMain, globalShortcut } from "electron";
import path from "node:path";
import { getNames } from "../models/testmngr";
import getDatabase from "../models/dbmngr";
import saveStudentTest from "../models/saveStudentTest";
// The built directory structure
//
// ├─┬─┬ dist
// │ │ └── index.html
// │ │
// │ ├─┬ dist-electron
// │ │ ├── main.js
// │ │ └── preload.js
// │
process.env.DIST = path.join(__dirname, "../dist");
process.env.VITE_PUBLIC = app.isPackaged
  ? process.env.DIST
  : path.join(process.env.DIST, "../public");

const dbPath = path.join(app.getAppPath(), "models", "test-questions.db")
let win: BrowserWindow | null;
// 🚧 Use ['ENV_NAME'] avoid vite:define plugin - Vite@2.x
const VITE_DEV_SERVER_URL = process.env["VITE_DEV_SERVER_URL"];

function createWindow() {
  win = new BrowserWindow({
    icon: path.join(process.env.VITE_PUBLIC, "electron-vite.svg"),
    title: "Eureka",
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
      devTools: true,
    },
  });

  win.setMenuBarVisibility(false);
  // Test active push message to Renderer-process.
  win.webContents.on("did-finish-load", () => {
    win?.webContents.send("main-process-message", new Date().toLocaleString());
  });
  if (VITE_DEV_SERVER_URL) {
    win.loadURL(VITE_DEV_SERVER_URL);
  } else {
    // win.loadFile('dist/index.html')
    win.loadFile(path.join(process.env.DIST, "index.html"));
  }
}

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
    win = null;
  }
});

// app.on('browser-window-focus', function () {
//   globalShortcut.register("CommandOrControl+R", () => {
//       console.log("CommandOrControl+R is pressed: Shortcut Disabled");
//   });
//   globalShortcut.register("F5", () => {
//       console.log("F5 is pressed: Shortcut Disabled");
//   });
// });

// app.on('browser-window-blur', function () {
//   globalShortcut.unregister('CommandOrControl+R');
//   globalShortcut.unregister('F5');
// });

app.on("activate", () => {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

function getData() {
  return getNames(dbPath);
}

function handleSaveTest(event: any, testInfo: any) {
  const db = getDatabase(path.join(app.getPath("userData"), "student-test.db"));
  saveStudentTest(db, testInfo.testType, testInfo.questions, testInfo.studentAnswers) 
}

function handleGetStudentTest(event: any, tableName: String) {
  const db = getDatabase(path.join(app.getPath("userData"), "student-test.db"));
  let stmt = db.prepare("SELECT * FROM " + tableName + ";")
  return stmt.all();
}

function handleGetStudentTests() {
  const db = getDatabase(path.join(app.getPath("userData"), "student-test.db"));
  let stmt = db.prepare("SELECT name FROM sqlite_master where type='table';")
  return stmt.all();
}

app.whenReady().then(() => {
  ipcMain.on('save-test', handleSaveTest)
  ipcMain.handle("onUpdate", getData);
  ipcMain.handle("getStudentTest", handleGetStudentTest)
  ipcMain.handle("getStudentTests", handleGetStudentTests)

  createWindow();
});
