/**
 * Home.js
 */
app.views.Home = Ext.extend(Ext.Panel, {
    fullscreen: true,
    layout: 'fit',
    name: 'Home',
	position:1,
	contentEl:'home-content',
	scroll:'vertical',
    dockedItems: [{
        dock: 'top',
        xtype: 'toolbar',
        title: 'Home'
    }],
    initComponent: function() {
        Logger.log(this.name, 'Init Component');
        // apply
        app.views.Home.superclass.initComponent.apply(this, arguments);
        Logger.log(this.name, 'Init Component Complete');
    },
	handleTo:function() {
        Logger.log(this.name, "Handle To");
	},
	handleFrom:function() {
        Logger.log(this.name, "Handle From");
	}
});


