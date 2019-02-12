 
/* Current issues: if the How many people sharing bill field 
is blank it returns as NaN even though I have it set to 1. 

The first each when  you have more than one person displays 
underneath the tip amount. Not sure how to fix yet. */


function calc(){

	//Data inputs 
	var howMuchBill = parseInt(document.getElementById("billAmount").value);
	var howMuchTip = document.getElementById("tipAmount").value;
	var howManyPeople = parseInt(document.getElementById("numPeople").value);


		// Math
	var totalTipPerPerson = (howMuchBill * howMuchTip) / howManyPeople;
	totalTipPerPerson = Math.round(totalTipPerPerson * 100) / 100;
	totalTipPerPerson = totalTipPerPerson.toFixed(2);

	var totalTip = totalTipPerPerson * howManyPeople


	var totalBillPlusTip = howMuchBill + totalTip;

	totalBillPlusTip = Math.round(totalBillPlusTip * 100) / 100;
	totalBillPlusTip = totalBillPlusTip.toFixed(2);

	var totalBillPerPersonWithTip = totalBillPlusTip / howManyPeople;
	totalBillPerPersonWithTip = Math.round(totalBillPerPersonWithTip * 100) / 100;
	totalBillPerPersonWithTip = totalBillPerPersonWithTip.toFixed(2);
	console.log(totalBillPerPersonWithTip);
	
	//display values
	document.getElementById("totalTip").style.display = "block";
	document.getElementById("tip").innerHTML = totalTipPerPerson;
	
	document.getElementById("billWithTip").style.display = "block";
	document.getElementById("billWithTipUnder").innerHTML = totalBillPlusTip;
	
	document.getElementById("billWithTipPerPerson").style.display = "block";
	document.getElementById("billWithTipPerPersonUnder").innerHTML = totalBillPerPersonWithTip;

// Validations 
	if(howMuchBill === "" || howMuchTip == 0){
		window.alert("Please enter values to get the amounts!");
		return;
	}

	// If people is empty or less than or equal to 1
	if(howManyPeople === "" || howManyPeople <= 1){
		howManyPeople = 1;

		document.getElementById("each").style.display = "none";
	} else {
		document.getElementById("each").style.display = "block";
	};
}	



/*
if (howMuchBill = int && howMuchBill > 0)
*/

/*
Pull value from how much was bill.
Pull value from how much tip.
Pull value from how many people.
Convert them all from strings to numbers.
Have it display how much tip was for total bill.
Have it display total bill with tip.
Have it dipslay total bill per person with tip.
Remove "each" and total bill per 
person with tip if numPeople is 1 or an emptry string.
*/








