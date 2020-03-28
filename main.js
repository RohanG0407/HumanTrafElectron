const electron = require("electron");
const url = require("url");
const path = require("path");
const firebase = require("firebase/app");
require("firebase/auth");

const {app, BrowserWindow, Menu} = electron;

let mainWindow;
let firebaseConfig;
process.env.NODE_ENV = 'development';

app.on('ready', function () {

    mainWindow = new BrowserWindow({
        webPreferences: {
            nodeIntegration: true
        }
    });

    mainWindow.loadURL(url.format({
        pathname: path.join(__dirname, 'userAuth.html'),
        protocol: 'file:',
        slashes: true
    }));

    mainWindow.on('closed', function () {
        app.quit();
    });

    // Set main menu bar
    const mainMenu = Menu.buildFromTemplate(mainMenuTemplate);
    Menu.setApplicationMenu(mainMenu);
    // End app.on ready
});

const mainMenuTemplate = [
    {
        label: "File",
        submenu: [
            {
                label: "Quit",
                click() {
                    app.quit();
                }
            }

        ]
    },
    {
        label: "Dev Tools",

    }
];

/*if(process.platform == 'darwin') {
    mainMenuTemplate.unshift({});
}*/

if(process.env.NODE_ENV !== 'production') {
    mainMenuTemplate.push(
        {
        label:"Dev Tools",
            submenu: [
                {
                    label: "Toggle Dev Tools",
                    click(item, focusedWindow) {
                        focusedWindow.toggleDevTools();
                    }
                }
            ]

    })
};


