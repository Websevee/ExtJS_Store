Ext.define('MyApp.view.main.Main', {
    extend: 'Ext.tab.Panel',
    alias: 'widget.main',

    title: 'Home',

    initComponent: function() {
        this.title = 'Home',
        this.html = '<h1 class="main-banner">Hello World!</h1>',
        this.items = [{
            title: 'Home',
            html: '<h1 class="main-banner">Hello World!</h1>',
            items: [{
                xtype: 'button',
                text: 'Go'
            }]
        }, {
            title: 'Notifications'
        }, {
            title: 'Settings'
        }];
         
        this.callParent(arguments);
    }
});