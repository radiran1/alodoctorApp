(function () {
    'use strict';

    angular.module('alodoctorApp').controller('NoteCtrl', ['$stateParams', NoteCtrl]);

    function NoteCtrl($stateParams) {
        var data = this;
        console.log("$stateParams", $stateParams);

    };
})();