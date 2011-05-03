/**
 * Viewport.js
 * Main application view that will contain all sub-components of the application.
 */
app.views.Viewport = Ext.extend(Ext.Panel, {
    fullscreen: true,
    layout: 'card',
    name: "Viewport",
    initComponent: function() {

        // log init of viewport
        Logger.log(this.name, "Init Component");

        // example logger warning
        Logger.warn(this.name, "Warning Example");

        // example logger error
        Logger.error(this.name, "Error Example");

        //put instances of cards into app.views namespace
        Ext.apply(app.views, {
            home: new app.views.Home(),
            simpleForm: new app.views.SimpleForm(),
            navigation: new app.views.Navigation(),
            touchEvents: new app.views.TouchEvents(),
            exampleList: new app.views.ExampleList()
        });

        //put items into viewport
        Ext.apply(this, {
            items: [
            app.views.home,
            app.views.simpleForm,
            app.views.touchEvents,
            app.views.exampleList
            ],
            dockedItems: [
            app.views.navigation
            ]
        });

        // apply new arguments to panel which will add the MainApp view for init
        app.views.Viewport.superclass.initComponent.apply(this, arguments);

        // log viewport init complete. this will be the last log of start up
        // if you get to this point your start-up was a success... if not happy digging :)
        Logger.log(this.name, "Init Component Complete");

        this.handleComplete();
        // set the initial view of the application
        //app.controllers.navigation.init({startScreen:"simpleForm"});
    },
    handleComplete: function() {
        app.controllers.navigation.init({});
    }
});
