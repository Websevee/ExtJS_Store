Ext.define('Extjs.view.auth.login.LoginViewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.loginview',

	/*
    onLogin: function() {
        var form = this.getView();
        //Ext.Msg.alert('Login Failure', String(form));
		if (form.validate()) {
            var me = this
            
            var user = me.getView().get

            Ext.Msg.alert('Login Failure', String(user));

            
			me.getLoginData(user, pass)
			.then(function(response) {
				if (response.valid == true) {
					Ext.Msg.alert('Login Success', 'You have been logged in!')
					localStorage.setItem("LoggedIn", true)
					me.getView().destroy()
					Ext.Viewport.add([{ xtype: 'mainview'}])
				}
				else {
					//Ext.Msg.alert('Server Login Failure', 'You have NOT been logged in!');
				}
			}, function(e) {
				console.log(e);
			})
		} else {
			//Ext.Msg.alert('Login Failure', 'The username/password provided is invalid.');
		}
	},

	getLoginData: function (user, pass) {
		return new Ext.Promise(function (resolve, reject) {
			try {
                var myurl = 'http://localhost:62572/Account/TestLogin/' + String(user) + String(pass)
				Ext.Ajax.request({ 
                    url: myurl,
					success: function(response, opts) {
                        var o = response.responseText;
                        //Ext.Msg.alert('Login Failure', String(myurl));
						resolve(o);
					},
					failure: function(response, opts) {
						return reject ('server-side failure with status code ' + response.status);
                    }
                    
				});
			}
			catch(err) {
				return reject(err);
			}
		});
	},*/

    
    onLogin: function() {
        var form = this.getView();

        if (form.validate()) {
            // Set the localStorage value to true
            localStorage.setItem("LoggedIn", true);
            // Remove Login Window
            this.getView().destroy();
            // Add the main view to the viewport
            Ext.Viewport.add([{xtype: 'mainview'}])
        } 
        else {
            Ext.Msg.alert('Login Failure', 'The username/password provided is invalid.');
        }
    },

    onRegister: function() {
        var form = this.getView();

        this.getView().destroy();

        // Add the register view to the viewport
        Ext.Viewport.add([{xtype: 'registerview'}])
    }
});