'use strict';

/* Directive that places focus on the element it is applied to when the expression it binds to evaluates to true */
app.directive('agendaFocus', function agendaFocus($timeout) {
	return function (scope, elem, attrs) {
		scope.$watch(attrs.agendaFocus, function (newVal) {
			if (newVal) {
				$timeout(function () {
					elem[0].focus();
				}, 0, false);
			}
		});
	};
});
