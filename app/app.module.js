/**
 * Created by djdapz on 7/15/15.
 */

(function(angular) {
    angular.module("app.tool", []);
    angular.module("app.settings", []);


    angular.module("app", ["ngRoute",
        "ngResource",
        "app.tool",
        "app.settings"]);

}(angular));