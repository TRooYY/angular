//var cc = angular.module('myApp', []);
//cc.directive('ngbkfocus', function(){
//    return {
//        link : function(scope, element, attrs, controller){
//            element[0].focus();
//        }
//    }
//});
var app = angular.module('myApp', []);
app.controller('myController', function($scope){
    var someText = {};
    someText.message = 'this is a message';
    $scope.someText = someText;

    $scope.start = 0;

    $scope.change = function(){
        $scope.end = $scope.start *10;
    };

    $scope.request = function(){
        window.alert('111');
    }

    $scope.reset = function(){
        $scope.start = 0;
    }
    $scope.dbclick = function () {
        $scope.end = 100;
    }

    $scope.message = {text : 'aa'};

    $scope.clickUnfocus = function(){
        $scope.message.text = 'bb';
    }

    $scope.clickFocus = function(){
        $scope.message.text = 'cc';
    }
})
