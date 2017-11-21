/**
 * Created by tevins on 2017/10/28/0028.
 */

(function (angular) {
    var movieDetailModule = angular.module('moviecatTevins.movie_detail', ['ngRoute', 'moviecatTevins.service.http']);
    movieDetailModule.config(["$routeProvider", function ($routeProvider) {
        $routeProvider.when('/detail/:id', {
            controller: 'MovieDetailController',
            templateUrl: 'movie_detail/view.html'
        });
    }]);
    // theatersModule.controller('InTheaterController', ['$scope', '$http', function ($scope, $http) {
    movieDetailModule.controller('MovieDetailController', ['$scope', '$route', '$routeParams', 'HttpService', 'AppConfig', function ($scope, $route, $routeParams, HttpService, AppConfig) {
        // console.log("类别", ": " + $routeParams.category);
        $scope.isLoading = true;//是否在加载数据
        $scope.data;//api返回的数据
        // if ('detail' == $routeParams.detail) {
        // var url = 'http://api.douban.com/v2/movie/' + $routeParams.detail + '/' + $routeParams.id;//请求地址
        var url = AppConfig.detailApiAddress + $routeParams.id;//请求地址
        // $routeParams 的数据来源：1.路由匹配出来的，2."?"参数
        HttpService.jsonpTevins(url, {}, function (data) {
            //回调函数
            console.log(data);
            $scope.data = data;
            $scope.isLoading = false;//加载数据完成
            // $apply的作用就是让指定的表达式重新同步,不加参数就是所有的都同步(跨域后都需要apply一下)
            $scope.$apply();
        });
        // }
    }]);
})(angular);