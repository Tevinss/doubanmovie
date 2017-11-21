'use strict';

// Declare app level module which depends on views, and components
(function (angular) {
    // var module = angular.module('moviecatTevins', ['ngRoute', 'moviecatTevins.in_theaters', 'moviecatTevins.coming_soon', 'moviecatTevins.top250']);
    // var module = angular.module('moviecatTevins', ['ngRoute', 'moviecatTevins.movie_list']);
    var module = angular.module('moviecatTevins', ['ngRoute', 'moviecatTevins.movie_detail', 'moviecatTevins.movie_list', 'moviecat.directives.auto_focus']);
    module.config(['$routeProvider', function ($routeProvider) {
        $routeProvider.otherwise({//默认重定向至a页面
            redirectTo: '/in_theaters/1'
        });
    }]);
    module.constant('AppConfig', {
        pageSize: 3,
        listApiAddress: 'http://api.douban.com/v2/movie/',
        detailApiAddress: 'http://api.douban.com/v2/movie/subject/'
    });
    module.controller('SearchController', ['$scope', '$route', function ($scope, $route) {
        $scope.input = '';
        $scope.search = function () {
            $route.updateParams({category: 'search', q: $scope.input});
        }
    }]);


    // module.controller('MainController', ['$scope', '$location', function ($scope, $location) {
    //     $scope.$location = $location;
    //     $scope.tpye;
    //     $scope.$watch('$location.path()', function (now, old) {
    //         // console.log("现在的路径是", ": " + now);
    //         var path = $location.path();
    //         // console.log("路径是", ": " + path);
    //         if (path.startsWith('/in_theaters')) {
    //             $scope.tpye = 'in_theaters';
    //         } else if (path.startsWith('/coming_soon')) {
    //             $scope.tpye = 'coming_soon';
    //         } else if (path.startsWith('/top250')) {
    //             $scope.tpye = 'top250';
    //         }
    //     });
    // }]);
})(angular);
