Ext.define('Extjs.view.store.StoreViewStore', {
    extend: 'Ext.data.Store',
    model: 'Extjs.view.store.StoreViewModel',  
    alias: 'store.Store',

    proxy: {
        type: 'ajax',
        api: {
            read: 'http://localhost:62572/Product/GetData',
            destroy: 'http://localhost:62572/Product/DeleteItem'
        },
        reader: {
            type: 'json',
            rootProperty: 'data',
            successProperty: 'success'
        },
        write: {
            type: 'jason',
            writeAllFields: false
        }
    }
})