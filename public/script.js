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
                    function JSONToCSVConvertor(JSONData,ReportTitle,ShowLabel){
                        var arrData=typeof JSONData !="object" ? JSON.parse(JSONData) : JSONData;

                        var csv='';

                        csv +="0 Indicates Male " + '\r\n\n';
                        if(ShowLabel){
                            var row="";

                            for(var index in arrData[0]){
                                row +=index+',';
                            }

                            row=row.slice(0,-1);

                            csv +=row+'\r\n';
                        }
                        for(var i=0;i<arrData.length;i++){
                            var row="";

                            for(var index in arrData[i]){
                                row +='"' + arrData[i][index]+'",';
                            }
                            row.slice(0,row.length-1);

                            csv +=row+'\r\n';

                        }
                        if(csv ==''){
                            alert('Invalid data');
                            return;
                        }

                        var fileName="Pain_";

                        fileName+=ReportTitle.replace(/ /g,"_");

                        var uri='data:text/csv:charset=utf-8,'+escape(csv);

                        var link=document.createElement("a");
                        link.href=uri;

                        link.style="visibility:hidden";
                        link.download=fileName+".csv";


                        document.body.appendChild(link);

                        link.click();
                        document.body.removeChild(link);
                    }
                    $scope.createCsv=function(){
                        JSONToCSVConvertor($scope.painList,'ALL_data_Angular_King',true);
                    }
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
                    function JSONToCSVConvertor(JSONData,ReportTitle,ShowLabel){
                        var arrData=typeof JSONData !="object" ? JSON.parse(JSONData) : JSONData;

                        var csv='';

                        csv +="0 Indicates Male " + '\r\n\n';
                        if(ShowLabel){
                            var row="";

                            for(var index in arrData[0]){
                                row +=index+',';
                            }

                            row=row.slice(0,-1);

                            csv +=row+'\r\n';
                        }
                        for(var i=0;i<arrData.length;i++){
                            var row="";

                            for(var index in arrData[i]){
                                row +='"' + arrData[i][index]+'",';
                            }
                            row.slice(0,row.length-1);

                            csv +=row+'\r\n';

                        }
                        if(csv ==''){
                            alert('Invalid data');
                            return;
                        }

                        var fileName="Activity_";

                        fileName+=ReportTitle.replace(/ /g,"_");

                        var uri='data:text/csv:charset=utf-8,'+escape(csv);

                        var link=document.createElement("a");
                        link.href=uri;

                        link.style="visibility:hidden";
                        link.download=fileName+".csv";


                        document.body.appendChild(link);

                        link.click();
                        document.body.removeChild(link);
                    }
                    $scope.createCsv=function(){
                        JSONToCSVConvertor($scope.activityList,'Data_Activity',true);
                    }
                })
                .controller("assessmentController",function ($scope) {
                    console.log("hello");
                    $scope.message="Hello Assessment"
                })