app.controller('homeCtrl', function ($scope) {
  $scope.whoAmI = ["A software developer", "An athlete", "An adventurous traveller"];
  $scope.baseImgUrl = "home/images/";
  $scope.career = [{
    logoHref: "McKinsey_&_Company_logo.png",
    name: "McKinsey & Company",
    time: "January 2016 - present",
    position: "Junior Digital Analyst",
    location: "Bangalore, India",
    description: ["Developed digital solutions (iOS, Android & Web applications) to enhance data analysis & visualization (AngularJS, React+Redux, ES6, JavaScript, Highcharts.js, Lodash.js)."]
  }, {
    logoHref: "McKinsey_&_Company_logo.png",
    name: "McKinsey & Company",
    time: "January - December 2015",
    position: "Software Developer, Intern",
    location: "Bangalore, India",
    description: ["Built web applications following Agile methodology and rapid development."]
  }, {
    logoHref: "trusted.png",
    name: "Trusted Shares & Investments Ltd",
    time: "June - July 2013",
    position: "Software Developer, Intern",
    location: "Mumbai, India",
    description: ["Developed a suite of software programs in C++ to simulate and optimize the Turtle Trading model by Richard Dennis enabling statistical and heuristic analysis of large amounts of financial data."]
  }];
  $scope.education = [{
    logoHref: "vitlogo.png",
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
    name: "Database Systems",
    time: "February-May 2014",
    tech: ["WAMP", "MySQL", "PHP", "Javascript"],
    description: ["Developed a hospital management system in WAMP using MySQL database."]
  }, {
    name: "Object Oriented Analysis & Design",
    time: "February-April 2013",
    tech: ["C++", "Rational Rose"],
    description: ["Developed an inventory management software in C++ with the help of ‘Rational Rose’."]
  }];
});