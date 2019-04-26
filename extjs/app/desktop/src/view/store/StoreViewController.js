Ext.define('Extjs.view.store.StoreViewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.storeviewcontroller',

    onBuy: function (grid, info) {
        var dialog = Ext.create({
            xtype: 'dialog',
            title: 'Dialog',
       
            maximizable: true,
            width: 500,

            items: [{
                xtype: 'textfield',
                allowBlank: false,
                required: true,
                label: 'User ID',
                name: 'user',
                placeholder: 'user id'
            }, {
                xtype: 'passwordfield',
                allowBlank: false,
                required: true,
                label: 'Password',
                name: 'pass',
                placeholder: 'password'
            }, {
                xtype: 'checkbox',
                boxLabel: 'Remember me',
                name: 'remember'
            }],
       
            buttons: {
                ok: function () {  // standard button (see below)
                    dialog.destroy();
                }
            }
        });
       
        dialog.show();
    },

    onApprove: function (grid, info) {
        Ext.Msg.alert('Approve', info.record.get('name'));
    },

    onDecline: function (grid, info) {  
        var proxy = new Ext.data.proxy.Ajax({
            url: 'http://localhost:62572/Product/DeleteItem'
        });

        var operation = proxy.createOperation('read', {
            id: info.record.get('ID')
        });

        proxy.destroy(operation);
    },
    //http://localhost:62572/Product/DeleteItem
})