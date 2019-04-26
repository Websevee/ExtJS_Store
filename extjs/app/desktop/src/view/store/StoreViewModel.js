Ext.define('Extjs.view.store.StoreViewModel', {
    extend: 'Ext.data.Model',
    autoLoad: true,
    autoSync: true,
    idProperty: 'Id',
    fields: [
        { name: 'Id' },
        { name: 'Code' },
        { name: 'Name' },
        { name: 'Price' },
    ]
})