var ngApp = angular.module("myApp", []);

ngApp.controller("myController", function ($scope) {
    $scope.message = "This is my first Angular Project !";

    $scope.DisplayMessage = function () {
        alert("You clicked me !");
    }
});