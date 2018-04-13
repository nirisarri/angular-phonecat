'use strict';

// Define the `phonecatApp` module
var phonecatApp = angular.module('phonecatApp', ['as.sortable']);

// Define the `PhoneListController` controller on the `phonecatApp` module
phonecatApp.controller('PhoneListController', function PhoneListController($scope) {
  $scope.phones = [
    {
      name: 'Nexus S',
      snippet: 'Fast just got faster with Nexus S.'
    }, {
      name: 'Motorola XOOM™ with Wi-Fi',
      snippet: 'The Next, Next Generation tablet.'
    }, {
      name: 'MOTOROLA XOOM™',
      snippet: 'The Next, Next Generation tablet.'
    }
  ];
  $scope.selectedItems = ["item A"];
  $scope.items = [
    "item 1",
    "item 2",
    "item 3", 
    "item 4", 
    "item 5",
    "item 6",
    "item 7",
    "item 8",
    "item 9",
    "item 10",
    "item 11",
    "item 12",
    "item 13",
    "item 14",
    "item 15"];

  $scope.dragControlListeners = {
    accept: function (sourceItemHandleScope, destSortableScope) {return true},
  };

  
});
