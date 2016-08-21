var app = angular.module('itemApp', []);
app.factory('Items', function(){
    var items = {};
    items.query = function(){
        return [
            {name: 'aa', price: 2.3355, title: 'behind'},
            {name: 'bb', price: 3.5566, title: 'header'}
        ];
    };
    return items;
}).controller('itemController', function($scope, Items){
    $scope.items = Items.query();
}).filter('titleCase', function() {
    var titleCaseFilter = function (input) {
        var words = input.split(' ');
        for (var i = 0; i < words.length; i++) {
            words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
        }
        return words.join(' ');
    };
    return titleCaseFilter;
});
app.config(function($routeProvider){
    $routeProvider
        .when('/', {controller: myController, templateUrl: 'index.html'});
});