(function () {
  'use strict';

  angular.module('LunchCheck', [])
    .controller('LunchCheckController', LunchCheckController);

  LunchCheckController.$inject = ['$scope'];
  function LunchCheckController($scope) {
    var lunchCtrl = this;

    lunchCtrl.lunchMenu = "";
    lunchCtrl.message = "";

    lunchCtrl.checkIfTooMuch = function () {
      var items = lunchCtrl.lunchMenu.split(',').filter(function (item) {
        return item.trim() !== "";
      });

      if (lunchCtrl.lunchMenu === "") {
        lunchCtrl.message = "Please enter data first";
      } else if (items.length <= 3) {
        lunchCtrl.message = "Enjoy!";
      } else {
        lunchCtrl.message = "Too much!";
      }
    };
  }

})();
