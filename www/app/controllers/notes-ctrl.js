(function () {
	'use strict';
	angular.module('alodoctorApp').controller('NotesCtrl', ['$stateParams', 'alodoctorApi', NotesCtrl]);
	function NotesCtrl($stateParams, alodoctorApi) {
		var notes = this;
		var clinicId = Number($stateParams.clinicId);
		alodoctorApi.getClinicNotes(clinicId).then(function (data) {
			notes.Notes = data.Notes;
			console.log("Notes : " +data.TotalItems);
		});
	}
})();