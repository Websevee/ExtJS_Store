Ext.define('Front.controller.Store', {
    extend: 'Ext.app.Controller',

    views: ['Store', 'Product'],
    stores: ['Products'],
    models: ['Product'],
/*
    refs: [{
        ref: 'store',
        selector: 'toolbar'
    }],*/

    init: function() {
        this.control({
            'store': {
                itemdblclick: this.editProduct
            },
            'store button[action=onAdd]': {
                click: this.onAdd
            },
            'productwindow button[action=create]': {
                click: this.createProduct
            },
            'productwindow button[action=save]': {
                click: this.updateProduct
            },
            'productwindow button[action=delete]': {
                click: this.deleteProduct
            },
            'productwindow button[action=clear]': {
                click: this.clearForm
            }
        });
    },

    editProduct: function(grid, record) {
        var view = Ext.widget('productwindow');
        view.down('form').loadRecord(record);
    },

    onAdd: function() {
        Ext.widget('productwindow');
    },

    createProduct: function(button) {
        var win    = button.up('window'),
            form   = win.down('form'),
            values = form.getValues();
        Ext.Ajax.request({
            url: '/Product/CreateNew',
            params: values,
            success: function(response, options){
                var data=Ext.decode(response.responseText);
                if(data.success){
                    Ext.Msg.alert('Создание',data.message);
                    var store = Ext.widget('store').getStore();
                    store.load();
                }
                else{
                    Ext.Msg.alert('Создание','Не удалось добавить книгу в библиотеку');
                }
            }
        });
    },

    updateProduct: function(button) {
        var win    = button.up('window'),
            form   = win.down('form'),
            values = form.getValues(),
            id = form.getRecord().get('ID');
            values.id=id;
        Ext.Ajax.request({
            url: '/Product/EditItem',
            params: values,
            success: function(response){
                var data=Ext.decode(response.responseText);
                if(data.success){
                    var store = Ext.widget('store').getStore();
                    store.load();
                    Ext.Msg.alert('Обновление',data.message);
                }
                else{
                    Ext.Msg.alert('Обновление','Не удалось обновить книгу в библиотеке');
                }
            }
        });
    },

    deleteProduct: function(button) {
        var win    = button.up('window'),
            form   = win.down('form'),
            id = form.getRecord().get('ID');
        Ext.Ajax.request({
            url: '/Product/DeleteItem',
            params: {id:id},
            success: function(response){
                var data=Ext.decode(response.responseText);
                if(data.success){
                    Ext.Msg.alert('Удаление',data.message);
                    var store = Ext.widget('store').getStore();
                    store.load();
                }
                else{
                    Ext.Msg.alert('Удаление','Не удалось удалить книгу из библиотеки');
                }
                win.close()
            }
        });
    },

    clearForm: function(grid, record) {
        var view = Ext.widget('productwindow');
        view.down('form').getForm().reset();
    }

    
})