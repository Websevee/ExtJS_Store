Ext.define('Front.view.Viewport', {
    extend: 'Ext.container.Viewport',
    layout: 'fit',
    
    requires: [
        //'Front.view.Home',
        //'Front.view.Store',
        //'Front.view.Cart',
        //'Front.view.Admin',
    ],
    
    initComponent: function() {
        this.items = {
            dockedItems: [{
                dock: 'top',
                xtype: 'tabpanel',
                //height: 80,
                items: [{
                    title: 'Home'
                }, {
                    xtype: 'store',
                }, {
                    title: 'Cart',
                    html: 'Panda<br>Internet Radio'
                }, {
                    title: 'Admin',
                    html: 'Panda<br>Internet Radio'
                }, {
                    //title: 'New',
                    xtype: 'gridpanel',
                    title: 'New',
                    columns: [{
                        text: 'LOL',
                        width: 50,

                    }],
                    height: 200,
                    width: 400
                }

            ]
            }]
        };
        
        this.callParent();
    }
});