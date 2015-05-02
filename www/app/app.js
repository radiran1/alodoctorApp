angular.module('alodoctorApp', ['ionic'])

  .run(function ($ionicPlatform) {
  $ionicPlatform.ready(function () {
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})
.config(function($stateProvider,$urlRouterProvider){
  $stateProvider
    .state('app', {
    url: "/app",
    abstract: true,
    templateUrl: "app/templates/menu.html"
  })
    .state('app.notes', {
    url: "/notes",
    views: {
      'menuContent': {
        templateUrl: "app/templates/notes.html"
      }
    }
  })
    .state('app.note', {
    url: "/notes/:Id",
    views: {
      'menuContent': {
        templateUrl: "app/templates/note.html"
      }
    }
  });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/notes');
})
