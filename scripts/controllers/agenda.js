// 'use strict';
//
// controller('AgendaCtrl', function AgendaCtrl($scope, $location, $firebaseArray) {
// 	var url = 'https://todomvc-angular.firebaseio.com/todos';
// 	var fireRef = new Firebase(url);
//
// 	// Bind the agendas to the firebase provider.
// 	$scope.agendas = $firebaseArray(fireRef);
// 	$scope.newAgenda = '';
// 	$scope.editedAgenda = null;
//
// 	$scope.$watch('agendas', function () {
// 		var total = 0;
// 		var remaining = 0;
// 		$scope.agendas.forEach(function (agenda) {
// 			// Skip invalid entries so they don't break the entire app.
// 			if (!agenda || !agenda.title) {
// 				return;
// 			}
//
// 			total++;
// 			if (agenda.completed === false) {
// 				remaining++;
// 			}
// 		});
// 		$scope.totalCount = total;
// 		$scope.remainingCount = remaining;
// 		$scope.completedCount = total - remaining;
// 		$scope.allChecked = remaining === 0;
// 	}, true);
//
// 	$scope.addAgenda = function () {
// 		var newAgenda = $scope.newAgenda.trim();
// 		if (!newAgenda.length) {
// 			return;
// 		}
// 		$scope.agendas.$add({
// 			title: newAgenda,
// 			completed: false
// 		});
// 		$scope.newAgenda = '';
// 	};
//
// 	$scope.editAgenda = function (agenda) {
// 		$scope.editedAgenda = agenda;
// 		$scope.originalAgenda = angular.extend({}, $scope.editedAgenda);
// 	};
//
// 	$scope.doneEditing = function (agenda) {
// 		$scope.editedAgenda = null;
// 		var title = agenda.title.trim();
// 		if (title) {
// 			$scope.agendas.$save(agenda);
// 		} else {
// 			$scope.removeAgenda(agenda);
// 		}
// 	};
//
// 	$scope.revertEditing = function (agenda) {
// 		agenda.title = $scope.originalAgenda.title;
// 		$scope.doneEditing(agenda);
// 	};
//
// 	$scope.removeAgenda = function (agenda) {
// 		$scope.agendas.$remove(agenda);
// 	};
//
// 	$scope.clearCompletedAgendas = function () {
// 		$scope.agendas.forEach(function (agenda) {
// 			if (agenda.completed) {
// 				$scope.removeAgenda(agenda);
// 			}
// 		});
// 	};
//
// 	$scope.markAll = function (allCompleted) {
// 		$scope.agendas.forEach(function (agenda) {
// 			agenda.completed = allCompleted;
// 			$scope.agendas.$save(agenda);
// 		});
// 	};
//
// 	if ($location.path() === '') {
// 		$location.path('/');
// 	}
// 	$scope.location = $location;
// });
