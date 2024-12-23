function PhoneListController($http) {

    var self = this;
    self.orderProp = 'age';

    $http.get('phones/phones.json').then(function (res) {
        debugger
        console.log("Inside http: ", this)
        self.phones = res.data;
    })
}

// PhoneListController.$inject = ['$http']

angular
    .module('phoneList')
    .component('phoneList', {
        templateUrl: 'phone-list/phone-list.template.html',
        controller: ['$http', PhoneListController]
    })