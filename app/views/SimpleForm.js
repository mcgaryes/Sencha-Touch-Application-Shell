/**
 * SimpleForm.js
 */
app.views.SimpleForm = Ext.extend(Ext.Panel, {
    fullscreen: true,
    layout: 'fit',
    name: "SimpleForm",
    position: 2,
    scroll: 'vertical',
    dockedItems: [{
        dock: 'top',
        xtype: 'toolbar',
        title: 'Simple Form',
        items: [
        {
            xtype: 'spacer'
        },
        {
            text: 'Submit',
            ui: 'confirm',
            listeners: {
                'tap': function() {
                    Logger.log("Submit Form", "Clicked");

                    // validate the first name
                    if (form[0].value == "" || form[0].value == null)
                    {
                        alert("Please Enter A First Name");
                        return;
                    }

					if (form[0].value == "John" || form[0].value == "john")
                    {
                        alert("John's A Stupid Name... Please Choose A Better One!");
                        return;
                    }

                    // validate the last name
                    if (form[1].value == "" || form[1].value == null)
                    {
                        alert("Please Enter A Last Name");
                        return;
                    }

                    // use ajax to post competition
                    Ext.Ajax.request({
                        url: 'http://sandbox.ericmcgary.com/services/example_data_post.php',
                        method: "POST",
                        params: {
                            'first_name': form[0].value,
                            'last_name': form[1].value
                        },
                        success: function(response, opts) {
                            switch (response.responseText)
                            {
                            case 'failure':
                                Logger.error("SimpleForm", "Post Failure: Response - " + response.responseText);
                                break;
                            case 'success':
                                Logger.log("SimpleForm", "Post Success: Response - " + response.responseText);
								alert("Hello " + form[0].value + " " + form[1].value + "!");
								form.reset();
                                break;
                            default:
                                Logger.error("SimpleForm", "Post Failure: Response - " + response.responseText);
                            }
                        },
                        failure: function(result) {
                            Logger.error("SimpleForm", "Post Failure: " + result);
                        }
                    });
                }
            }
        }
        ]
    }],
    items: [{
        xtype: 'formpanel',
        id: 'form',
        scroll: 'vertical',
        standardSubmit: true,
        items: [{
            xtype: 'fieldset',
            id: 'basicFieldSet',
            title: 'Basic Info',
            instructions: 'Please enter the information above.',
            defaults: {
                required: true,
                labelAlign: 'left',
                labelWidth: '40%'
            },
            items: [
            {
                xtype: 'textfield',
                id: 'first_name',
                name: 'First Name',
                label: 'Name',
                useClearIcon: true,
                autoCapitalize: true
            },
            {
                xtype: 'textfield',
                name: 'last_name',
                label: 'Last Name',
                useClearIcon: true,
                autoCapitalize: true
            }
            ]
        }]
    }],
    initComponent: function() {
        Logger.log(this.name, "Init Component");
        // apply
        app.views.SimpleForm.superclass.initComponent.apply(this, arguments);
        Logger.log(this.name, "Init Component Complete");
    }
});


