Ext.application({
    name: 'Front',
    
    //autoCreateViewport: true,
    
    models: ['Product'],    
    stores: ['Products'],
    controllers: ['User', 'Manager', 'Store'],
    

    launch: function () {
        Ext.Ajax.request({
            url: '/Account/NowUser',
            success: function(response, options){
                var data=Ext.decode(response.responseText);
                if(data.success){
                    console.log('Main',data.user);
                    Ext.widget('main');
                }
                else{
                    console.log('Login',data);
                    Ext.widget('login');
                }
            }
        });
    }
});