Ext.application({
    name: 'Front',
    
    autoCreateViewport: true,
    
    models: ['Product'],    
    stores: ['Products'],
    controllers: ['Store']
    
});