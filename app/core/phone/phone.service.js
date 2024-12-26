
function configurePhoneResource($resource) {
    // debugger
    return $resource('phones/:phoneId.json', {}, {
        query: {
            method: 'GET',
            params: { phoneId: 'phones' },
            isArray: true
        }
    })
}

angular
    .module('core.phone')
    .factory('Phone', [
        '$resource', configurePhoneResource
    ])