'use strict'
const MenuBar = require('menubar');
const electron = require('electron')
const path = require('path')
const app = electron.app
const BrowserWindow = electron.BrowserWindow

const menubar = new MenuBar({
  height: 500,
  preloadWindow: true,
  width: 350,
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
