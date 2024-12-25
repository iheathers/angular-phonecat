

angular
    .module('core')
    .filter('checkmark', function () {

        console.log("Registered")

        return function (input) {
            // debugger
            console.log({ input })
            return input ? '\u2713' : '\u2718'
        }
    })