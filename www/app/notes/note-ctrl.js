(function () {
  'use strict';
  angular.module('alodoctorApp').controller('NoteCtrl', ['$stateParams', NoteCtrl]);
  function NoteCtrl($stateParams) {
    var note = this;
    note.Id = Number($stateParams.Id);
  }
})();
