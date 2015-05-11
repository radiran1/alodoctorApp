(function () {
  'use strict';
  angular.module('alodoctorApp').controller('QuestionCtrl', ['$stateParams',QuestionCtrl]);
  function QuestionCtrl($stateParams) {
    var question = this;
    question.Id = Number($stateParams.Id);
    var url = 'http://www.alodoctor.ir/mobile/question/' + question.Id;
    question.Url = window.open(question.Url, "_self", 'hidden=yes');
  }
})();
