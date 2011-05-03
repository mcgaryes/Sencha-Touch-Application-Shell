/**
 * Navigation.js
 * The controller for all navigation within the application
 */
app.controllers.navigation = new Ext.Controller({
    name: "NavigationController",
    // initializes the navigation for the app by setting the default view
    init: function(options) {
        // check to make sure a startScreen was passed in
        if (options == null || options.startScreen == null) {
            Logger.warn(this.name, "You must provide a start screen");
            return;
        }
        Logger.log(this.name, "Set Initial View To " + options.startScreen);
        app.views.viewport.setActiveItem(app.views[options.destination], {});
    },
    switchCard: function(options) {
		
        // check to make sure a destination was passed in
        if (options == null || options.destination == null) {
            Logger.warn(this.name, "You must provide a destination");
            return;
        }
		
		// determain current and upcoming cards
		var curCard = app.views.viewport.getActiveItem();
		var newCard = app.views[options.destination];
		
		// determain positions of cards
		var curCardPosition = curCard.position;
        var newCardPosition = newCard.position;
 
		if (curCardPosition == newCardPosition) {
            Logger.warn(this.name, "Your already on the requested view");
            return;
        }

        Logger.log(this.name, "Switch card to " + options.destination);

        // set main screen animation
        var animation = {};
        if (options.animation == null) {
            // determain transition direction
            var transitionDirection = "left";
            curCardPosition < newCardPosition ? transitionDirection = 'left': transitionDirection = 'right';
            animation = {
                type: 'slide',
                direction: transitionDirection,
                easing: 'ease-in-out',
				duration:350
            };
        }
        else {
            animation = options.animation;
        }

		// 
		
		if(curCard.handleFrom) {
			curCard.handleFrom();
		}
		
		if(newCard.handleTo) {
			newCard.handleTo();
		}

        // set the active card
        app.views.viewport.setActiveItem(newCard, animation);
    }
});
