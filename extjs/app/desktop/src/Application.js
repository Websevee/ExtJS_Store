Ext.define('Extjs.Application', {
  extend: 'Ext.app.Application',
  name: 'Extjs',
  requires: ['Extjs.*'],

  launch: function () {

    var loggedIn;

    // Check to see the current value of the localStorage key
    loggedIn = localStorage.getItem("LoggedIn");

    // This ternary operator determines the value of the TutorialLoggedIn key.
    // If TutorialLoggedIn isn't true, we display the login window,
    // otherwise, we display the main view
    loggedIn ? Ext.Viewport.add([{xtype: 'mainview'}]) : Ext.Viewport.add([{xtype: 'loginview'}])

    //Ext.Viewport.add([{xtype: 'loginview'}])
  },


  onAppUpdate: function () {
    Ext.Msg.confirm('Application Update', 'This application has an update, reload?',
      function (choice) {
        if (choice === 'yes') {
          window.location.reload()
        }
      }
    )
  }
})
