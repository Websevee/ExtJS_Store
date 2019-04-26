Ext.define('Extjs.view.main.center.CenterView', {
	extend: 'Ext.Container',
	xtype: 'centerview',
	cls: 'centerview',
    layout: 'fit',
    

    items: [
        {
            xtype: 'navview',    
            reference: 'navview',   
            docked: 'left',   
            bind: {width:  '{navview_width}'}, 
            listeners: { select: "onMenuViewSelectionChange"} 
        }
    ]
});
