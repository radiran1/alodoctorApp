(function () {
	'use strict';
	angular.module('alodoctorApp').controller('DoctorsCtrl', ['$stateParams','$scope', 'alodoctorApi', DoctorsCtrl]);
	function DoctorsCtrl($stateParams,$scope, alodoctorApi) {
		var doctors = this;
		doctors.ClinicId = Number($stateParams.clinicId);
		alodoctorApi.getDoctors(doctors.ClinicId).then(function (data) {
			doctors.Doctors = data.Doctors;
			$scope.doRefresh =function() {
				alodoctorApi.getDoctors(doctors.ClinicId).then(function (data) {
					doctors.Doctors = data.Doctors;
					$scope.$broadcast('scroll.refreshComplete');
				});
			};
		});
	}
})();
