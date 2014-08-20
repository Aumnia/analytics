Ext.define('Aumnia.analytics.Cordova', {
    extend: 'Aumnia.analytics.Abstract',

    updateAccountId: function (newID) {
        //console.log("Cordova.updateAccount: ", newID);

        if (newID && window.plugins && window.plugins.gaPlugin) {
            //console.log("Cordova.updateAccountId: ", newID);
            window.plugins.gaPlugin.init(
                function (s) {
                    //console.log("gaPlugin.init success: ", s);
                },
                function (e) {
                    console.log("gaPlugin.init error: ", e);
                },
                newID,
                5 // number of seconds to queue up data prior to sending it to Google
            );
        }
    },

    trackEvent: function (category, action, label) {
        //console.log("trackEvent: ", category, " ", action, " ", label, " account=", this.getAccountId());
        if (window.plugins.gaPlugin) {
            //console.log("tracking event");
            window.plugins.gaPlugin.trackEvent(
                function () {
                    //console.log("track event success: ", action);
                }, function (e) {
                    console.log("track event error: ", e);
                },
                category,
                action,
                label,
                0 // int we can use for anything
            );
        } else {
            console.log("Warning: no mobile analytics for trackEvent");
        }
    },

    trackPageView: function (page) {
        //console.log('Tracking page as page: ' + page + ' account=', this.getAccountId());
        if (window.plugins.gaPlugin) {
            //console.log('Tracking page');
            window.plugins.gaPlugin.trackPage(
                function () {
                    //console.log("track page success: ", page);
                }, function (e) {
                    console.log("track page error: ", page, e);
                },
                page
            );
        } else {
            console.log("Warning: no mobile analytics for trackPageView");
        }
    }

});
