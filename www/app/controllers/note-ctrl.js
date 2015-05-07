(function () {
  'use strict';
  angular.module('alodoctorApp').controller('NoteCtrl', ['$stateParams', 'alodoctorApi', NoteCtrl]);
  function NoteCtrl($stateParams, alodoctorApi) {
    var note = this;
/*    alodoctorApi.getNotes().then(function (data) {
      note.Id = Number($stateParams.Id);
      var model = _.chain(data.Notes)
        .find({ "Id": note.Id })
        .value();
      note.Name = model.Name;
    });*/
  }
})();