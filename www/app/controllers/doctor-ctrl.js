(function () {
	'use strict';
	angular.module('alodoctorApp').controller('DoctorCtrl', ['$stateParams', 'alodoctorApi', DoctorCtrl]);
	function DoctorCtrl($stateParams, alodoctorApi) {
		var doctor = this;
		console.log($stateParams)
		doctor.Id = Number($stateParams.Id);
		alodoctorApi.getDoctor(doctor.Id).then(function (data) {
			doctor = data;
			doctor.Clinics = data.Clinics;
			doctor.RelatedDiseases = data.RelatedDiseases;
			doctor.RelatedQuestions = data.RelatedQuestions;
		});
	}
})();