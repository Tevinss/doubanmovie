/**
 * Created by tevins on 2017/10/30/0030.
 */

(function (angular) {
    var module = angular.module('moviecat.directives.auto_focus', []);
    module.directive('autoFocus', ['$location', function ($location) {
        //Runs during compile
        return {
            //name: '',
            //priority: 1,
            //terminal: true,
            //scope: {},//{}=isolate,true=child,false/undefined =
            //controller: 'ngModel',//Array=multiple requires,?=option
            restrict: 'A',      //E:Element(元素)，A=Attribute(属性)，C=Class(类)，M=Comment，自定义的这个指令可以在哪里使用
            //template: '',
            //templateUrl: '',
            //replace: true,
            //transclude: true,
            //compile: function () {},
            link: function ($scope, iElm, iAttrs, controller) {
                $scope.$location = $location;
                $scope.$watch('$location.path()', function (now, old) {
                    // console.log(iElm);
                    var aLink = iElm.children().attr('href');
                    var type = aLink.replace(/#(\/.+?)\/\d+/, '$1');
                    if (now.startsWith(type)) {
                        // 访问的是当前链接
                        iElm.parent().children().removeClass('active');
                        iElm.addClass('active');
                    }
                });
            }
        };
    }]);
})(angular);
