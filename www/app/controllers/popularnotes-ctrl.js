(function () {
	'use strict';
	angular.module('alodoctorApp').controller('PopularNotesCtrl', ['$stateParams','$scope', 'alodoctorApi', PopularNotesCtrl]);
	function PopularNotesCtrl($stateParams,$scope, alodoctorApi) {
		var popularnotes = this;
		popularnotes.ClinicId = Number($stateParams.clinicId);
		alodoctorApi.getPopularNotes(popularnotes.ClinicId).then(function (data) {
			popularnotes.Notes = data.Notes;
			$scope.doRefresh =function() {
				alodoctorApi.getPopularNotes(popularnotes.ClinicId).then(function (data) {
					popularnotes.Notes = data.Notes;
					$scope.$broadcast('scroll.refreshComplete');
				});
			};
		});
	}
})();
