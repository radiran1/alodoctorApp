(function () {
	'use strict';
	angular.module('alodoctorApp').controller('NotesCtrl', ['alodoctorApi', NotesCtrl]);
	function NotesCtrl(alodoctorApi) {
		var notes = this;
		alodoctorApi.getNotes(function (data) {
			notes.Notes = data.Notes;
		});
		
		/*		var response = alodoctorApi.getNotes();
				e.log(response);
				Notes = response.Notes;*/
	}
})();