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
  
  .state('intro', {
    url: '/',
    templateUrl: 'app/templates/intro.html'
  })
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
    .state('app.questions', {
    url: "/questions/:clinicId",
    views: {
      'menuContent': {
        templateUrl: "app/templates/questions.html"
      }
    }
  })
    .state('app.doctors', {
    url: "/doctors/:clinicId",
    views: {
      'menuContent': {
        templateUrl: "app/templates/doctors.html"
      }
    }
  })
    .state('app.popularnotes', {
    url: "/popularnotes/:clinicId",
    views: {
      'menuContent': {
        templateUrl: "app/templates/popularnotes.html"
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

    .state('app.doctor', {
    url: "/doctor/:Id",
    views: {
      'menuContent': {
        templateUrl: "app/templates/doctor.html"
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
  $urlRouterProvider.otherwise('/');
})
