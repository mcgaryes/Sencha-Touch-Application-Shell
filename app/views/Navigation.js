/**
 * Navigation.js
 * Navigation for the application
 */
app.views.Navigation = Ext.extend(Ext.Toolbar, {
    dock: 'bottom',
    ui: 'dark',
    name: "Navigation",
    height: 60,
    initComponent: function() {

        // log instantiation of toobar
        Logger.log(this.name, "Init Component");

        // add buttons to toolbar
        Ext.apply(this, {
            items: [
            {
                text: '',
                iconCls: 'home',
                iconMask: true,
                iconAlign: 'top',
                ui: 'plain',
                listeners: {
                    'tap': function() {
                        Ext.dispatch({
                            controller: app.controllers.navigation,
                            action: 'switchCard',
                            destination: "home"
                        });
                    }
                }
            },
            {
                text: 'Form',
                ui: 'plain',
                listeners: {
                    'tap': function() {
                        Ext.dispatch({
                            controller: app.controllers.navigation,
                            action: 'switchCard',
                            destination: "simpleForm"
                        });
                    }
                }
            },
            {
                text: 'List',
                ui: 'plain',
                listeners: {
                    'tap': function() {
                        Ext.dispatch({
                            controller: app.controllers.navigation,
                            action: 'switchCard',
                            destination: "exampleList"
                        });
                    }
                }
            },
            {
                text: 'Touch',
                ui: 'plain',
                listeners: {
                    'tap': function() {
                        Ext.dispatch({
                            controller: app.controllers.navigation,
                            action: 'switchCard',
                            destination: "touchEvents",
                            animation: {
                                // scope to use in the before function
                                scope: app.views.navigation,
                                // cube fade flip pop slide wipe
                                type: 'slide',
                                // time in ms
                                delay: 500,
                                // ease, linear, ease-in, ease-out, ease-in-out
                                easing: 'ease-in-out',
                                // direction the animation will travel to
                                direction: 'up',
                                // left right up down
                                before: function() {
                                    // if a delay is set this actually gets called twice
                                    if (this.name == undefined) return;
                                    Logger.log(this.name, "Before Animation");
                                }
                            }
                        });
                    }
                }
            }]
        });

        // apply
        app.views.Navigation.superclass.initComponent.apply(this, arguments);
        Logger.log(this.name, "Init Component Complete");
    }
});