Ext.define('Extjs.view.main.MainViewModel', {
  extend: 'Ext.app.ViewModel',
  alias: 'viewmodel.mainviewmodel',
  data: {
    headerview_height:     50,
    footerview_height:     50,
    navCollapsed:       false,
		navview_max_width:    300,
		navview_min_width:     44,
    clickTime : Date.now(),
  },
  formulas: {
		navview_width: function(get) {
			return get('navCollapsed') ? get('navview_min_width') : get('navview_max_width');
    }
  },
  stores: {
    menu: {
			"type": "tree",
			"root": {
				"expanded": true,
				"children": [
          //add new items on the next line (from sencha-node generate viewpackage)
          { "text": "Home", "iconCls": "x-fa fa-home", "xtype": "homeview", "leaf": true },
					{ "text": "Store", "iconCls": "x-fa fa-home", "xtype": "storeview", "leaf": true },
					{ "text": "Home", "iconCls": "x-fa fa-home", "xtype": "homeview", "leaf": true },
					
				]
			}
		}
  }
})
