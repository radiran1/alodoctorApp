(function () {
	'use strict';
	angular.module('alodoctorApp').controller('PopularNotesCtrl', ['$stateParams', 'alodoctorApi', PopularNotesCtrl]);
	function PopularNotesCtrl($stateParams, alodoctorApi) {
		var popularnotes = this;
		popularnotes.ClinicId = Number($stateParams.clinicId);
		alodoctorApi.getPopularNotes(popularnotes.ClinicId).then(function (data) {
			popularnotes.Notes = data.Notes;
		});
	}
})();