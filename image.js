

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
	  },
	  	{
			headline:  "Pizza Dude Website",
			img: 'PizzaDudeTigers.jpg'
	  },
	  	{
			headline:  "Cool Kidz Website",
			img: 'LangstonAndMariah.jpg'
	  },
	  	{
			headline:  "Dad and the Dude Website",
			img: 'LangstonAndDon.jpg'
	  },
	  	{
			headline:  "Sunrise Detroit Website",
			img: 'SunriseDetroit.jpg'
	  },
	  	{
			headline:  "Mr Bubble Beard Website",
			img: 'Langston2.jpg'
	  },
	  	{
			headline:  "Don's Life Website",
			img: 'DonBaby.jpg'
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
