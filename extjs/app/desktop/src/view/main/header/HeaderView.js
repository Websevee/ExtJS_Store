Ext.define('Extjs.view.main.header.HeaderView', {
    extend: 'Ext.Container',
    xtype: 'headerview',
    cls: 'headerview',
    items: [
		{ 
			xtype: 'container',
			cls: 'headerviewtext'
        },
        {
            xtype: 'button',
            text: 'LogOut',
            docked: 'right',
            ui: 'headerbutton',
            handler: 'onLogout'
        }
	]
})