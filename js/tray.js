const { info } = require('console');
const { secureHeapUsed } = require('crypto');
const{app,Menu,Tray, shell, BrowserWindow,dialog,Notification} = require('electron');
const { normalize } = require('path');
Menu.setApplicationMenu(null);
var path = require('path');
const { kill } = require('process');
let tray = null;
app.whenReady().then(()=>{
    tray = new Tray(path.join(__dirname,'../icon.png'));
    const contextmenu = Menu.buildFromTemplate([
        {label:'关于编辑器',type:'normal',click:function(){
            dialog.showMessageBox({
                type:'info',
                title:'关于',
                message:'基于electron前端框架用HTML、CSS、JS写成的开源伪编程语言编辑器,致敬张浩杨博士和他的Jvav及jaba,本软件持续更新中，敬请期待',
                icon:path.join(__dirname,'../icon.png'),
            });
            shell.beep();
        }},
        {label:'检查更新',type:'normal',click:function(){
            let notification = new Notification({
                title:'检查更新',
                body:'点击前往官网下载最新版本',
                icon:path.join(__dirname,'../icon.png'),
            });
            notification.on('click',function(){
                shell.openExternal('https://jvav.urasoft.top/')
            });
            notification.show();
        }},
        {label:'官网站点',submenu:[
           {label:'编辑器官网',type:'normal',click:function(){shell.openExternal('https://jvav.urasoft.top/')}},
           {label:'官方文档',type:'normal',click:function(){shell.openExternal('https://jvav.urasoft.top/docs')}}, 
           {label:'github仓库',type:'normal',click:function(){shell.openExternal('https://github.com/OSHiDream/online-jvav-editor')}},
        ]},
        {label:'扩展市场',submenu:[
            {label:'获取新扩展',click:function(){shell.beep();}},
            {label:'开发新扩展',click:function(){shell.beep();}},
            {label:'管理扩展',click:function(){shell.beep();}},
        ]},
        {label:'重启编辑器',type:'normal',
        click:function(){
            app.quit();
            app.relaunch();
        }},
        {label:'退出编辑器',type:'normal',
        click:function(){
            app.quit();
        }},
    ]);
    tray.setToolTip('UraSoft Jvav Editor');
    tray.setContextMenu(contextmenu);
})
    

