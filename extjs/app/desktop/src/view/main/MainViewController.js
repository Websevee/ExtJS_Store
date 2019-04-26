Ext.define('Extjs.view.main.MainViewController', {
  extend: 'Ext.app.ViewController',
  alias: 'controller.mainviewcontroller',

  routes: { 
		':xtype': {action: 'mainRoute'}
	},

	mainRoute:function(xtype) {
		//var menuview = this.lookup('menuview');
		var navview = this.lookup('navview');
		var menuview = navview.items.items[0]

		var centerview = this.lookup('centerview');
		var exists = Ext.ClassManager.getByAlias('widget.' + xtype);
		if (exists === undefined) {
			console.log(xtype + ' does not exist');
			return;
		}
		var node = menuview.getStore().findNode('xtype', xtype);
		if (node == null) {
			console.log('unmatchedRoute: ' + xtype);
			return;
		}
		if (!centerview.getComponent(xtype)) {
			centerview.add({ xtype: xtype,  itemId: xtype, heading: node.get('text') });
		}
		centerview.setActiveItem(xtype);
		menuview.setSelection(node);
		var vm = this.getViewModel(); 
		vm.set('heading', node.get('text'));
	},

  onButtonClick: function (button) {
    this.lookupReference('df').setValue(Date.now())
  },

  // Выход из профиля
  onLogout: function () {
		// Set the localStorage value to false
		localStorage.setItem("TutorialLoggedIn", false);

    var form = this.getView();

    this.getView().destroy();

    // Add the register view to the viewport
    Ext.Viewport.add([{xtype: 'loginview'}])
  },

  onMenuViewSelectionChange: function (tree, node) {
		if (node == null) { return }
		var vm = this.getViewModel();
		if (node.get('xtype') != undefined) {
			this.redirectTo( node.get('xtype') );
		}
	},

})
