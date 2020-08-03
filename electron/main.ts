import { app, BrowserWindow } from "electron";

var mainWindow: BrowserWindow | null = null;

// TODO: Comment
app.on("ready", () => {
	mainWindow = createWindow(1280, 720, false);

	// TODO: Comment
	if (!app.isPackaged) {
		// TODO: Comment
		try { require("electron-reloader")(module, { "watchRenderer": false }); } catch (_) { }

		// TODO: Comment
		mainWindow.webContents.openDevTools();
	}
});

// TODO: Comment
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

	// TODO: Comment
	mw.loadURL((!app.isPackaged) ? "http://localhost:3000/index.html" : `file://${__dirname}/../index.html`);

	// TODO: Comment
	mw.on("closed", () => {
		app.quit();
	});

	// TODO: Comment
	mw.once("ready-to-show", () => {
		mw.show();

		// TODO: Comment
		// TEST/REMOVE: Sending data to ipcRenderer
		mw.webContents.send("test:bar", "bar");
	});

	return mw;
}