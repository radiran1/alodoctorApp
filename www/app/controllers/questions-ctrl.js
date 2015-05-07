(function () {
	'use strict';
	angular.module('alodoctorApp').controller('QuestionsCtrl', ['$stateParams', 'alodoctorApi', QuestionsCtrl]);
	function QuestionsCtrl($stateParams, alodoctorApi) {
		var questions = this;
		questions.ClinicId = Number($stateParams.clinicId);
		alodoctorApi.getQuestions(questions.ClinicId).then(function (data) {
			questions.Questions = data.Questions;
		});
	}
})();