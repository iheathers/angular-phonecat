describe('phoneList', function () {

    beforeEach(module('phoneList'));

    describe('controller', function () {
        var $httpBackend, ctrl;

        // The injector ignores leading and trailing underscores here (i.e. _$httpBackend_).
        // This allows us to inject a service and assign it to a variable with the same name
        // as the service while avoiding a name conflict.
        beforeEach(inject(function ($componentController, _$httpBackend_) {
            $httpBackend = _$httpBackend_;
            $httpBackend.expectGET('phones/phones.json')
                .respond([{ name: 'Nexus S' }, { name: 'Motorola DROID' }]);

            ctrl = $componentController('phoneList');
        }));

        it('should create a `phones` property with 2 phones fetched with `$http`',
            function () {
                expect(ctrl.phones).toBeUndefined();

                $httpBackend.flush();
                expect(ctrl.phones).toEqual([{ name: 'Nexus S' }, { name: 'Motorola DROID' }])
            }
        )

    });

});