//Countdown Date
var countDownDate = new Date("Nov 19, 2022 10:13:00").getTime();

var countDown = setInterval(() => {

	var now = new Date().getTime();
	var timeleft = countDownDate - now;
	        
	//Time Math
	var days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
	var hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	var minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
	var seconds = Math.floor((timeleft % (1000 * 60)) / 1000);
	        
	// Output Calculated Time
	document.getElementById("days").innerHTML = days + "d "
	document.getElementById("hours").innerHTML = hours + "h " 
	document.getElementById("mins").innerHTML = minutes + "m " 
	document.getElementById("secs").innerHTML = seconds + "s " 
	    
	// Display the message when countdown is over
	if (timeleft < 0) {
	    clearInterval(countDown);
	    document.getElementById("days").innerHTML = ""
	    document.getElementById("hours").innerHTML = "" 
	    document.getElementById("mins").innerHTML = ""
	    document.getElementById("secs").innerHTML = ""
	    document.getElementById("end").innerHTML = "Finally :)";
	}
}, 1000);