// main.js

// Modules to control application life and create native browser window
const { app, BrowserWindow } = require('electron')
if (require('electron-squirrel-startup')) return app.quit();

const path = require('path');
const http = require('http');
const fs = require('fs');

const port = 1331;

var staticBasePath = './public';

var cache = {};

var staticServe = function (req, res) {
    var resolvedBase = path.resolve(staticBasePath);
    var safeSuffix = path.normalize(req.url).replace(/^(\.\.[\/\\])+/, '');
    var fileLoc = path.join(resolvedBase, safeSuffix);

    if (fileLoc.endsWith('/')) fileLoc += 'index.html';

    // Check the cache first...
    if (cache[fileLoc] !== undefined) {
        res.statusCode = 200;

        res.write(cache[fileLoc]);
        return res.end();
    }

    // ...otherwise load the file
    fs.readFile(fileLoc, function (err, data) {
        if (err) {
            res.writeHead(404, 'Not Found');
            res.write('404: File Not Found!');
            return res.end();
        }

        // Save to the cache
        cache[fileLoc] = data;

        res.statusCode = 200;

        res.write(data);
        return res.end();
    });
};

var httpServer = http.createServer(staticServe);

// START DARI SINI

function createWindow() {
    // Create the browser window.
    const mainWindow = new BrowserWindow({
        //width: 800,
        //height: 600,
        simpleFullscreen: true,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js')
        }
    })

    httpServer.listen(port);
    console.log('listening :', port);

    // and load the index.html of the app.
    //mainWindow.loadFile('index.html')
    mainWindow.loadURL("http://localhost:"+port+"/index.html");

    // Open the DevTools.
    // mainWindow.webContents.openDevTools()
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
    createWindow()

    app.on('activate', function () {
        // On macOS it's common to re-create a window in the app when the
        // dock icon is clicked and there are no other windows open.
        if (BrowserWindow.getAllWindows().length === 0) createWindow()
    })
})

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') app.quit()
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
