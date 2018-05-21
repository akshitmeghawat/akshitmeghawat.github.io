app.controller('homeCtrl', function ($scope) {

  var updateScope = function () {
    if (!$scope.$$phase) {
      $scope.$apply();
    }
  };

  $scope.baseImgUrl = "home/images/";

  $scope.career = [{
    logoHref: "logos/McKinsey_&_Company_logo.png",
    name: "McKinsey & Company",
    time: "January 2016 - April 2017",
    position: "Junior Digital Analyst",
    location: "Bangalore, India",
    description: [
      "Developed data-driven analysis & visualization tools for 10+ clients/companies from wide range of industries (insurance, pharmaceutical, shipping, government etc.). (AngularJS, Node.js, Highcharts.js)"
      // "Built an event/initiative tracking software for organizations to systematize data collection and management. It helped in prioritization of resource allocation, scheduling and cost control. Also helped in measuring KPIs for impact assessment and future planning. The software is used by >5 government organizations and >10 NGOs in Africa.",
      // "Handled unstructured data in partnership proposals for a shipping company for better route design and delivery.",
      // "Streamlined the recruitment process for a Cruise Line Agency. Created an interface which enabled recruiters to compare and review multiple applicants’ skills with minimal effort. Reduced recruitment process cycle from 2 weeks to 4 days.",
      // "Developed an end-to-end solution for an insurance firm to auto-consolidate data from various international data sources (OECD, World Bank etc.) and provide macro-level analysis."
    ]
  }, {
    logoHref: "logos/McKinsey_&_Company_logo.png",
    name: "McKinsey & Company",
    time: "January - December 2015",
    position: "Technical Intern",
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
    logoHref: "logos/ncsulogo.png",
    name: "North Carolina State University",
    time: "August 2017 - present",
    location: "Raleigh, NC, USA",
    position: "Master of Computer Science: Data Science track"
  }, {
    logoHref: "logos/vitlogo.png",
    name: "VIT University",
    time: "July 2011 - May 2015",
    location: "Vellore, India",
    position: "B. Tech. Information Technology"
  }];

  $scope.projects = [{
    name: "Spatial and Temporal Data Mining",
    time: "January - April 2018",
    tech: ["python", "tensorflow", "keras", "caffe", "R"],
    description: [
      "Implemented Convolutional Neural Network and transfer learning on satellite images to estimate economic indicators of nations.",
      "Trained a CNN model on satellite images downloaded from Google Static Map API to predict night-time light intensity of specific countries in Africa",
      "https://github.com/akshitmeghawat/csc591-predicting-poverty"
    ]
  },{
    name: "Udacity Machine Learning",
    time: "August 2017 - October 2017",
    tech: ["python", "numpy", "pandas", "scikit-learn"],
    description: [
      "Implemented ML algorithms to identify Enron Employees who may have committed fraud based on the public Enron financial and email dataset.",
      "Trained a Decision Tree Classifier with AdaBoost to identify persons of interest (POIs) with features from financial data and metadata of email dataset."
    ]
  }, {
    name: "Data Driven Decision Making",
    time: "August - November 2017",
    tech: ["python", "nltk"],
    description: [
      "Built an application (assistant) for swimming pool owners for hassle-free pool usage and maintenance.",
      "Collected data from LexisNexis universal database and online surveys. Performed text analysis (word tokenization, frequency analysis, stopwords removal etc.) on the data to identify key areas of improvement and the most important concerns/complaints for swimming pool owners.",
      "Performed calculations on swimming pool data (pH level, chemical cost etc.) and weather data to provide optimal decisions for pool usage and maintenance."
    ]
  }, {
    name: "Database Design Project",
    time: "January 2018 - March 2018",
    tech: ["SQL", "MySQL"],
    description: [
      "Developed a database system for a hotel chain to store, manipulate and search check-in information, generate reports.",
      "Utilized RDBMS concepts of access control, integrity constraints, triggers, stored procedures.",
      "Created a desktop application with Java, JDBC and MySQL."
    ]
  }, {
    name: "Kaggle: Machine Learning from Disaster",
    time: "May 2017 - Jun 2017",
    tech: ["python", "pandas", "scikit-learn", "matplotlib"],
    description: [
      "Implemented ML techniques (logistic regression, svm) to predict whether a passenger survived in the tragedy.",
      "Conducted exploratory analysis to select features with highest predicting power."
    ]
  }, {
    name: "Operations Research",
    time: "July-September 2014",
    tech: ["PERT-CPM", "C++"],
    description: ["Implemented PERT-CPM for project management enabling prediction of risk factors and critical path requirements for software product goals."]
  }, {
    name: "Object Oriented Analysis & Design",
    time: "February-April 2013",
    tech: ["C++", "Rational Rose"],
    description: ["Developed an inventory management software in C++ with the help of Rational Rose."]
  }
];

  $scope.baseCertificateUrl = "home/certificates/";
  $scope.skills_certificates = [{
    discipline: "Data Science",
    tech: ["Machine Learning", "python", "numpy", "pandas", "scikit-learn", "matplotlib", "R", "MATLAB", "tensorflow", "keras", "caffe"],
    certificates: [{
      certificate: "Coursera_N9DARAZY5X66.pdf",
      description: "Machine Learning by Andrew Ng (Stanford University) on Coursera. November, 2015."
    }, {
      certificate: "Coursera_ZU9GMJZVGX2W.pdf",
      description: "R Programming by John Hopkins University on Coursera."
    }]
  }, {
    discipline: "Web Development",
    tech: ["AngularJS", "React+Redux", "JavaScript", "Node.js", "HTML", "CSS", "PHP", "SQL", "Highcharts.js", "Lodash.js"],
    certificates: []
  }, {
    discipline: "General Computer Science",
    tech: ["C", "C++", "Java", "python", "Agile Software Development", "Test Driven Development", "Git", "Jupyter notebook"],
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
