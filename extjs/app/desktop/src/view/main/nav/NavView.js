Ext.define('Extjs.view.main.nav.NavView', {
	extend: 'Ext.Panel',
	xtype: 'navview',
	controller: "navviewcontroller",
	cls: 'navview',
	layout: 'fit',
	
	items: [ 
		{
			xtype: 'menuview', 
			reference: 'menuview', 
			bind: {width: '{menuview_width}'}, 
			listeners: { 
				selectionchange: "onMenuViewSelectionChange"
			}
		}
	]
});
