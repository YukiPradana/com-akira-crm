cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/cordova-plugin-firebase-messaging/www/FirebaseMessaging.js",
        "id": "cordova-plugin-firebase-messaging.FirebaseMessaging",
        "pluginId": "cordova-plugin-firebase-messaging",
        "merges": [
            "cordova.plugins.firebase.messaging"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-whitelist": "1.3.3",
    "cordova-plugin-firebase-messaging": "1.1.1",
    "cordova-plugin-datetimepicker": "1.0.0"
}
// BOTTOM OF METADATA
});