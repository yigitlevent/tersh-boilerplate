import React from "react";
import ReactDOM from "react-dom";

import "./index.scss";
import App from "./App";

import * as serviceWorker from "./serviceWorker";

// Example ipcRenderer/ipcMain use. 
// This is very similar to standard electron, with only big difference of how you import the module. 
const electron = window.require("electron");
electron.ipcRenderer.on("test:bar", (e: any, m: any) => { console.log(m); });

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
