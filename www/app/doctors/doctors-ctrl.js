(function () {
	'use strict';
	angular.module('alodoctorApp').controller('DoctorsCtrl', ['$stateParams', '$scope', 'alodoctorApi', DoctorsCtrl]);
	function DoctorsCtrl($stateParams, $scope, alodoctorApi) {
		var doctors = this;
		doctors.ClinicId = Number($stateParams.clinicId);

		doctors.Doctors = [];

		var initRequest = {
			ClinicId: doctors.ClinicId,
			Take: 10,
			Skip: 1,
			Term: "",
			Sort: "",
			SortType: "desc"
		};

		doctors.loadData = function () {
			if (doctors.Doctors.length == 0) {
				console.log("First Request" + JSON.stringify(initRequest));
				alodoctorApi.getDoctors(initRequest).then(function (data) {
					doctors.Doctors = data.Doctors;
					doctors.Take = data.Take;
					doctors.Skip = data.Skip;
					doctors.TotalItems = data.TotalItems;
					$scope.$broadcast('scroll.infiniteScrollComplete');
					doctors.Skip = doctors.Skip + 1;
				});
			} else if (doctors.Doctors.length > 0) {
				var doctorsRequest = {
					ClinicId: doctors.ClinicId,
					Take: initRequest.Take,
					Skip: doctors.Skip,
					Term: "",
					Sort: "",
					SortType: "desc"
				};
				console.log("Other Request" + JSON.stringify(doctorsRequest));
				if (((doctorsRequest.Skip * doctorsRequest.Take) <= doctors.TotalItems)) {
					alodoctorApi.getDoctors(doctorsRequest).then(function (data) {
						doctors.Doctors = doctors.Doctors.concat(data.Doctors);
						doctors.Take = data.Take;
						doctors.Skip = data.Skip;
						doctors.TotalItems = data.TotalItems;
						$scope.$broadcast('scroll.infiniteScrollComplete');
						doctors.Skip = doctors.Skip + 1;
					});
				}
			}
		};

		doctors.doRefresh = function () {
			console.log("Refresh Request : " + JSON.stringify(initRequest));
			alodoctorApi.getDoctors(initRequest).then(function (data) {
				doctors.Doctors = data.Doctors;
				doctors.Take = data.Take;
				doctors.Skip = data.Skip;
				doctors.TotalItems = data.TotalItems;
				$scope.$broadcast('scroll.refreshComplete');
			});
		};
	}
})();
