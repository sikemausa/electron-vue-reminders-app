'use strict';
const MenuBar = require('menubar');
const electron = require('electron');
const path = require('path')
const app = electron.app
const BrowserWindow = electron.BrowserWindow

const menubar = new MenuBar({
  height: 500,
  width: 350,
  minHeight: 500,
  minWidth: 350,
  maxHeight: 500,
  maxWidth: 350,
  preloadWindow: true,
  alwaysOnTop: true,
});

let config = {}

if (process.env.NODE_ENV === 'development') {
  config = require('../config')
  config.url = `http://localhost:${config.port}`
} else {
  config.devtron = false
  config.url = `file://${__dirname}/dist/index.html`
}

menubar.on('after-create-window', () => {
  menubar.window.loadURL(config.url);
});
