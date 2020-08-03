import { app, BrowserWindow } from "electron";

var mainWindow: BrowserWindow | null = null;

app.on("ready", () => {
	mainWindow = createWindow(1280, 720, false);

	// Check if the application is packaged.
	if (!app.isPackaged) {
		// Only enable hot reloading on the main thread if the application is not packaged.
		try { require("electron-reloader")(module, { "watchRenderer": false }); } catch (_) { }

		// You may delete this to stop the app from opening the Dev Tools.
		mainWindow.webContents.openDevTools();
	}
});

function createWindow(w: number, h: number, fs: boolean): BrowserWindow {
	let mw = new BrowserWindow({
		width: w,
		height: h,
		fullscreen: fs,
		frame: true,
		backgroundColor: "#000000",
		show: false,
		webPreferences: {
			nodeIntegration: true,
		}
	});

	// How you load the react app depends on if you have a package or not.
	mw.loadURL((!app.isPackaged) ? "http://localhost:3000/index.html" : `file://${__dirname}/../index.html`);

	mw.on("closed", () => {
		app.quit();
	});

	mw.once("ready-to-show", () => {
		mw.show();

		// Example ipcRenderer/ipcMain use. 
		mw.webContents.send("test:bar", "bar");
	});

	return mw;
}