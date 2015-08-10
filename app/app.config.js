(function(angular) {

    angular.module("app")
        .filter('urlEncode', function(){
            return window.encodeURIComponent;
        }).config(['$routeProvider', function($routeProvider) {
            $routeProvider.

                when('/tool', {
                    templateUrl: 'partials/tool.html',
                    controller: 'ToolController'}).
                when('/settings', {
                    templateUrl: 'partials/settings.html',
                    controller: 'SettingsController'}).
                otherwise({
                    redirectTo: '/tool'
                });

        }]);
/*

    angular.module("app").run(function($rootScope, $location) {
        $rootScope.authenticated = false;
        // register listener to watch route changes
        $rootScope.$on("$routeChangeStart", function(event, next, current) {

            console.log("Route changed authenticated ="+$rootScope.authenticated);

            if (!$rootScope.authenticated) {
                // no logged user, we should be going to #login
                if (next.templateUrl == "login/layout.html") {
                    // already going to #login, no redirect needed
                } else {
                    // not going to #login, we should redirect now
                    console.log("Redirect / ");
                    //$location.path("/login");
                }
            }
        });
    });

*/
}(angular));