/**
 * ExampleDataView.js
 */
app.views.ExampleList = Ext.extend(Ext.Panel, {
    layout: 'card',
    fullscreen: true,
    position: 4,
    name: 'ExampleList',
    dockedItems: [{
        dock: 'top',
        xtype: 'toolbar',
        title: 'Example List',
        layout: {
            type: 'hbox'
        },
        items: [
        {
            text: '',
            iconMask: true,
            iconCls: 'refresh',
            listeners: {
                'tap': function() {
                    Logger.log("Refresh Button", "Tap");
					// TODO: figure out a better way of determaining scope through
					// this buttons parent 
                    app.views.exampleList.deleteShowing = false;
                    app.stores.ExampleStore.load();
                }
            }

        },
        {
            xtype: 'spacer'
        },
        {
            text: '',
            iconMask: true,
            iconCls: 'compose',
            scope: this,
            listeners: {
                'tap': function() {
                    Logger.log("Edit Button", "Tap");
					// TODO: figure out a better way of determaining scope through
					// this buttons parent to assign the toggleDeleteButtons action to
                    app.views.exampleList.toggleDeleteButtons();
                }
            }
        }
        ]
    }],
    initComponent: function() {

        Logger.log(this.name, "Init Component");

        // create template for the competitions data view
        var tpl = new Ext.XTemplate(
        '<tpl for=".">',
        '	<div class="example_item_selector">',
        '		<button class="delete_example_item" style="float:left;display:none;">delete</button>',
        '		<img src="{image}"/>',
        '		<h1>{name}</h1>',
        '		<p>{description}</p>',
        '	</div>',
        '	<div class="clear"></div>',
        '</tpl>'
        );

        // TODO: Figure out why I have to have a grouping base here ???????
        var base = {
            itemTpl: tpl,
            store: app.stores.ExampleStore
        };

        // create compeititions data view
        var list = new Ext.List(base, {
            fullscreen: true
        });

        // set for later use
        this.list = list;
        this.deleteShowing = false;

        // add item tap and swipe listeners
        list.on('itemtap', this.onListItemTap, this);
        list.on('itemswipe', this.onListItemSwipe, this);

        // add data view to this panels items
        Ext.apply(this, {
            items: [
            list
            ]
        });

        // apply args and log competitions init complete
        app.views.ExampleList.superclass.initComponent.apply(this, arguments);
        Logger.log(this.name, "Init Component Complete");
    },
    handleTo: function() {
        if (!this.isLoaded) {
            Logger.log(this.name, "Load Initial Data");
            this.isLoaded = true;
            app.stores.ExampleStore.load();
        }
    },
    handleFrom: function() {},
    onListItemTap: function(dv, index, item, e) {
		// check to see if what your actually clicking is the delete button or not
		// if it is then run delete functionality otherwise transition to wherever
		// this click action takes you
        if (e.getTarget('button')) {
            Logger.log(this.name, "Delete Item " + (index + 1));
            Ext.removeNode(item);
        }
        else
        {
            Logger.log(this.name, "Item " + (index + 1) + " Click");
        }
    },
    onListItemSwipe: function(dv, index, item, e) {
		// this could be handy later on if its decided you want delete
		// individual items on swipe
        Logger.log(this.name, "Item " + (index + 1) + " Swipe");
    },
    toggleDeleteButtons: function() {
        
		// log and set new display state to set the item 
		// delete buttons to
        var newDisplay = "none";
        if (!this.deleteShowing) {
            this.deleteShowing = true;
            newDisplay = "block";
            Logger.log(this.name, "Show buttons");
        } else {
            this.deleteShowing = false;
            Logger.log(this.name, "Hide delete buttons");
        }
		
		// iterate through item delete buttons and show or hide 
		// depending on what the current display state is
		var btns = Ext.query("*[class=delete_example_item]");
        var totalBtns = btns.length;
        for (var i = 0; i < totalBtns; i++) {
            Ext.DomHelper.applyStyles(btns[i], {
                display: newDisplay
            });
        }
    }
});