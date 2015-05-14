(function () {
	'use strict';
	angular.module('alodoctorApp').controller('QuestionsCtrl', ['$stateParams','$scope', 'alodoctorApi', QuestionsCtrl]);
	function QuestionsCtrl($stateParams,$scope, alodoctorApi) {
		var questions = this;
		questions.ClinicId = Number($stateParams.clinicId);
		alodoctorApi.getQuestions(questions.ClinicId).then(function (data) {
			questions.Questions = data.Questions;
			$scope.doRefresh =function() {
				alodoctorApi.getQuestions(questions.ClinicId).then(function (data) {
					questions.Questions = data.Questions;
					$scope.$broadcast('scroll.refreshComplete');
				});
			};
		});
	}
})();
