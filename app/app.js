/**
 * app.js
 * Main JS file for the application
 */

/**
 * Boolean flag used for application setup
 */
var ready = false;
var device = true;


/**
 * Run Sencha Setup, which ensures instantiation specifically in PhoneGap.
 * Not neccesarily needed for a pure web app from what I've encountered
 * so far in my personal development findings.
 */
Ext.setup({
	tabletStartupScreen: 'resources/img/tablet_startup.png',
    phoneStartupScreen: 'resources/img/phone_startup.png',
    icon: 'resources/img/icon.png',
    glossOnIcon: false,
	statusBarStyle:"black-translucent",
    onReady: function() {
		if(device){
			// app is ready call run mainLaunh
	        ready = true;
	        app.mainLaunch();
		}
    }
});

/**
 * Register a new Application main launch will be called when the application launch
 * command is run, but if the Sencha setup hasn't completed we'll break out of the method.
 * Otherwise we goahead and create the main viewport of the application which all 
 * sub-components will live.
 *
 * Registering the application will in effect create name spaces for our applications
 * views, stores, models and controllers. app.views.*, app.stores.*, app.models.* and 
 * app.controllers.* respectively.
 */
Ext.regApplication('app', {
    launch: function() { 
		
		// set whether or not the console will accept logging
		Logger.init(true);
		
		// log and run app application main launch
		Logger.log(this.name ,"Launch");
        this.mainLaunch();

    },
    mainLaunch: function() {

		// check if the application is setup
        if (!device) ready=true;
		if (!ready) return;

		// log and create viewport
		Logger.log(this.name ,"Main Launch");
        this.views.viewport = new this.views.Viewport({
            application: this
        });
    }
});