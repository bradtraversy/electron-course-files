const { app, Menu, Tray } = require('electron')

class AppTray extends Tray {
  constructor(icon, mainWindow) {
    super(icon)

    this.setToolTip('SysTop')

    this.mainWindow = mainWindow

    this.on('click', this.onClick.bind(this))
    this.on('right-click', this.onRightClick.bind(this))
  }

  onClick() {
    if (this.mainWindow.isVisible() === true) {
      this.mainWindow.hide()
    } else {
      this.mainWindow.show()
    }
  }

  onRightClick() {
    const contextMenu = Menu.buildFromTemplate([
      {
        label: 'Quit',
        click: () => {
          app.isQuitting = true
          app.quit()
        },
      },
    ])

    this.popUpContextMenu(contextMenu)
  }
}

module.exports = AppTray
