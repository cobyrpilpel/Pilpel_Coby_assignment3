//alert("JavaScript works!");

// Coby Pilpel
//SDI 1408
//Project 3


//Variables

var partsSetOne = ["servos", "control surfaces", "wheels", "propeller blades"];

var partsSetTwo = ["frame", "radio parts", "body coverings", "battery"];

var numberLeftOverScrews = 10
var chargeUpTime = 25
var glueTime = 5
var setTime = 2
var areWheelsAttached = true
var didGlueSet = true
var allPartsSecure = true
var timeHeatGun = 2 
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

var 