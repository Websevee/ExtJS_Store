Ext.define('Front.view.manager.ProductManager', {
    extend: 'Ext.window.Window',
    xtype: 'productwindow',
 
    title: 'Продукт',
    layout: 'fit',
    autoShow: true,
 
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
        this.dockedItems=[{
            xtype: 'toolbar',
            docked: 'top',
            items: [
                {
                    text: 'Создать',
                    action: 'create'
                },
                {
                    text: 'Удалить',
                    action: 'delete'
                }
            ]
        }];
        this.buttons = [
            {
                text: 'Сохранить',
                action: 'save'
            },{
                text: 'Очистить',
                scope: this,
                action: 'clear'
            }
        ];
 
        this.callParent(arguments);
    }
});