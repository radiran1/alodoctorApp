(function () {
  'use strict';
  angular.module('alodoctorApp').controller('NoteCtrl', ['$stateParams', '$cordovaInAppBrowser', NoteCtrl]);
  function NoteCtrl($stateParams, $cordovaInAppBrowser, alodoctorApi) {
    var note = this;
    note.Id = Number($stateParams.Id);
    var url = 'http://www.alodoctor.ir/mobile/article/' + note.Id;
    var options = {
      location: 'yes',
      clearcache: 'yes',
      toolbar: 'no'
    };
    document.addEventListener(function () {
      $cordovaInAppBrowser.open(url, '_blank', options)
        .then(function (event) {
        console.log(event);
      })
        .catch(function (event) {
        console.log(event);
      });
      $cordovaInAppBrowser.close();
    }, false);
    /*note.Url = $cordovaInAppBrowser.open(url, '_blank', options);*/
  }
})();
