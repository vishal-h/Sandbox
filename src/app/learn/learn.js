var ctLearn = angular.module('ctLearn', ['ui.router']);
(function () {
	config.$inject = ['$stateProvider'];
	function config($stateProvider) {
		$stateProvider
			.state('learn', { url: "/learn", templateUrl: "app/learn/learn.html" })
			.state('learn.item1', { url: "/item2", templateUrl: "app/learn/item1/item1.html" })
            .state('learn.item1.1', { url: "/item1.1", templateUrl: "app/learn/item1/item1.1.html" })
            .state('learn.item1.2', { url: "/item1.2", templateUrl: "app/learn/item1/item1.2.html" })
			.state('learn.item2', { url: "/item2", templateUrl: "app/learn/item2/item2.html" })
            .state('learn.item2.1', { url: "/item2.1", templateUrl: "app/learn/item2/item2.1.html" })
            .state('learn.item2.2', { url: "/item2.2", templateUrl: "app/learn/item2/item2.2.html" })
			.state('learn.item3', { url: "/item3", templateUrl: "app/learn/item3/item3.html" })
            .state('learn.item3.1', { url: "/item3.1", templateUrl: "app/learn/item3/item3.1.html" })
            .state('learn.item3.2', { url: "/item3.2", templateUrl: "app/learn/item3/item3.2.html" });
	}
	ctLearn.config(config);
}());