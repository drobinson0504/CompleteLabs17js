

var app = angular.module('imageApp', [])
	app.controller('imageController', function($scope) {

		$scope.sectionInfo = [
		{
			headline:  "Here is my NuYou.biz website",
			img: 'Documents/GrandCircusProjectsOct2016/Lab17/NuYoubiz.jpg',
      }];
 //     {
 //     		headline:  "My Langston project"
 //     }


	//	}];


	});

	app.directive("myImageInfo", function () {
		return {
			restrict:  "E",
			templateUrl:  "my-image.html"
		};

		});
	

