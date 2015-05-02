(function () {
	'use strict';
	angular.module('alodoctorApp').controller('NotesCtrl', ['alodoctorApi', NotesCtrl]);
	function NotesCtrl(alodoctorApi) {
		var data = this;
		var response = alodoctorApi.getNotes();
		console.log(response);
		data.Notes = response.Notes;
	}
})();