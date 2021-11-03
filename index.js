const {
    app,
    remote,
    BrowserWindow,
    BrowserView,
    screen,
    Menu,
    globalShortcut
} = require('electron');
const path = require("path");

const loadMainWindow = () => {
    const mainWindow = new BrowserWindow({
        width : 2000,
        height: 1000,
        titleBarStyle: 'hidden',
        transparent: true,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
        }
    });

    mainWindow.loadFile(path.join(__dirname, "index.html"));
    
}

app.on("ready", loadMainWindow);

app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        loadMainWindow();
    }
});