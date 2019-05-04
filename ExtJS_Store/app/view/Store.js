Ext.define('Front.view.Store', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.store',
    store: 'Products',
    
    title: 'My Магазин',

    dockedItems: [{
        xtype: 'toolbar',
        dock: 'bottom',

        items: [
            {
                xtype: 'button',
                text: 'Add',
                action: 'onAdd'
            }
        ]
    }],

    columns: [
        {
            dataIndex: 'ID',
            text: 'ID'  
        },
        {
            dataIndex: 'Code',
            text: 'Code'  
        },
        {
            dataIndex: 'Name',
            text: 'Name'  
        },
        {
            dataIndex: 'Price',
            text: 'Price'  
        },
        {
            dataIndex: 'Category',
            text: 'Category'  
        }
    ]
});