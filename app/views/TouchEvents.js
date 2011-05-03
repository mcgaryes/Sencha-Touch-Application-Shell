/**
 * TouchEvents.js
 * Simple Print out of SenchaTouch touch events
 */
app.views.TouchEvents = Ext.extend(Ext.Panel, {
    fullscreen: true,
    layout: 'fit',
    name: "TouchEvents",
    position: 3,
    html: '<span>Try using gestures on the area to the right to see how events are fired.</span>',
    dockedItems: [{
        dock: 'top',
        xtype: 'toolbar',
        title: 'Touch Events'
    }],
    initComponent: function() {
        Logger.log(this.name, "Init Component");
        // apply
        app.views.TouchEvents.superclass.initComponent.apply(this, arguments);
        Logger.log(this.name, "Init Component Complete");
    },
    handleTo: function() {
        Logger.log(this.name, "Add Touch Events");
        // add events for this panel
        this.addListener({
            el: {
                touchstart: this.handleEvent,
                touchend: this.handleEvent,
                touchmove: this.handleEvent,
                touchdown: this.handleEvent,
                dragstart: this.handleEvent,
                drag: this.handleEvent,
                dragend: this.handleEvent,
                singletap: this.handleEvent,
                tap: this.handleEvent,
                doubletap: this.handleEvent,
                taphold: this.handleEvent,
                tapcancel: this.handleEvent,
                swipe: this.handleEvent,
                scope: this
            }
        });
    },
    handleFrom: function() {
        Logger.log(this.name, "Remove Touch Events");
		// TODOL remove all events for this view
		this.removeListener({
            el: {
                touchstart: this.handleEvent,
                touchend: this.handleEvent,
                touchmove: this.handleEvent,
                touchdown: this.handleEvent,
                dragstart: this.handleEvent,
                drag: this.handleEvent,
                dragend: this.handleEvent,
                singletap: this.handleEvent,
                tap: this.handleEvent,
                doubletap: this.handleEvent,
                taphold: this.handleEvent,
                tapcancel: this.handleEvent,
                swipe: this.handleEvent,
                scope: this
            }
        });
	//	removeListener( String eventName, Function handler, [Object scope] ) : void
    },
    handleEvent: function(e) {

        // remove the propmt to click
        if (!this.started) {
            this.body.select('span').remove();
            this.started = true;
        }

        // insert p tag with event type
        this.body.insertFirst({
            tag: 'p',
            html: new Date().getTime() + ' [ HandleEvent ]    ' + e.type,
            style: 'margin: 0'
        });

        // remove any items after count of 30
        this.body.select('p:nth-child(30)').remove();
    }
});


