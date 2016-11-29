

var app = angular.module('imageApp', []);
	app.controller('imageController', function($scope) {

		$scope.sectionInfo = [
		{
			headline:  "Here is my NuYou.biz website",
			img: 'NuYoubiz.jpg'
      },
      	{
			headline:  "Langston's Website",
			img: 'Langston1.jpg'
      },
      	{
			headline:  "Dinosaur Website",
			img: 'Dinosaur.jpg'
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
