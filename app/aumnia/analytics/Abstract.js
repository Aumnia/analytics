Ext.define('Aumnia.analytics.Abstract', {

    config: {
        accountId: null
    },

    updateAccountId: Ext.emptyFn,

    trackEvent: Ext.emptyFn,

    trackPageView: Ext.emptyFn

});
