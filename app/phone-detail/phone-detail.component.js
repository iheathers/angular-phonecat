
function PhoneDetailController($routeParams, $http) {

    // this.phoneId = $routeParams.phoneId;
    var self = this;

    // debugger

    $http
        .get('phones/' + $routeParams.phoneId + '.json')
        .then(function (response) {
            self.phone = response.data
        })


}

angular
    .module('phoneDetail')
    .component('phoneDetail', {
        templateUrl: 'phone-detail/phone-detail.template.html',
        controller: ['$routeParams', '$http',
            PhoneDetailController
        ]
    })