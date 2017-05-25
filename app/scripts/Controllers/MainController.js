/**
 * Created by Eyouel
 */
angular
    .module('inspinia')
    .controller('DashboardCtrl', function($scope) {
        console.log("Log in controller loaded");
        $scope.userSignIn = function (Users) {
            console.log("Sign in");
            console.log(Users);
        }
        $scope.userSignOut = function (Users) {
            firebase.auth().signOut().then(function () {
                console.log("Sign out");
            }, function (error) {
                console.log("Sign out error");
            });
        }
    });