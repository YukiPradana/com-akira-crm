var _FCM_TOKEN;


document.addEventListener("deviceready", function () {
    cordova.plugins.firebase.messaging.onMessage(function (payload) {
        console.log("New foreground FCM message: ", payload);
        // alert("New foreground FCM message: "+ payload);
    });

    cordova.plugins.firebase.messaging.onBackgroundMessage(function (payload) {
        console.log("New background FCM message: ", payload);
        // alert("New foreground FCM message: "+ payload);
    });
    cordova.plugins.firebase.messaging.requestPermission().then(function (token) {
        console.log("APNS device token: " + token);
    });
   
});


function getFirebaseToken() {
    try {
        cordova.plugins.firebase.messaging.getToken().then(function (token) {
            return token;
        });
    } catch (err) {
        alert("error bwang");
    }
}

// function revokeFirebaseToken(){
//     cordova.plugins.firebase.messaging.revokeToken().then(function() {
//         console.log("Token revoked successfully");
//     });
// }