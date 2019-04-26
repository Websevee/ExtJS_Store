Ext.define('Extjs.view.auth.register.RegisterViewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.registerviewcontroller',

    onRegister: function () {
        var form = this.getView();

        if (form.validate()) {
            Ext.Msg.alert('Registration Complete', 'You have successfully registered');
        } else {
            Ext.Msg.alert('Registration Failure', 'Please check for form errors and retry.');
        }
    },

    onLogin: function () {
        var form = this.getView();

        this.getView().destroy();

        // Add the register view to the viewport
        Ext.Viewport.add([{xtype: 'loginview'}])
    },
});