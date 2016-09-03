var ctLearnHeaderModule = angular.module('ctLearnHeaderModule',[]);
//header ui directive
(function () {
	directive.$inject = [];
    function directive() {
        return {
            restrict: 'A',
            templateUrl: 'app/header/header.html'
        };
    }
    ctLearnHeaderModule.directive('ctLearnHeader',directive);
}());