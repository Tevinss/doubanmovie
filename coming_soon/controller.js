/**
 * Created by yewyw on 2017/10/28/0028.
 */
(function (angular) {
    var comingSoonModule = angular.module('moviecatTevins.coming_soon', ['ngRoute']);
    comingSoonModule.config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/coming_soon', {
            controller: 'ComingSoonController',
            templateUrl: 'coming_soon/view.html'
        })
    }]);
    comingSoonModule.controller('ComingSoonController', ['$scope', '$http', function ($scope, $http) {
        $scope.comingSoonData;
        $scope.message = '';
        $http.get('data/coming_soon.json').then(function (response) {
            if (200 == response.status) {
                $scope.comingSoonData = response.data;
            } else {
                $scope.message = "请求失败，错误信息" + response.status + response.statusText;
            }
        }, function (err) {
            $scope.message = "请求失败，错误信息" + err.status + err.statusText;
        });
    }]);
})(angular);