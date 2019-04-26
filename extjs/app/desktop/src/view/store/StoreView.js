Ext.define('Extjs.view.store.StoreView', {
    extend: 'Ext.grid.Grid',
    xtype: 'storeview',
    store: 'Extjs.view.store.StoreViewStore',
    requires: [
        'Ext.grid.column.Column',
        'Ext.grid.cell.*'
    ],
    controller: 'storeviewcontroller',

    store: {
        type: 'Store',
        autoLoad: true,
    },

    
    defaults: {
        height: 54
    },

    columns: 
    [
        
        {
            locked: 'left',
            width: 70,

            cell: {
                tools: {
                    approve: {
                        iconCls: 'x-fa fa-check green',
                        handler: 'onBuy'
                    },
                    decline: {
                        iconCls: 'x-fa fa-ban red',
                        handler: 'onDecline',
                        weight: 1
                    }
                }
            }
        },
        {
            text: 'ID',
            dataIndex: 'ID',
            flex: 0.2
        },
        {
            text: 'Code',
            dataIndex: 'Code',
            flex: 1
        },
        {
            text: 'Name',
            dataIndex: 'Name',
            flex: 1
        },
        {
            text: 'Price',
            dataIndex: 'Price',
            flex: 1
        },
        {
            text: 'Category',
            dataIndex: 'Category',
            flex: 1
        }
    ]
})