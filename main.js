const { app, BrowserWindow } = require('electron');

function createWindow() {
    // Создаем окно браузера
    const win = new BrowserWindow({
        width: 800,
        height: 600,
    });
    Menu.setApplicationMenu(null);
    // Загружаем веб-приложение с локального сервера на localhost
        win.loadURL('http://localhost:80'); // Замените "ваш_порт" на порт, на котором работает ваш Nginx

    // Возможно, вам понадобится настроить события для обработки закрытия окна и активации

    // Обработка закрытия окна
    win.on('closed', () => {
        app.quit();
    });
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow();
    }
});
