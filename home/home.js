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
      "Developed data-driven analysis & visualization tools for 10+ clients/companies from wide range of industries (insurance, pharmaceutical, shipping, government etc.)."
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
    time: "Summer 2013",
    position: "Software Developer, Intern",
    location: "Mumbai, India",
    description: ["Developed a suite of software programs in C++ to simulate and optimize the Turtle Trading model by Richard Dennis enabling statistical and heuristic analysis of large amounts of financial data."]
  }];

  $scope.education = [{
    logoHref: "logos/ncsulogo.png",
    name: "North Carolina State University",
    time: "August 2017 - May 2019",
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
    link: "https://github.com/akshitmeghawat/csc591-predicting-poverty",
    time: "Spring 2018",
    tech: ["python", "tensorflow", "keras", "R"],
    description: [
      "Implemented convolutional neural network (architecture inspired from VGG-16) with transfer learning to classify countries in Africa into 3 different economic classes.",
      // "Used CNN models to extract features from daytime satellite images (Google Static Maps API) to predict economic activity.",
      // "Due to lack of labelled data, nighttime light intensity was used as a proxy for economic factors, allowing us to scale without labelled data.",
      // "Reproduced research done by sustain.stanford.edu/predicting-poverty"
      // "https://github.com/akshitmeghawat/csc591-predicting-poverty"
    ]
  },
  // {
  //   name: "Database Design Project",
  //   time: "Spring 2018",
  //   tech: ["SQL", "MySQL", "Java", "JDBC"],
  //   description: [
  //     "Designed and developed a database system for a hotel chain to maintain check-in and staff information.",
  //     "Utilized RDBMS concepts of stored procedures, integrity constraints and triggers to generate reports, manipulate and search check-in information.",
  //     "Implemented grants and privileges to facilitate role-based access control."
  //   ]
  // },
  // {
  //   name: "Data Driven Decision Making",
  //   time: "Fall 2017",
  //   tech: ["python", "nltk"],
  //   description: [
  //     "Built an application (assistant) for swimming pool owners for hassle-free pool usage and maintenance.",
  //     "Collected data from LexisNexis universal database and online surveys. Performed text analysis (word tokenization, frequency analysis, stopwords removal etc.) on the data to identify key areas of improvement and the most important concerns/complaints for swimming pool owners.",
  //     "Performed calculations on swimming pool data (pH level, chemical cost etc.) and weather data to provide optimal decisions for pool usage and maintenance."
  //   ]
  // },
  // {
  //   name: "Asymptotic Analysis of Algorithms",
  //   time: "Spring 2018",
  //   tech: ["C++"],
  //   description: [
  //     "Performed large scale computational experiments in C++ with multiple sorting algorithms(utility, merge, heap etc) to analyze asymptotic constants for runtime and key-comparisons.",
  //     "Conducted the experiments with varying input sizes (~100k to 12.8M) and different input shapes (random, organ pipe, sawtooth)"
  //   ]
  // },
  {
    name: "Machine Learning: Enron Fraud Detection",
    link: "https://github.com/akshitmeghawat/enron-fraud-detection",
    time: "Fall 2017",
    tech: ["python", "numpy"],
    description: [
      "Implemented Decision Tree Classifier with AdaBoost from scratch to identify Enron fraud suspects with public Enron financial and email dataset (http://www.cs.cmu.edu/~./enron/).",
      // "Obtained validation F1 score of 0.6",
    ]
  },
  // {
  //   name: "Kaggle: Machine Learning from Disaster",
  //   time: "Summer 2017",
  //   tech: ["python", "pandas", "scikit-learn", "matplotlib"],
  //   description: [
  //     "Implemented ML techniques (logistic regression, svm) to predict whether a passenger survived in the tragedy.",
  //     "Conducted exploratory analysis to select features with highest predicting power."
  //   ]
  // },
  // {
  //   name: "Operations Research",
  //   time: "Fall 2014",
  //   tech: ["PERT-CPM", "C++"],
  //   description: ["Implemented PERT-CPM for project management enabling prediction of risk factors and critical path requirements for software product goals."]
  // },
  // {
  //   name: "Object Oriented Analysis & Design",
  //   time: "February-April 2013",
  //   tech: ["C++", "Rational Rose"],
  //   description: ["Developed an inventory management software in C++ with the help of Rational Rose."]
  // }
];

$scope.baseCertificateUrl = "home/certificates/";
$scope.skills_certificates = [{
  discipline: "Data Science",
  tech: ["Machine Learning", "python", "numpy", "pandas", "scikit-learn", "matplotlib", "R", "MATLAB", "tensorflow", "keras", "xgboost", "SQL", "MongoDB", "Hadoop", "Spark"],
  certificates: [{
    certificate: "Coursera_N9DARAZY5X66.pdf",
    description: "Machine Learning by Andrew Ng (Stanford University) on Coursera. November, 2015."
  }, {
    certificate: "Coursera_ZU9GMJZVGX2W.pdf",
    description: "R Programming by John Hopkins University on Coursera."
  }]
}, {
  discipline: "Web Development",
  tech: ["AngularJS", "React+Redux", "JavaScript", "Node.js", "HTML", "CSS", "PHP", "SQL", "Highcharts.js", "Lodash.js", "MySQL", "MongoDB", "PyMongo", "Bottle (python)"],
  certificates: []
}, {
  discipline: "General Computer Science",
  tech: ["C", "C++", "Java", "python", "MySQL", "MongoDB", "Agile Software Development", "Test Driven Development", "GitHub", "Jupyter notebook"],
  certificates: [{
    certificate: "udacity_certificate.pdf",
    description: "Learn key concepts of computer science and build a search engine using python."
  }]
}];

$scope.passion = [{
  title: "An all-round athlete",
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


// $(document).ready(function () {
//   $("#slider-slick").slick({
//     dots: true
//   });
// });
});
