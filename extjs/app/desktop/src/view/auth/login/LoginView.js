Ext.define('Extjs.view.auth.login.LoginView', {
    extend: 'Ext.form.Panel',
    xtype: 'loginview',
    controller: 'loginview',
    viewModel: {
        type: 'loginviewmodel'
    },

    title: 'Login',
    bodyPadding: 20,
    width: 320,
    autoSize: true,

    items: [{
        xtype: 'textfield',
        allowBlank: false,
        required: true,
        label: 'User ID',
        name: 'user',
        placeholder: 'user id'
    }, {
        xtype: 'passwordfield',
        allowBlank: false,
        required: true,
        label: 'Password',
        name: 'pass',
        placeholder: 'password'
    }, {
        xtype: 'checkbox',
        boxLabel: 'Remember me',
        name: 'remember'
    }],

    buttons: 
    [
        {
            text: 'Register',
            handler: 'onRegister'
        },
        {
            text: 'Login',
            handler: 'onLogin'
        }
    ]
});