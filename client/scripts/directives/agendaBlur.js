'use strict';

/* Directive that executes an expression when the element it is applied to loses focus */
app.directive('agendaBlur', function () {
	return function (scope, elem, attrs) {
		elem.bind('blur', function () {
			scope.$apply(attrs.agendaBlur);
		});

		scope.$on('$destroy', function () {
			elem.unbind('blur');
		});
	};
});
