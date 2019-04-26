Ext.define('Extjs.view.main.MainView', {
  extend: 'Ext.Container',
  xtype: 'mainview',
  controller: 'mainviewcontroller',
  viewModel: {
    type: 'mainviewmodel'
  },
	layout: 'fit',
  items: [
    { 
      xtype: 'headerview', 
      reference: 'headerview', 
      docked: 'top',    
      bind: {height: '{headerview_height}'} 
    },
    { 
      xtype: 'footerview', 
      reference: 'footerview', 
      docked: 'bottom',    
      bind: {height: '{footerview_height}'} 
    },
    { 
      xtype: 'centerview', 
      reference: 'centerview' 
    }
  ]
})
