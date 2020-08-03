# tersh-boilerplate

> Just another `React` and `Electron` boilerplate that works with `Typescript` and `SCSS`.

-   Hot reloading support for `Electron` and `React`
-   `electron-builder` support
-   Very small, except the inevitible number of node modules... derp
-   Includes basic support for `SCSS`
-   Decoupled `react` and `electron`

## Scripts

### `npm run dev`

Runs the project in developer mode.

### `npm run dev-nomainreload`

Runs the project in developer mode but disable hot reloading on main thread when files on `electron` folder is modified.

### `npm run build`

Builds electron to the `dist` folder.

## Q&A

### Is there anything else I should know?

Besides this README, comments that have been placed into the important bits in `electron/main.ts` and `src/index.tsx` are all you need, besides basic knowledge on `electron` and `react`.

### Can I use `ipcMain` and `ipcRenderer`?

Yes; the `src` directory is the renderer thread, and the `electron` directory is the main thread. An example may be seen at `electron/main.ts:40` and `src/index.tsx:10`.

### Can I use `ipcRenderer` or other electron renderer components inside a `react` class/component?

Yes, use [this](https://github.com/electron/electron/issues/9920) solution.

### Why no `React Developer Tools` extension?

`React Developer Tools` extension can be easily added by some packages or manually if the user wishes. It is not hard at all, but this package is designed to be as light and as error-free as possible. There are some [issues](https://github.com/electron/electron/issues/23662) regarding extensions and `electron ^v9.0.0`.

### Why does this package use `app.isPackaged` instead of a package like `electron-is-dev`?

Same as above. Some people may need development features on the packaged version, but it is very easy to add if it is required.

## Planned Features

-   Add `React Developer Tools` when the issue is solved
-   Replacing `const electron = window.require("electron");`

## Credits

While these haven't been used directly, this boilerplate is heavily inspired by:

-   [electron-react-boilerplate](https://github.com/electron-react-boilerplate/electron-react-boilerplate)
-   [react-typescript-electron-sample-with-create-react-app-and-electron-builder](https://github.com/yhirose/react-typescript-electron-sample-with-create-react-app-and-electron-builder)
-   [electron-typescript-react](https://github.com/diego3g/electron-typescript-react)
-   [electron-with-create-react-app](https://github.com/csepulv/electron-with-create-react-app)

## What the hell is `tersh`?

I'm very clever at naming things, you see.

```
t - typescript
e - electron
r - react
s - scss
h - hot reload
```
