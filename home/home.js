app.controller('homeCtrl', function ($scope) {

  var updateScope = function () {
    if (!$scope.$$phase) {
      $scope.$apply();
    }
  };

  $scope.whoAmI = ["A software developer", "An all-rounded athlete", "An adventurous traveller"];

  $scope.baseImgUrl = "home/images/";

  $scope.career = [{
    logoHref: "logos/McKinsey_&_Company_logo.png",
    name: "McKinsey & Company",
    time: "January 2016 - present",
    position: "Junior Digital Analyst",
    location: "Bangalore, India",
    description: ["Developed digital solutions to enhance data analysis & visualization (python, numpy, pandas, scikit-learn, AngularJS, React-Redux)."]
  }, {
    logoHref: "logos/McKinsey_&_Company_logo.png",
    name: "McKinsey & Company",
    time: "January - December 2015",
    position: "Software Developer, Intern",
    location: "Bangalore, India",
    description: ["Built web applications using Agile methodology and Test Driven Development."]
  }, {
    logoHref: "logos/trusted.png",
    name: "Trusted Shares & Investments Ltd",
    time: "June - July 2013",
    position: "Software Developer, Intern",
    location: "Mumbai, India",
    description: ["Developed a suite of software programs in C++ to simulate and optimize the Turtle Trading model by Richard Dennis enabling statistical and heuristic analysis of large amounts of financial data."]
  }];

  $scope.education = [{
    logoHref: "logos/vitlogo.png",
    name: "VIT University",
    time: "July 2011 - May 2015",
    location: "Vellore, India",
    position: "B. Tech. Information Technology"
  }];

  $scope.projects = [{
    name: "Udacity Machine Learning",
    time: "August 2015",
    tech: ["python", "numpy", "pandas", "scikit-learn"],
    description: [
      "Use machine learning algorithms to identify Enron Employees who may have committed fraud based on the public Enron financial and email dataset.",
    ]
  }, {
    name: "Operations Research",
    time: "July-September 2014",
    tech: ["Linear Programming", "C++"],
    description: ["Developed a city traffic analyser using PERT analysis and Linear Programming (C++)."]
  }, {
    name: "Hospital Management System",
    time: "July-October 2014",
    tech: ["WAMP", "MySQL", "PHP", "Javascript", "Machine Learning", "R"],
    description: [
      "Performed logistic regression to predict whether a particular hospital is ideal to visit for a patient having a specific disease.",
      "Developed the system in WAMP using MySQL database."
    ]
  }, {
    name: "Object Oriented Analysis & Design",
    time: "February-April 2013",
    tech: ["C++", "Rational Rose"],
    description: ["Developed an inventory management software in C++ with the help of ‘Rational Rose’."]
  }];

  $scope.baseCertificateUrl = "home/certificates/";
  $scope.skills_certificates = [{
    discipline: "Data Science",
    tech: ["Machine Learning", "python", "numpy", "pandas", "scikit-learn", "R", "matlab"],
    certificates: [{
      certificate: "Coursera_N9DARAZY5X66.pdf",
      description: "Machine Learning by Andrew Ng (Stanford University) on Coursera. November, 2015."
    }, {
      certificate: "Coursera_ZU9GMJZVGX2W.pdf",
      description: "R Programming by John Hopkins University on Coursera."
    }]
  }, {
    discipline: "Web Development",
    tech: ["AngularJS", "React+Redux", "JavaScript", "HTML", "CSS", "PHP", "SQL", "Highcharts.js", "Lodash.js"],
    certificates: []
  }, {
    discipline: "General Computer Science",
    tech: ["C", "C++", "Java", "python", "Agile Software Development", "Test Driven Development"],
    certificates: [{
      certificate: "udacity_certificate.pdf",
      description: "Learn key concepts of computer science and build a search engine using python."
    }]
  }];

  $scope.passion = [{
    title: "An all-rounded athlete",
    note: "Football, Cricket, Badminton, Table Tennis, Endurance Running, Swimming, Cycling, Basketball, Volleyball, Field Hockey, Handball"
  }, {
    title: "An adventurous explorer",
    note: "Wants to be a globetrotter."
  }];

  $scope.photos = [{
    link: "travelling/IMG_20141215_142307.jpg",
    description: "Frogner Park, Oslo, Norway"
  }, {
    link: "travelling/P4040340.JPG",
    description: "Dead Sea, Jordan"
  }, {
    link: "travelling/DSC_0590.JPG",
    description: "Colline Du Chateau, Nice, France"
  }, {
    link: "travelling/DSC_0121.JPG",
    description: "Musée Rodin, Paris, France"
  }, {
    link: "travelling/US_398_us.JPG",
    description: "Universal Studio, Los Angeles, USA"
  }, {
    link: "travelling/US_086_gg.JPG",
    description: "Golden Gate Bridge, San Francisco, USA"
  }];


  $(document).ready(function () {
    $("#slider-slick").slick({
      dots: true
    });
  });
});