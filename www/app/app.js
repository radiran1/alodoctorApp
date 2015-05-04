angular.module('alodoctorApp', ['ngCordova', 'ionic'])

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
  .config(function ($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('app', {
    url: "/app",
    abstract: true,
    templateUrl: "app/templates/menu.html"
  })
    .state('home', {
    url: "/home",
    templateUrl: "app/templates/home.html"
  })
    .state('app.notes', {
    url: "/notes/:clinicId",
    views: {
      'menuContent': {
        templateUrl: "app/templates/notes.html"
      }
    }
  })
    .state('app.note', {
    url: "/note/:Id",
    views: {
      'menuContent': {
        templateUrl: "app/templates/note.html"
      }
    }
  })
    .state('app.demo', {
    url: "/demo",
    views: {
      'menuContent': {
        templateUrl: "app/templates/demo.html"
      }
    }
  });
  $urlRouterProvider.otherwise('/home');
})
