import React from "react";

import logo from "./logo.svg";
import "./App.scss";

// These are just for the example page.
const shell = window.require("electron").shell;
function link(e: React.MouseEvent): void {
	e.preventDefault();
	shell.openExternal((e.target as HTMLAnchorElement)?.href);
}

function App(): JSX.Element {
	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>Edit and save <code>src/App.tsx</code> to reload React (renderer).</p>
				<p>Edit and save <code>electron/main.ts</code> to reload Electron (main).</p>
				<p>Hotkeys are listed on the top bar menus.</p>
				<a className="App-link" href="https://typescriptlang.org/" target="_blank" rel="noopener noreferrer" onClick={(e) => link(e)}>Learn Typescript</a>
				<a className="App-link" href="https://electronjs.org" target="_blank" rel="noopener noreferrer" onClick={(e) => link(e)}>Learn Electron</a>
				<a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer" onClick={(e) => link(e)}>Learn React</a>
				<a className="App-link" href="https://sass-lang.com" target="_blank" rel="noopener noreferrer" onClick={(e) => link(e)}>Learn SCSS</a>
			</header>
		</div>
	);
};

export default App;
