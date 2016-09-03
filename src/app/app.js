var learntrack = angular.module('learntrack', ['ui.router','ctLearnHeaderModule','ctLearn']);

//configuration block
(function () {
	// config.$inject = ['$provide', '$httpProvider'];
	function config($provide, $httpProvider, $urlRouterProvider) {
		$urlRouterProvider.otherwise("/learn"); //default path
	};
	learntrack.config(config);
} ());