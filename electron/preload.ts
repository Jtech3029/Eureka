import { ipcRenderer, contextBridge } from "electron";
interface Question {
  title: String;
  supplementaryMaterial: String;
  question: String;
  answerOne: String;
  answerTwo: String;
  answerThree: String;
  answerFour: String;
  answerFive: String;
  correctAnswer: String;
}
// --------- Expose some API to the Renderer process ---------
contextBridge.exposeInMainWorld("ipcRenderer", {
  on(...args: Parameters<typeof ipcRenderer.on>) {
    const [channel, listener] = args;
    return ipcRenderer.on(channel, (event, ...args) =>
      listener(event, ...args)
    );
  },
  off(...args: Parameters<typeof ipcRenderer.off>) {
    const [channel, ...omit] = args;
    return ipcRenderer.off(channel, ...omit);
  },
  send(...args: Parameters<typeof ipcRenderer.send>) {
    const [channel, ...omit] = args;
    return ipcRenderer.send(channel, ...omit);
  },
  invoke(...args: Parameters<typeof ipcRenderer.invoke>) {
    const [channel, ...omit] = args;
    return ipcRenderer.invoke(channel, ...omit);
  },

  // You can expose other APTs you need here.
  // ...
});

contextBridge.exposeInMainWorld("api", {
  onUpdate: () => ipcRenderer.invoke("onUpdate"),
  getStudentTest: (test: String) => ipcRenderer.invoke("getStudentTest", test),
  getStudentTests: () => ipcRenderer.invoke("getStudentTests"),
  saveTest: (questions: Question[], studentAnswers: String[], testType: String) =>
    ipcRenderer.send("save-test", {
      questions: questions,
      studentAnswers: studentAnswers,
      testType: testType
    }),
});
