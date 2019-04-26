/*
Ext.define('Extjs.store.Users', {
    extend: 'Ext.data.Store',
    model: 'Extjs.store.User',  
    alias: 'store.User',

    proxy: {
        url: 'http://localhost:62572/',
        type: 'ajax',
        api: {
            read: 'http://localhost:62572/Product/GetData'
        },
        reader: {
            type: 'json',
            rootProperty: 'data',
            successProperty: 'success'
        }
    }
})
*/