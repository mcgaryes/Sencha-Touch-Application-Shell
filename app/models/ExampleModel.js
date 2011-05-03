//
app.models.ExampleModel = Ext.regModel("ExampleModel", {
    fields: [
    {
        name: "image",
        type: "string"
    },
    {
        name: "name",
        type: "string"
    },
    {
        name: "description",
        type: "string"
    }
    ]
});

//
app.stores.ExampleStore = new Ext.data.Store({
    model: 'ExampleModel',
    proxy: {
        type: 'ajax',
        url: 'http://sandbox.ericmcgary.com/services/example_data_service.php',
        reader: {
            type: 'json',
            root: 'data'
        }
    },
    autoLoad: false
});
