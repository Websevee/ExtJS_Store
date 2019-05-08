Ext.define('Front.view.user.Profile', {
    extend: 'Ext.container.Container',
    xtype: 'profile',

    title: 'Profile',

    beforeShow: function () {
        //this.getStore().load();
    },

    items: [
        {
            xtype: 'button',
            text: 'LogOff',
            action: 'onLogoffClick'
        }
    ]

})