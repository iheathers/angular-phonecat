function PhoneListController(Phone) {
    this.phones = Phone.query();
    this.orderProp = 'age'

    // var self = this;
    // self.orderProp = 'age';

    // $http.get('phones/phones.json').then(function (res) {

    //     console.log("Inside http: ", this)
    //     self.phones = res.data.slice(0, 5);
    // })

    // Attach to the promise to debug when the HTTP request completes
    this.phones.$promise.then((data) => {
        // debugger; // Execution will pause here when the HTTP request completes
        console.log('HTTP request completed:', data);
    }).catch((error) => {
        console.error('HTTP request failed:', error);
    });


}

// PhoneListController.$inject = ['$http']

angular
    .module('phoneList')
    .component('phoneList', {
        templateUrl: 'phone-list/phone-list.template.html',
        controller: ['Phone', PhoneListController]
    })