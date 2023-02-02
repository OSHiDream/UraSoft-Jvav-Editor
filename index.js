const { app, BrowserWindow,dialog } = require('electron');
app.setAppUserModelId('UraSoft Jvav Editor');
const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    minWidth:800,
    minHeight:600,
    icon:'icon.png',
  });
  require('./js/tray.js');
  win.loadFile('index.html');
};

app.whenReady().then(() => {
  createWindow();
  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});