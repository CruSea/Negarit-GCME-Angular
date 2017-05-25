/**
 * Created by Eyouel on 4/11/2017.
 */
angular
    .module('inspinia')
    .controller('NewCtrl', function($scope,$timeout,$filter,$state) {
        console.log("controller loaded");
        var user = 0;
        if ( user == 0) {
            console.log("Invalid user");
            $state.go("login.signin");
        }
        $scope.userSignOut = function (Users) {
            firebase.auth().signOut().then(function () {
                console.log("Sign out");
            }, function (error) {
                console.log("Sign out error");
            });
        }

    });
