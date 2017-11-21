/**
 * Created by yewyw on 2017/10/28/0028.
 */
(function (angular) {
    var top250Module = angular.module('moviecatTevins.top250', ['ngRoute']);
    top250Module.config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/top250', {
            templateUrl: 'top250/view.html',
            controller: 'Top250Controller'
        })
    }]);
    top250Module.controller('Top250Controller', ['$scope', '$http', function ($scope, $http) {
        $scope.top250Data;
        $scope.message = '';
        $http.get('data/top250.json').then(function (response) {
            if (200 == response.status) {
                $scope.top250Data = response.data;
            } else {
                $scope.message = "请求失败，错误信息" + response.status + response.statusText;
            }
        }, function (err) {
            console.log(err);
            $scope.message = "请求失败，错误信息" + err.status + err.statusText;
        });
    }]);
})(angular);