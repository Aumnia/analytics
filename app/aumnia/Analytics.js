Ext.define('Aumnia.Analytics', {
    singleton: true,

    requires: [
        'Aumnia.analytics.Web',
        'Aumnia.analytics.Cordova'
    ],

    constructor: function () {
        // <debug>
        console.log(this.$className + " constructor");
        // </debug>

        if (Ext.browser.is('Cordova')) {
            return Ext.create('Aumnia.analytics.Cordova');
        } else {
            return Ext.create('Aumnia.analytics.Web');
        }
    }

});
