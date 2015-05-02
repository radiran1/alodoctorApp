(function () {
    'use strict';
    angular.module('alodoctorApp').controller('NoteCtrl', ['$stateParams', 'alodoctorApi', NoteCtrl]);
    function NoteCtrl($stateParams, alodoctorApi) {
        var note = this;
        var noteId = Number($stateParams.Id);
        var response = alodoctorApi.getNote();
        note = response;
        console.log("Note is :", note);
        console.log("NoteId is :", noteId);
        console.log("Id is :", note.Id);
        console.log("Name is :", note.Name);
    }
})();