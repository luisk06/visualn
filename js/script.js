// Define the messages used in the game.
var messages = {
	"Help": {
		"Title": "Help",
		"Subtitle": "Some useful Links",
		"Message": "<p><a href='http://monogatari.hyuchia.com/documentation/'>Documentation</a> - Everything you need to know.</p><p><a href='http://monogatari.hyuchia.com/demo/'>Demo</a> - A simple Demo.</p>"
	}
}

// Define the notifications used in the game
var notifications = {
	"Welcome": {
		title: "Welcome",
		body: "This is the Monogatari VN Engine",
		icon: ""
	}
}

// Define the Particles JS Configurations used in the game
var particles = {

}

// Define the music used in the game.
var music = {

}

// Define the voice files used in the game.
var voice = {

}

// Define the sounds used in the game.
var sound = {

}

// Define the videos used in the game.
var videos = {
		"apocalypse":"test.mp4"
}

// Define the images used in the game.
var images = {

}

// Define the backgrounds for each scene.
var scenes = {
	  "a1": "computer-in-dark.jpg",
    "a2": "tired-man.png",
		"s1": "cartman-background2.png",
		"c1": "car1.png",
		"c2": "car2.png",
		"c3": "car3.png",
		"c4": "car4.png",
}

// Define the Characters
var characters = {
	"h": {
		"Name": "Shitty Hero",
		"Color": "#5bcaff",
		"Images":{ // Images Identifier for the "Show" statement.
            "Normal": "werewolf.png"
        }
	},
	"b":{
		"Name": "WohKAh MahYeah",
		"Color":"#a100ad",
		"Images":{ // Images Identifier for the "Show" statement.
            "Normal": "werewolf.png"
        },
		"Face":"Gazoo.png"
	},
	"j":{
		"Name": "Pahtae Soahlah",
		"Color":"#a100ad",
		"Images":{ // Images Identifier for the "Show" statement.
            "Normal": "dragon.jpg"
        }
	}
}

var script = {
	// The game starts here.

	"Start": [
		"notify Welcome 500",
		"scene a1 with slideInUp",
		"",
		"show b Normal left doms with slideInUp",
		"",
		"show h Normal center with slideInUp",
		"",
		"show j Normal center doms with slideInUp",
		//"show b Normal right with fadeIn",
		/*{"Input": {
				"Text": "What is your name?",
				"Validation": function(input) {
					return input.trim().length > 0;
					alert("hello")
				},
				"Save": function(input) {
					storage.player.Name = input;
				},
				"Warning": "You must enter a name!"
			}
		},*/
		"",
		"h <p class='typingE'>Hi lui Welcome to DisappointmentLand!</p>",
		"sdfre",
		"222",
		"scene c1 with fadeInLeft",
		"adfs",
		"adfs",
		"scene c2 with bounceIn",
		"sdfas",
		"adfs",
		"scene c3 with lightSpeedIn",
		"asffa",
		"adfs",
		"scene c4 with rotateIn",
		"b Why are you talking, you dipshit <b>it's not</b> your turn",
		"h Whatever, I don't even get paid",

		{"Choice": {
				"Dialog": "b Have you already read some <a href='http://www.google.com'>documentation</a>?",
				"Yes": {
					"Text": "Yes",
					"Do": "jump Yes"
				},
				"No": {
					"Text": "No",
					"Do": "jump No"
				},
				"Maybe": {
					"Text": "Maybe",
					"Do": "jump Maybe"
				}
			}
		}
	],

	"Yes": [
		"scene a1",
		"h That's awesome!",
		"h Then you are ready to go ahead and create an amazing Game!",
		"play video apocalypse",
		"scene a1 with fadeOut",
		"scene a2 with fadeInLeft",
		"h I can't wait to see what story you'll tell!",
		"b Nah, you just got distracted watching some juicy ...",
		"end"
	],

	"No": [

		"b What are you waiting you lazy fuck.",

		"b This is not going to be completed by itself",

		"h Go ahead and create an amazing Game!",
		"h I can't wait to see what story you'll tell!",
		"end"
	],

	"Maybe": [

		"b For God's sake. That's not an answer.",

		"b I put that option just to be polite",

		{"Choice": {
				"Dialog": "b Have you already read some documentation?",
				"Yes": {
					"Text": "Yes",
					"Do": "jump Yes"
				},
				"No": {
					"Text": "No",
					"Do": "jump No"
				}
			}
		}
	]
}
