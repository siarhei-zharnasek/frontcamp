export const validationCheck = () => {
    return {
        require: 'ngModel',
        link: function(scope, element, attr, ctrl) {
            function validationCheck(value) {
                if (value.length > 20) {
                    ctrl.$setValidity('lengthInvalid', true);
                } else {
                    ctrl.$setValidity('lengthInvalid', false);
                }
                return value;
            }
            ctrl.$parsers.push(validationCheck);
        }
    };
}