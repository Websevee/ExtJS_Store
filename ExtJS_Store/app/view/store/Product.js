Ext.define('Front.view.store.Product', {
    extend: 'Ext.window.Window',
    xtype: 'product',
 
    title: '{Name}',
    layout: 'fit',
    autoShow: true,
    //closable: false,
 
    initComponent: function() {
        this.items = [{
                xtype: 'form',
                items: [
                    {
                        xtype: 'textfield',
                        name : 'Code',
                        fieldLabel: 'Code'
                    },{
                        xtype: 'textfield',
                        name : 'Name',
                        fieldLabel: 'Название'
                    },{
                        xtype: 'textfield',
                        name : 'Price',
                        fieldLabel: 'Price'
                    },{
                        xtype: 'textfield',
                        name : 'Category',
                        fieldLabel: 'Category'
                    },
                ]
            }];
 
        this.callParent(arguments);
    }
});