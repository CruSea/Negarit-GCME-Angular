/**
 * Created by Eyouel
 */
angular
    .module('inspinia')
    .controller('LogInCtrl', function($scope, $location, $state) {
        console.log("Log in controller loaded");
         $scope.submit = function(){
            var uname = $scope.username;
            var password = $scope.userpass;
            if($scope.username == 'admin' && $scope.userpass == 'admin'){
                $state.go('index');  
            }
         
    });

    


