(function () {
  'use strict';
  angular.module('alodoctorApp').controller('NoteCtrl', ['$stateParams', 'alodoctorApi', NoteCtrl]);
  function NoteCtrl($stateParams, alodoctorApi) {
    var note = this;
    alodoctorApi.getNotes(function (data) {
      note.Id = Number($stateParams.Id);
      var model = _.chain(data.Notes)
        .find({ "Id": note.Id })
        .value();
      note.Name = model.Name;
    });
    
    /*      note.Id = Number($stateParams.Id);
  var notes = alodoctorApi.getNotes();
 
  var data = _.chain(notes.Notes)
    .find({ "Id": note.Id })
    .value();
  note.Name = data.Name;*/
  }
})();