/**
 * Logger.js
 * Simple logging class for 
 */
Logger = new Ext.Controller({
    enabled: true,
    log: function(owner, message) {
        if (!enabled) return;
        console.log(new Date().getTime() + " [" + owner + "] " + message);
    },
    warn: function(owner, message) {
        if (!enabled) return;
        console.warn(new Date().getTime() + " [" + owner + "] " + message);
    },
    error: function(owner, message) {
        if (!enabled) return;
        console.error(new Date().getTime() + " [" + owner + "] " + message);
    },
    init: function(bool) {
        bool ? enabled = true: enabled = false;
    }
});