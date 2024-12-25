
function configurePhoneResource($resource) {
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