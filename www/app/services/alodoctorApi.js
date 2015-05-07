(function () {
	'use strict';
	angular.module('alodoctorApp').factory('alodoctorApi', ['$http', '$q', '$ionicLoading', '$timeout', alodoctorApi]);
	function alodoctorApi($http, $q, $ionicLoading, $timeout) {

		var now = new Date();
		var requestDatetime = now.getFullYear() + '-' + (now.getMonth() + 1) + '-' + now.getDate();

		var apprequest = JSON.parse('{"ApiKey":"","DeviceId":"","RequestDateTime":"2015-01-01"}');
		apprequest.ApiKey = "WIG3BmFbjWBmwDZPE5E7b2bP6L6mGTsXArdiOegc4eU=";
		apprequest.DeviceId = "9774d56d682e549c";
		apprequest.RequestDateTime = requestDatetime;

		function getNotes(clinicId) {
			var deferred = $q.defer();
			var request = JSON.parse('{"apprequest":{"ApiKey":"","DeviceId":"", "RequestDateTime":""},"ClinicId":"","Take":"","Skip":"","Term":"‌","Sort":"‌","SortType":""}');
			request.apprequest = apprequest;
			request.ClinicId = clinicId;
			request.Take = 40;
			request.Skip = 0;
			request.Term = "";
			request.SortType = "desc";
			$ionicLoading.show({ template: '... در حال بارگذاری اطلاعات' });
			$http({
				url: 'http://api.alodoctor.ir/note/getnotes',
				method: "POST",
				data: JSON.stringify(request),
				headers: { 'Content-Type': 'application/json;charset=utf-8' }
			}).success(function (data) {
				$timeout(function () {
					$ionicLoading.hide();
					deferred.resolve(data);
				}, 3000);
			}).error(function () {
				$timeout(function () {
					$ionicLoading.hide();
					deferred.reject();
				});

			});

			return deferred.promise;
		};

		function getPopularNotes(clinicId) {
			var deferred = $q.defer();
			var request = JSON.parse('{"apprequest":{"ApiKey":"","DeviceId":"", "RequestDateTime":""},"ClinicId":"","Take":"","Skip":"","Term":"‌","Sort":"‌","SortType":""}');
			request.apprequest = apprequest;
			request.ClinicId = clinicId;
			request.Take = 40;
			request.Skip = 0;
			request.Term = "";
			request.Sort = "click";
			request.SortType = "desc";
			$ionicLoading.show({ template: '... در حال بارگذاری اطلاعات' });
			$http({
				url: 'http://api.alodoctor.ir/note/getnotes',
				method: "POST",
				data: JSON.stringify(request),
				headers: { 'Content-Type': 'application/json;charset=utf-8' }
			}).success(function (data) {
				$timeout(function () {
					$ionicLoading.hide();
					deferred.resolve(data);
				}, 3000);
			}).error(function () {
				$timeout(function () {
					$ionicLoading.hide();
					deferred.reject();
				});

			});

			return deferred.promise;
		};

		function getQuestions(clinicId) {
			var deferred = $q.defer();
			var request = JSON.parse('{"apprequest":{"ApiKey":"","DeviceId":"", "RequestDateTime":""},"ClinicId":"","Take":"","Skip":"","Term":"‌","Sort":"‌","SortType":""}');
			request.apprequest = apprequest;
			request.ClinicId = clinicId;
			request.Take = 40;
			request.Skip = 0;
			request.Term = "";
			request.SortType = "desc";
			$ionicLoading.show({ template: '... در حال بارگذاری اطلاعات' });
			$http({
				url: 'http://api.alodoctor.ir/question/getquestions',
				method: "POST",
				data: JSON.stringify(request),
				headers: { 'Content-Type': 'application/json;charset=utf-8' }
			}).success(function (data) {
				$timeout(function () {
					$ionicLoading.hide();
					deferred.resolve(data);
				}, 1000);
			}).error(function () {
				$timeout(function () {
					$ionicLoading.hide();
					deferred.reject();
				});

			});

			return deferred.promise;
		};

		function getDoctors(clinicId) {
			var deferred = $q.defer();
			var request = JSON.parse('{"apprequest":{"ApiKey":"","DeviceId":"", "RequestDateTime":""},"ClinicId":"","Take":"","Skip":"","Term":"‌","Sort":"‌","SortType":""}');
			request.apprequest = apprequest;
			request.ClinicId = clinicId;
			request.Take = 40;
			request.Skip = 0;
			request.Term = "";
			request.SortType = "desc";
			$ionicLoading.show({ template: '... در حال بارگذاری اطلاعات' });
			$http({
				url: 'http://api.alodoctor.ir/doctor/getdoctors',
				method: "POST",
				data: JSON.stringify(request),
				headers: { 'Content-Type': 'application/json;charset=utf-8' }
			}).success(function (data) {
				$timeout(function () {
					$ionicLoading.hide();
					deferred.resolve(data);
				}, 1000);
			}).error(function () {
				$timeout(function () {
					$ionicLoading.hide();
					deferred.reject();
				});

			});

			return deferred.promise;
		};

		function getDoctor(Id) {
			var deferred = $q.defer();
			var request = JSON.parse('{"apprequest":{"ApiKey":"","DeviceId":"", "RequestDateTime":""},"Id":""}');
			request.apprequest = apprequest;
			request.Id = Id;
			$ionicLoading.show({ template: '... در حال بارگذاری اطلاعات' });
			$http({
				url: 'http://api.alodoctor.ir/doctor/getdoctor',
				method: "POST",
				data: JSON.stringify(request),
				headers: { 'Content-Type': 'application/json;charset=utf-8' }
			}).success(function (data) {
				$timeout(function () {
					$ionicLoading.hide();
					deferred.resolve(data);
				}, 1000);
			}).error(function () {
				$timeout(function () {
					$ionicLoading.hide();
					deferred.reject();
				});

			});

			return deferred.promise;
		};

		return {
			getNotes: getNotes,
			getPopularNotes: getPopularNotes,
			getQuestions: getQuestions,
			getDoctors: getDoctors,
			getDoctor: getDoctor,
		};
	};
})();
