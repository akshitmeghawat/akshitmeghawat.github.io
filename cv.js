app.controller('cvCtrl', function($scope){
  $scope.contactInfo = {
    email: "meghawat.akshit@gmail.com",
    number: "8870532436"
  };
  $scope.name = "Akshit Meghawat";
  $scope.data = [
    {
      sectionName: "Professional Experience",
      subSections: [
        {
          position: "Junior Digital Analyst"
        }
      ]
    }
  ];
  $scope.downloadCV = function(){
    console.log("yo");
  };
});