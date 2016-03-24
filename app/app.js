/**
 * Created by axetroy on 16-3-25.
 */
angular.module('app', [
    'ngRoute',
    'ngAnimate',
    'atCompare'
  ])
  .config(function () {

  })
  .run(function () {

  })
  .controller('defaultCtrl', function ($scope) {
    $scope.d = {};
    $scope.d.form1 = {};
    
    // 转账余额
    $scope.total = 1099;
  });