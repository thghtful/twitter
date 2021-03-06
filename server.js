var express = require('express');
var app = express();

var port = process.env.PORT || 8080;

app.set('view engine', 'ejs');

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {

    // ejs render automatically looks in the views folder
    res.render('index');
});


var Twit = require('twit');



var fs = require('fs'),
    path = require('path'),
    Twit = require('twit'),
    config = require(path.join(__dirname, 'config.js'));
	
var T = new Twit(config);

var einsteinQuotes = ["Imagination is more important than ",
 "Gravitation is not responsible for people falling in ",
 "I want to know God's thoughts; the rest are ",
 "The hardest thing in the world to understand is ",
 "Reality is merely ",
 "The only real valuable thing is ",
 "A person starts to live when he can live outside ",
 "God is subtle but he is not ",
 "Weakness of attitude becomes weakness of ",
 "I never think of the ",
 "The eternal mystery of the world is ",
 "Sometimes one pays most for ",
 "Science without religion is ",
 "Anyone who has never made a mistake has never tried ",
 "Great spirits have often encountered violent opposition from ",
 "Everything should be made as simple as possible, but not ",
 "Common sense is the collection of ",
 "The secret to creativity is knowing how to hide your ",
 "The only thing that interferes with my learning is ",
 "God does not care about ",
 "The whole of science is nothing more than ",
 "Technological progress is like ",
 "Peace cannot be kept by force. ",
 "The most incomprehensible thing about the world is that ",
 "We can't solve problems by using ",
 "Education is what remains after one has forgotten ",
 "The important thing is not to stop questioning ",
 "Do not worry about ",
 "Equations are more important to me, because of "];

var endings = ["Barack Obama",
"brexit",
"Boris Johnson",
"Ryan Giggs",
"isis",
"David Cameron",
"Born Gay",
"Churches and Taxes",
"Climate Change",
"Clinton",
"Concealed Guns",
"Corporate Tax Rate & Jobs",
"Drinking Age",
"Drones",
"Gay Marriage",
"Illegal Immigration",
"Gun Control",
"Insider Trading by Congress",
"Israeli - Palestinian Conflict",
"Medical Marijuana",
"Milk",
"Minimum Wage",
"Obamacare",
"Obesity",
"Prescription Drug Ads",
"Presidential Election, 2008",
"Presidential Election, 2012",
"Prostitution",
"Prositutes",
"Reagan",
"Right to Health Care",
"Santa Monica Local Elections, 2014",
"School Uniforms",
"Social Networking",
"Social Security",
"Sports and Drugs",
"Standardized Tests",
"Tablets vs. Textbooks",
"Teacher Tenure",
"Under God in the Pledge",
"Jesus",
"Jesus saved me",
"Praise the lord",
"Vaccines for Kids",
"marijuana is healthy for children",
"Vegetarianism",
"Video Games and Violence",
"Voting Machines",
"WTC Muslim Center",
"Abortion",
"Capital punishment",
"Communism",
"Communist government",
"Economy of Japan",
"Right-wing populism",
"Terrorist groups",
"War on Drugs",
"Donald Trump",
"Pirate Bay",
"Putin",
"Russia",
"Islamic State",
"Bombing schools",
"Science",
"1 million dollars",
"UK voters",
"Nigel Farage",
"Tea Party movement",
"Soviet war crimes"];

var quote = einsteinQuotes[Math.floor(Math.random() * einsteinQuotes.length)];

var ending = endings[Math.floor(Math.random() * endings.length)];

var speach1 = "\""; 

var speach2 = "\"";

var tweet = quote + ending;



T.post('statuses/update', { status: tweet }, function(err, data, response) {
	console.log(data);
	});

	
console.log(tweet);




//app.listen(port, function() {
//    console.log('Our app is running on http://localhost:' + port);
//});