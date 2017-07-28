var app=angular.module("Demo",["ngRoute"])
                .config(function ($routeProvider,$locationProvider) {
                    console.log("hello");
                    $routeProvider
                        .when("/PainEntry",{
                            templateUrl: "/pain.html",
                            controller: "painController"
                        })
                        .when("/ActivityEntry",{
                            templateUrl: "/activity.html",
                            controller: "activityController"
                        })
                        .when("/AssessmentEntry",{
                            templateUrl: "/assessment.html",
                            controller: "/assessmentController"
                        })
                    $locationProvider.html5Mode({
                        enabled: true,
                        requireBase: false
                    });
                })
                .controller("painController",function ($scope,$http) {
                    $http({
                        method : "GET",
                        url    : "http://tjrapp.wpi.edu:5353/api/v1/pain-entries",
                        params : {}
                    }).then(function mySuccess(response){
                        $scope.painList=response.data;
                    },function myError(response){
                        $scope.painList=response.statusText;
                    });
                    console.log("hello");
                })
                .controller("activityController",function ($scope,$http) {
                    $http({
                        method : "GET",
                        url    : "http://tjrapp.wpi.edu:5353/api/v1/activity-entries",
                        params : {}
                    }).then(function mySuccess(response){
                        $scope.activityList=response.data;
                    },function myError(response){
                        $scope.activityList=response.statusText;
                    });
                })
                .controller("assessmentController",function ($scope) {
                    console.log("hello");
                    $scope.message="Hello Assessment"
                })