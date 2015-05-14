(function () {
	'use strict';
	angular.module('alodoctorApp').controller('NotesCtrl', ['$stateParams','$scope', 'alodoctorApi', NotesCtrl]);
	function NotesCtrl($stateParams,$scope, alodoctorApi) {
		var notes = this;
		notes.ClinicId = Number($stateParams.clinicId);
		alodoctorApi.getNotes(notes.ClinicId).then(function (data) {
			notes.Notes = data.Notes;
			$scope.doRefresh =function() {
				alodoctorApi.getNotes(notes.ClinicId).then(function (data) {
					notes.Notes = data.Notes;
					$scope.$broadcast('scroll.refreshComplete');
				});
			};
		});
	}
})();
