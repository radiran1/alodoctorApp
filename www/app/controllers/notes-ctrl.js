(function () {
	'use strict';
	angular.module('alodoctorApp').controller('NotesCtrl', ['$stateParams', 'alodoctorApi', NotesCtrl]);
	function NotesCtrl($stateParams, alodoctorApi) {
		var notes = this;
		notes.ClinicId = Number($stateParams.clinicId);
		alodoctorApi.getNotes(notes.ClinicId).then(function (data) {
			notes.Notes = data.Notes;
		});
	}
})();