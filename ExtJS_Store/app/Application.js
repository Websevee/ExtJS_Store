Ext.define('MyApp.Application', {
    extend: 'Ext.app.Application',
    controllers: ['Books'],

    launch: function() {
        Ext.create('Ext.container.Viewport', {
            layout: 'fit',
            items: {
                xtype: 'booklist'
            }
        });
    }
    //mainView: 'MyApp.view.main.Main'
});