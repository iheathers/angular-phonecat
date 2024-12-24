function config($routeProvider) {
    $routeProvider
        .when('/phones', {
            template: '<phone-list></phone-list>'
        })
        .when('/phones/:phoneId', {
            template: '<phone-detail></phone-detail>'
        })
        .otherwise('/phones')
}

angular
    .module('phonecatApp')
    .config(['$routeProvider', config])