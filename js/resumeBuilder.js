//Biography
var bio = {
	"name" : "Leigh Mandalov",
	"role" : "Web Devloper",
	"contacts" : {
		"mobile" : "+61422072413",
		"email" : "maynarde.sc2@gmail.com",
		"github" : "maynarde84",
		"twitter" : "@maynardesc2",
		"location" : "Adelaide"
	},
	"welcomeMessage" : "Welcome to my resume!",
	"skills" : ["Handsome", "Guitarist", "Clever"],
	"biopic" : "images/maynarde.png"
};

bio.display = function() {
	var formattedName = HTMLheaderName.replace("%data%", bio.name);
	var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
	$("#header").prepend(formattedRole);
	$("#header").prepend(formattedName);

	
	var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
	$("#topContacts").append(formattedMobile);
		
	var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
	$("#topContacts").append(formattedEmail);
		
	var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
	$("#topContacts").append(formattedGithub);
	
	var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
	$("#topContacts").append(formattedTwitter);
	
	var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
	$("#topContacts").append(formattedLocation);
	
	var formattedPic = HTMLbioPic.replace("%data%", bio.biopic);
	$("#header").append(formattedPic);
	
	var formattedMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
	$("#header").append(formattedMessage);
	
	if (bio.skills.length > 0) {
		$("#header").append(HTMLskillsStart);
	
		var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
		$("#header").append(formattedSkill);
		formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
		$("#header").append(formattedSkill);
		formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
		$("#header").append(formattedSkill);
	}
	
}

bio.display();

//Work Experience
var work = {
  "jobs": [
    {
      "employer": "Ultra Electronics Avalon Systems",
      "title": "Software Engineer",
      "location": "Mawson Lakes, SA",
      "dates": "July 2008 - Current",
      "description": "Have been working in an office team environment and enjoying using my brain to solve issues."
    },
    {
      "employer": "EB Games",
      "title": "Sales Assistant",
      "location": "West Lakes, SA",
      "dates": "May 2005 - May 2008",
      "description": "I was a register monkey for a video games retailer, learned a lot about people and how they feel when they can't return broken things."
    },
	{
      "employer": "Dominos Pizza",
      "title": "Pizza Delivery Guy",
      "location": "West Lakes, SA",
      "dates": "Feb 2002 - March 2004",
      "description": "I got to deliver pizza at a whopping 9 dollars an hour best time of my life."
    }
  ]
};

work.display = function() {
	var jobCount = work.jobs.length;
	
	for (var i = 0; i < jobCount; i++) {
		$("#workExperience").append(HTMLworkStart);
		
		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);	
		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);
		
		var formattedEmployerTitle = formattedEmployer + formattedTitle;
		
		$(".work-entry:last").append(formattedEmployerTitle);
		
		var formattedDate = HTMLworkDates.replace("%data%", work.jobs[i].dates);
		$(".work-entry:last").append(formattedDate);
		
		var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[i].location);
		$(".work-entry:last").append(formattedLocation);
		
		var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[i].description);
		$(".work-entry:last").append(formattedDescription);
	}
}

work.display();

//Projects
var projects = {
	"projects": [
		{
			"title" : "Interactive Resume",
			"dates" : "April 2015",
			"description" : "Making a resume using JavaScript",
			"images" : ["images/197x148.gif", "images/197x148.gif"]
		}
	]
}

projects.display = function() {
	for (project in projects.projects) {
		$("#projects").append(HTMLprojectStart);
		
		var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
		$(".project-entry:last").append(formattedTitle);
		
		var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
		$(".project-entry:last").append(formattedDates);
		
		var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
		$(".project-entry:last").append(formattedDescription);
		
		if (projects.projects[project].images.length > 0) {
			for (image in projects.projects[project].images) {
				var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
				$(".project-entry:last").append(formattedImage);
			}
		}
	}
}

projects.display();

//Education and Online Courses
var education = {
	"schools": [
		{
			"name" : "UniSA",
			"location" : "Mawson Lakes",
			"degree" : "Bachelor of Multimedia",
			"majors" : ["Computer Science"],
			"dates" : "2004 - 2007",
			"url" : "http://www.unisa.edu.au/"
		}
	],
	"onlineCourses" : [
		{
			"title" : "Front-End Web Developer Nanodegree",
			"school" : "Udacity",
			"date" : "2015",
			"url" : "http://www.udacity.com/"
		}
	]
};

education.display = function() {
	for (school in education.schools) {
		$("#education").append(HTMLschoolStart);
		
		var formattedName = HTMLschoolName.replace("%data%", education.schools[school].name);
		var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
		
		var formattedNameDegree = formattedName + formattedDegree;
		$(".education-entry:last").append(formattedNameDegree);
		
		var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
		$(".education-entry:last").append(formattedDates);
		
		var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
		$(".education-entry:last").append(formattedLocation);
		
		if (education.schools[school].majors.length > 0) {
			for (majors in education.schools[school].majors) {
				var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors[majors]);
				$(".education-entry:last").append(formattedMajor);
			}
		}
	}	
	
	for (course in education.onlineCourses) {
		$(".education-entry:last").append(HTMLonlineClasses);
		
		var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title);
		var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);
		
		var formattedTitleSchool = formattedTitle + formattedSchool;
		$(".education-entry:last").append(formattedTitleSchool);
		
		var formattedDates = HTMLonlineDates.replace("%data%", education.onlineCourses[course].date);
		$(".education-entry:last").append(formattedDates);
		
		var formattedURL = HTMLonlineURL.replace("%data%", education.onlineCourses[course].url);
		$(".education-entry:last").append(formattedURL);
	}
}

education.display();

//Where I've Lived and Worked
function mapDisplay() {
	$("#mapDiv").append(googleMap);
}

mapDisplay();

//Footer
function populateFooter() {
	var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
	$("#footerContacts").append(formattedMobile);
		
	var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
	$("#footerContacts").append(formattedEmail);
		
	var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
	$("#footerContacts").append(formattedGithub);
	
	var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
	$("#footerContacts").append(formattedTwitter);
	
	var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
	$("#footerContacts").append(formattedLocation);
}

populateFooter();

