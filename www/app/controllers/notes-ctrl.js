(function () {
	'use strict';
	angular.module('alodoctorApp').controller('NotesCtrl', ['alodoctorApi', NotesCtrl]);
	function NotesCtrl(alodoctorApi) {
		var notes = this;
		var response = alodoctorApi.getNotes();
		/*console.log(response);*/
		notes.Notes = response.Notes;
	}
})();