cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
  {
    "id": "cordova-plugin-firebase-messaging.FirebaseMessaging",
    "file": "plugins/cordova-plugin-firebase-messaging/www/FirebaseMessaging.js",
    "pluginId": "cordova-plugin-firebase-messaging",
    "merges": [
      "cordova.plugins.firebase.messaging"
    ]
  },
  {
    "id": "cordova-plugin-datetimepicker.plugin",
    "file": "plugins/cordova-plugin-datetimepicker/www/plugin.js",
    "pluginId": "cordova-plugin-datetimepicker",
    "clobbers": [
      "DateTimePicker"
    ],
    "runs": true
  }
];
module.exports.metadata = 
// TOP OF METADATA
{
  "cordova-plugin-whitelist": "1.3.3",
  "cordova-support-android-plugin": "1.0.1",
  "cordova-support-google-services": "1.2.1",
  "cordova-plugin-firebase-messaging": "1.1.1",
  "cordova-plugin-datetimepicker": "1.0.0"
};
// BOTTOM OF METADATA
});