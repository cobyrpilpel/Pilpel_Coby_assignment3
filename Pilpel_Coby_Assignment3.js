//alert("JavaScript works!");

// Coby Pilpel
//SDI 1408
//Project 3


//Variables

var partsSetOne = ["servos", "control surfaces", "engine", "propeller blades", "radio parts"];

var partsSetTwo = ["frame ", "body coverings", "support struts"];

var numberLeftOverScrews = 10
var assembleTime = 25
var glueTime = 5
var setTime = 2
var areWheelsAttached = true
var haveAllParts = true
var allPartsSecure = true
var timeHeatGun = 2 
var manualOutOfBox = true
var buildTime


var allSuppliesOrganized = confirm("Are all the parts, supplies and tools organized?")
//Procedure
var beginConstruction = function (allSuppliesOrganized)
	{var answer = allSuppliesOrganized;
	if (answer === true )
	{console.log("OK time to get started. Be careful with those tools you could take your eye out!");
	}else {console.log("Ok we haven't even started yet and you have already stabbed yourself with a screwdriver. Let's go over the safety rules again first.");}
}
beginConstruction(allSuppliesOrganized)


//Boolean

var stepOne = function (haveAllParts, manualOutOfBox) 
	{var answer2 = haveAllParts,manualOutOfBox;
	if (haveAllParts === true)
	{console.log("So we have all the parts. That is good I guess");
	if (manualOutOfBox === true)
	{console.log("Ok time for the easy part. We have to open up the instruction book to page 1. See that was easy!")}
	else { console.log("Well I never would have guessed we hit trouble at this stage. OK lets go over this again, lift the front cover and.... that isn't right")}
	return;}}

stepOne(haveAllParts, manualOutOfBox)

//Array

var beginAssembly = function (structuralParts, allSuppliesOrganized)
	{var attachParts = structuralParts;
	var constructionStarted = partsSetTwo.pop();
	console.log("Well this plane can't fly without the frame and a battery so lets get started installing all of that. We should have " + partsSetTwo + " out and ready to install.");
	console.log("Oh! We forgot to take the battery out of the box and put in on the list of things to install! We should do that now.")
	partsSetTwo.push("battery and wiring");
	while (allSuppliesOrganized === true && partsSetTwo.length > 3)
	{console.log ("Righto we now have " +partsSetTwo[i]+ " constructed we can move on to the complicated parts.");}
	console.log("Ok so the fram was the easy part. The complicated stuff starts now.")
	return structuralParts;}
	

beginAssembly()


//string


var glueAllParts = function (glueAllParts)
	{var reinforceAllParts = glueAllParts;
	console.log("Now we really don't need much glue for this. We are just reinforcing the snap joints.")
	console.log("OK we need to start by working on the  " + partsSetTwo[0] + ". This is going to need more glue than the rest so don't worry about going a bit overboard.");
	console.log("Once the glue on the fram starts to set you can add some glue to spots where the " + partsSetTwo[1] + " will touch the frame.");
	console.log("If you can add glue to the  " +partsSetTwo[2] + " without disturbing the other glue while it sets do that now. Otherwise just wait a few minutes.");
	return reinforceAllParts;}


glueAllParts()


//Math

var	completeBuildTime = function (buildTime)
{var minutes = glueTime;
while (buildTime >= 0)
{console.log("Now we have everything glued together this should only take us " + buildTime + " minutes left of assembling to do. We are almost done!");
buildtime -= 5;}
console.log("Well that is that. The frame and cover is all glued on now you only have to snap the " + partsSetOne[0] + " on and we are done with this part of the build!");
return minutes;};
completeBuildTime()
	
	
