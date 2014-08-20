analytics
=========

Sencha Touch singleton to abstract Google Analytics for Web and Mobile (Cordova/PhoneGap).


usage
=========

Initialize (probably in your app.js):

// Your logic should decide which Google ID to use (web vs mobile).
Aumnia.Analytics.setAccountId("UA-XXXXXXXX-X");


* Aumnia.Analytics.trackPageView(page, title);
* Aumnia.Analytics.trackEvent(category, action, label);


Notes:
=========
Takes advantage of Google Universal Analytics for the web platform.

Requires the following plugin for the Cordova/PhoneGap platform.
https://build.phonegap.com/plugins/297
