(function () {
	'use strict';
	angular.module('alodoctorApp').factory('alodoctorApi', ['$http', '$q', '$ionicLoading', '$timeout', alodoctorApi]);
	function alodoctorApi($http, $q, $ionicLoading, $timeout) {
		var request = JSON.parse('{"apprequest":{"ApiKey":"WIG3BmFbjWBmwDZPE5E7b2bP6L6mGTsXArdiOegc4eU=","DeviceId":"9774d56d682e549c", "RequestDateTime":"2015-01-01"},"ClinicId":"2","Take":"40","Skip":"0","Term":"‌","SortType":"desc"}');

		var currentNoteId;
		function getNotes() {
			var deferred = $q.defer();
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


		function setNoteId(noteId) {
			currentNoteId = noteId;
		}

		function getClinicNotes(clinicId) {
			var deferred = $q.defer();
			request.ClinicId = clinicId;
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

		return {
			getNotes: getNotes,
			setNoteId: setNoteId,
			getClinicNotes: getClinicNotes
		};
	};
})();
