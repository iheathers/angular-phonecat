angular
    .module('phonecatApp')
    .animation('.phone', function phoneAnimationFactory() {
        return {
            addClass: animateIn,
            removeClass: animateOut
        };

        function animateIn(element, className, done) {
            console.log("Adding class: ", className);
            if (className !== 'selected') return;

            element
                .css({
                    display: 'block',
                    position: 'absolute',
                    top: '500px',
                    left: '0px'
                })
                .animate(
                    { top: '0px' },
                    500, // Duration of animation
                    done
                );

            return function animateInEnd(wasCanceled) {
                if (wasCanceled) element.stop();
            };
        }

        function animateOut(element, className, done) {
            console.log("Removing class: ", className);
            if (className !== 'selected') return;

            element
                .css({
                    position: 'absolute',
                    top: '0px',
                    left: '0px'
                })
                .animate(
                    { top: '-500px' },
                    500, // Duration of animation
                    done
                );

            return function animateOutEnd(wasCanceled) {
                if (wasCanceled) element.stop();
            };
        }
    });
