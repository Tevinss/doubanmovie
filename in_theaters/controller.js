/**
 * Created by yewyw on 2017/10/28/0028.
 */

(function (angular) {
    // var data = {
    //     "count": 3,
    //     "start": 0,
    //     "subjects": [
    //         {
    //             "alt": "https://movie.douban.com/subject/22266012/",
    //             "casts": [
    //                 {
    //                     "alt": "https://movie.douban.com/celebrity/1040500/",
    //                     "avatars": {
    //                         "large": "https://img3.doubanio.com/img/celebrity/large/4940.jpg",
    //                         "medium": "https://img3.doubanio.com/img/celebrity/medium/4940.jpg",
    //                         "small": "https://img3.doubanio.com/img/celebrity/small/4940.jpg"
    //                     },
    //                     "id": "1040500",
    //                     "name": "杰拉德·巴特勒"
    //                 },
    //                 {
    //                     "alt": "https://movie.douban.com/celebrity/1053559/",
    //                     "avatars": {
    //                         "large": "https://img3.doubanio.com/img/celebrity/large/28071.jpg",
    //                         "medium": "https://img3.doubanio.com/img/celebrity/medium/28071.jpg",
    //                         "small": "https://img3.doubanio.com/img/celebrity/small/28071.jpg"
    //                     },
    //                     "id": "1053559",
    //                     "name": "吉姆·斯特吉斯"
    //                 },
    //                 {
    //                     "alt": "https://movie.douban.com/celebrity/1040985/",
    //                     "avatars": {
    //                         "large": "https://img3.doubanio.com/img/celebrity/large/20016.jpg",
    //                         "medium": "https://img3.doubanio.com/img/celebrity/medium/20016.jpg",
    //                         "small": "https://img3.doubanio.com/img/celebrity/small/20016.jpg"
    //                     },
    //                     "id": "1040985",
    //                     "name": "艾比·考尼什"
    //                 }
    //             ],
    //             "collect_count": 4463,
    //             "directors": [
    //                 {
    //                     "alt": "https://movie.douban.com/celebrity/1050031/",
    //                     "avatars": {
    //                         "large": "https://img3.doubanio.com/img/celebrity/large/1390371397.56.jpg",
    //                         "medium": "https://img3.doubanio.com/img/celebrity/medium/1390371397.56.jpg",
    //                         "small": "https://img3.doubanio.com/img/celebrity/small/1390371397.56.jpg"
    //                     },
    //                     "id": "1050031",
    //                     "name": "迪安·德夫林"
    //                 }
    //             ],
    //             "genres": [
    //                 "动作",
    //                 "科幻",
    //                 "灾难"
    //             ],
    //             "id": "22266012",
    //             "images": {
    //                 "large": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2501769525.webp",
    //                 "medium": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2501769525.webp",
    //                 "small": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2501769525.webp"
    //             },
    //             "original_title": "Geostorm",
    //             "rating": {
    //                 "average": 6.4,
    //                 "max": 10,
    //                 "min": 0,
    //                 "stars": "35"
    //             },
    //             "subtype": "movie",
    //             "title": "全球风暴",
    //             "year": "2017"
    //         },
    //         {
    //             "alt": "https://movie.douban.com/subject/10512661/",
    //             "casts": [
    //                 {
    //                     "alt": "https://movie.douban.com/celebrity/1012531/",
    //                     "avatars": {
    //                         "large": "https://img1.doubanio.com/img/celebrity/large/938.jpg",
    //                         "medium": "https://img1.doubanio.com/img/celebrity/medium/938.jpg",
    //                         "small": "https://img1.doubanio.com/img/celebrity/small/938.jpg"
    //                     },
    //                     "id": "1012531",
    //                     "name": "瑞恩·高斯林"
    //                 },
    //                 {
    //                     "alt": "https://movie.douban.com/celebrity/1045259/",
    //                     "avatars": {
    //                         "large": "https://img3.doubanio.com/img/celebrity/large/1506497192.11.jpg",
    //                         "medium": "https://img3.doubanio.com/img/celebrity/medium/1506497192.11.jpg",
    //                         "small": "https://img3.doubanio.com/img/celebrity/small/1506497192.11.jpg"
    //                     },
    //                     "id": "1045259",
    //                     "name": "安娜·德·阿玛斯"
    //                 },
    //                 {
    //                     "alt": "https://movie.douban.com/celebrity/1018643/",
    //                     "avatars": {
    //                         "large": "https://img1.doubanio.com/img/celebrity/large/1464533510.69.jpg",
    //                         "medium": "https://img1.doubanio.com/img/celebrity/medium/1464533510.69.jpg",
    //                         "small": "https://img1.doubanio.com/img/celebrity/small/1464533510.69.jpg"
    //                     },
    //                     "id": "1018643",
    //                     "name": "西尔维娅·侯克斯"
    //                 }
    //             ],
    //             "collect_count": 26218,
    //             "directors": [
    //                 {
    //                     "alt": "https://movie.douban.com/celebrity/1028333/",
    //                     "avatars": {
    //                         "large": "https://img3.doubanio.com/img/celebrity/large/28153.jpg",
    //                         "medium": "https://img3.doubanio.com/img/celebrity/medium/28153.jpg",
    //                         "small": "https://img3.doubanio.com/img/celebrity/small/28153.jpg"
    //                     },
    //                     "id": "1028333",
    //                     "name": "丹尼斯·维伦纽瓦"
    //                 }
    //             ],
    //             "genres": [
    //                 "科幻",
    //                 "惊悚"
    //             ],
    //             "id": "10512661",
    //             "images": {
    //                 "large": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2501484061.webp",
    //                 "medium": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2501484061.webp",
    //                 "small": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2501484061.webp"
    //             },
    //             "original_title": "Blade Runner 2049",
    //             "rating": {
    //                 "average": 8.5,
    //                 "max": 10,
    //                 "min": 0,
    //                 "stars": "45"
    //             },
    //             "subtype": "movie",
    //             "title": "银翼杀手2049",
    //             "year": "2017"
    //         },
    //         {
    //             "alt": "https://movie.douban.com/subject/26378579/",
    //             "casts": [
    //                 {
    //                     "alt": "https://movie.douban.com/celebrity/1340497/",
    //                     "avatars": {
    //                         "large": "https://img3.doubanio.com/img/celebrity/large/1427190401.6.jpg",
    //                         "medium": "https://img3.doubanio.com/img/celebrity/medium/1427190401.6.jpg",
    //                         "small": "https://img3.doubanio.com/img/celebrity/small/1427190401.6.jpg"
    //                     },
    //                     "id": "1340497",
    //                     "name": "塔伦·埃格顿"
    //                 },
    //                 {
    //                     "alt": "https://movie.douban.com/celebrity/1031223/",
    //                     "avatars": {
    //                         "large": "https://img1.doubanio.com/img/celebrity/large/1497.jpg",
    //                         "medium": "https://img1.doubanio.com/img/celebrity/medium/1497.jpg",
    //                         "small": "https://img1.doubanio.com/img/celebrity/small/1497.jpg"
    //                     },
    //                     "id": "1031223",
    //                     "name": "科林·费尔斯"
    //                 },
    //                 {
    //                     "alt": "https://movie.douban.com/celebrity/1274374/",
    //                     "avatars": {
    //                         "large": "https://img3.doubanio.com/img/celebrity/large/1457350889.15.jpg",
    //                         "medium": "https://img3.doubanio.com/img/celebrity/medium/1457350889.15.jpg",
    //                         "small": "https://img3.doubanio.com/img/celebrity/small/1457350889.15.jpg"
    //                     },
    //                     "id": "1274374",
    //                     "name": "马克·斯特朗"
    //                 }
    //             ],
    //             "collect_count": 88274,
    //             "directors": [
    //                 {
    //                     "alt": "https://movie.douban.com/celebrity/1031852/",
    //                     "avatars": {
    //                         "large": "https://img1.doubanio.com/img/celebrity/large/9038.jpg",
    //                         "medium": "https://img1.doubanio.com/img/celebrity/medium/9038.jpg",
    //                         "small": "https://img1.doubanio.com/img/celebrity/small/9038.jpg"
    //                     },
    //                     "id": "1031852",
    //                     "name": "马修·沃恩"
    //                 }
    //             ],
    //             "genres": [
    //                 "喜剧",
    //                 "动作",
    //                 "冒险"
    //             ],
    //             "id": "26378579",
    //             "images": {
    //                 "large": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2499792043.webp",
    //                 "medium": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2499792043.webp",
    //                 "small": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2499792043.webp"
    //             },
    //             "original_title": "Kingsman: The Golden Circle",
    //             "rating": {
    //                 "average": 7.3,
    //                 "max": 10,
    //                 "min": 0,
    //                 "stars": "40"
    //             },
    //             "subtype": "movie",
    //             "title": "王牌特工2：黄金圈",
    //             "year": "2017"
    //         }
    //     ],
    //     "title": "正在上映的电影-北京",
    //     "total": 47
    // };
    var theatersModule = angular.module('moviecatTevins.in_theaters', ['ngRoute', 'moviecatTevins.service.http']);
    theatersModule.config(["$routeProvider", function ($routeProvider) {
        $routeProvider.when('/in_theaters/:pageIndex', {
            controller: 'InTheaterController',
            templateUrl: 'in_theaters/view.html'
        });
    }]);
    // theatersModule.controller('InTheaterController', ['$scope', '$http', function ($scope, $http) {
    theatersModule.controller('InTheaterController', ['$scope', '$route', '$routeParams', 'HttpService', function ($scope, $route, $routeParams, HttpService) {
        $scope.isLoading = true;//是否在加载数据
        $scope.data;//api返回的数据
        $scope.message = '';//错误信息
        var page = parseInt($routeParams.pageIndex);//页数
        var count = 2;//单页数据量
        var startIndex = (page - 1) * count;//从哪条数据开始请求
        $scope.currentPage = parseInt($routeParams.pageIndex);//当前是第几页
        // $http.get('data/in_theater.json').then(function (response) {
        //     console.log(response);
        //     if (200 == response.status) {
        //         $scope.data = response.data;
        //     } else {
        //         $scope.message = "请求失败，错误信息：" + response.status + response.statusText;
        //     }
        // }, function (err) {
        //     console.log(err);
        //     console.log(err.statusText);
        //     $scope.message = "请求失败，错误信息：" + err.status + err.statusText;
        // });
        var url = 'http://api.douban.com/v2/movie/in_theaters';//请求地址
        var params = {start: startIndex, count: count};//携带参数
        HttpService.jsonpTevins(url, params, function (data) {
            //回调函数
            console.log(data);
            $scope.data = data;
            $scope.isLoading = false;//加载数据完成
            $scope.total = data.total;//数据总共的条数
            $scope.pageTotal = Math.ceil($scope.total / count);///总的页数
            console.log("数据有几页", ": " + $scope.pageTotal);

            // $apply的作用就是让指定的表达式重新同步,不加参数就是所有的都同步
            $scope.$apply();
        });

        /*到哪一页去*/
        $scope.go = function (page) {
            if (page >= 1 && page <= $scope.pageTotal) {
                $route.updateParams({pageIndex: page});
            }
        }
    }]);
})(angular);