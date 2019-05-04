Ext.define('Front.view.Product', {
    extend: 'Ext.window.Window',
    alias: 'widget.productwindow',
 
    title: 'Продукт',
    layout: 'fit',
    autoShow: true,
 
    initComponent: function() {
        this.items = [{
                xtype: 'form',
                items: [
                    /*{
                        xtype: 'textfield',
                        name : 'ID',
                        fieldLabel: 'ID'
                    },*/
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
            xtype:'toolbar',
            docked: 'top',
            items: [
                {
                    text:'Создать',
                    //iconCls:'new-icon',
                    action: 'create'
                },
                {
                    text:'Удалить',
                    //iconCls:'new-icon',
                    action: 'delete'
                }
            ]
        }];
        this.buttons = [
            {
                text: 'Сохранить',
                //scope: this,
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