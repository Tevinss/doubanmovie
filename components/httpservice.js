/**
 * Created by Tevin on 2017/10/29 029.
 */
(function (angular) {
    var serviceModule = angular.module("moviecatTevins.service.http", []);
    serviceModule.service('HttpService', ['$window', function ($window) {
        this.jsonpTevins = function (url, params, callback) {

            //2.将url和参数拼接到一起
            var param = url.indexOf("?") == -1 ? '?' : '';
            for (var key in params) {
                param += key + '=' + params[key] + '&';
            }
            url += param;

            //3.拼接jsonp
            var suffix = 'my_jsonp_param' + Math.random().toString().replace('.', '');
            var jsonp = 'callback=' + suffix;
            url += jsonp;
            console.log("", "jsonpTevins: " + url);

            //创建script标签
            var script = $window.document.createElement("script");
            script.src = url;

            //1.挂载回调函数
            $window[suffix] = function (data) {
                callback(data);
                $window.document.body.removeChild(script);
            };
            //4.操作dom添加script脚本
            $window.document.body.appendChild(script);

        };
    }]);
})(angular);