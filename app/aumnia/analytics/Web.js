Ext.define('Aumnia.analytics.Web', {
    extend: 'Aumnia.analytics.Abstract',

    updateAccountId: function (newID) {
        // <debug>
        console.log("Web.updateAccountId: ", newID);
        // </debug>
        if (newID && window.ga) {
            // <debug>
            console.log("Web.updateAccountId: newId=", newID);
            // </debug>

            window.ga(function () {
                // <debug>
                console.log("Google Universal Analytics initialized.");
                // </debug>
            });
            window.ga('create', newID, Surterre.Common.global.gaTrackingDomain);
        } else {
            console.log("Warning: unable to setup Web analytics: ", newID, window.ga);
        }
    },

    trackEvent: function (category, action, label) {
        if (window.ga) {
            // <debug>
            console.log('Tracking event: category=' + category + ', action=' + action + ', ' + label, ' account=', this.getAccountId());
            // </debug>
            window.ga('send', 'event', category, action, label, {
                'hitCallback': function () {
                    // <debug>
                    console.log("analytics.js done sending event data: ", category, action, label);
                    // </debug>
                }
            });
        } else {
            console.log("Warning: no web analytics for trackEvent");
        }
    },

    trackPageView: function (page, title) {
        if (window.ga) {
            // <debug>
            console.log('Tracking page: ' + page + ', title=' + title, 'account=', this.getAccountId());
            // </debug>
            window.ga('send', 'pageview', {
                'page': page,
                'title': title,
                'hitCallback': function () {
                    // <debug>
                    console.log("analytics.js done sending page data: ", page, title);
                    // </debug>
                }
            });
        } else {
            console.log("Warning: no web analytics for trackPageView");
        }
    },

    constructor: function () {
        // <debug>
        console.log("Analytics.Web constructor");
        // </debug>

        // https://developers.google.com/analytics/devguides/collection/analyticsjs/advanced#snippet
        (function (i, s, o, g, r, a, m) {
            i['GoogleAnalyticsObject'] = r; i[r] = i[r] || function () {
                (i[r].q = i[r].q || []).push(arguments)
            }, i[r].l = 1 * new Date(); a = s.createElement(o),
                m = s.getElementsByTagName(o)[0]; a.async = 1; a.src = g; m.parentNode.insertBefore(a, m)
        })(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga');

        this.callParent(arguments);
    }

});
