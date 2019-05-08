Ext.define('Front.controller.Store', {
    extend: 'Ext.app.Controller',

    views: ['store.Store', 'store.Product'],
    stores: ['Products'],
    models: ['Product'],

    init: function() {
        this.control({
            'store': {
                itemdblclick: this.Product
            }
        });
    },

    Product: function(grid, record) {
        var view = Ext.widget('product');
        view.down('form').loadRecord(record);
    }
})