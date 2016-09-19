app.controller('homeCtrl', function($scope){
  $scope.whoAmI = ["A software developer", "An athlete", "An adventurous traveller"];
  $scope.baseImgUrl = "home/images/";
  $scope.career = [{
    logoHref: "McKinsey_&_Company_logo.png",
    name: "McKinsey & Company",
    time: "January 2016 - present",
    position: "Junior Digital Analyst",
    description: []
  }, {
    logoHref: "McKinsey_&_Company_logo.png",
    name: "McKinsey & Company",
    time: "January 2015 - December 2015",
    position: "Software Developer, Intern",
    description: []
  }, {
    logoHref: "trusted.png",
    name: "Trusted Shares & Invst Ltd",
    time: "January 2015 - December 2015",
    position: "Software Developer, Intern",
    description: []
  }];
  $scope.education = [{
    logoHref: "vitlogo.png",
    name: "VIT University",
    time: "July 2011 - May 2015",
    position: "B. Tech. Information Technology",
    description: []
  }];
});