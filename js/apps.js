 var app = angular.module('MyApp', [])
        app.controller('MyController', function ($scope) {
            $scope.Campaigns = [{
               Id: 1,
                Name: 'Spotify',
                Logo: 'logo-spotify.png'
            }, {
                Id: 2,
                Name: 'Coca-Cola Fall 2015',
                Logo: 'logo-coca-cola.png'
            }, {
                Id: 3,
                Name: 'Bud Light Summer 2015',
                Logo: 'logo-spotify.png'
            }]; 
        });
var i=3;
var altoPantalla= $(window).height();
$(document).ready(function(){
	$('.side-bar').css("height",altoPantalla);
	$('.side-bar #tab-1').css("height",altoPantalla-80);
	
   setInterval(alertFunc, 3000);
});
$( window ).resize(function() {
  $('.side-bar').css("height",altoPantalla);
	$('.side-bar #tab-1').css("height",altoPantalla-80);
});
function alertFunc() {
	$( ".mod-"+i ).show( 1000, function() {
      $( this ).addClass("animate-show");
    });
    $( ".mod-"+i ).addClass("animate-show-hr");
   i=i-1;
}