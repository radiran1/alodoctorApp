(function () {
	'use strict';
	angular.module('alodoctorApp').controller('DoctorsCtrl', ['$stateParams', 'alodoctorApi', DoctorsCtrl]);
	function DoctorsCtrl($stateParams, alodoctorApi) {
		var doctors = this;
		doctors.ClinicId = Number($stateParams.clinicId);
		alodoctorApi.getDoctors(doctors.ClinicId).then(function (data) {
			doctors.Doctors = data.Doctors;
		});
	}
})();