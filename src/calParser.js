function readFile() {
    // Function to snatch the file off the file input HTML element and process it and plonk it within this code
    const icalFile = document.getElementById("icalFileReader").files[0];

    return new Promise((resolve, reject) => {
		const fileReader = new FileReader();
        // Optimising the file reader with check if the file can be read, or errors are faced.
		fileReader.onloadend = function(e) {
			var data;

            // Try and Catch to see if the file is parsable by ical.js in the first place.

			try {
				data = ICAL.parse(e.target.result); // Parsing through the file (within variable "e") 
			} catch(err) {
				alert("The file that you uploaded is invalid.\n Try again with a different iCal file."); // If error occurs thru ical parsing alert the end user.
			}

			resolve(data); // If reading is successful resolve the code through the promise to return in this function.
		};
		fileReader.onerror = function(e) {
			reject(e); // On a file reader error send a reject code output to the console for it handle.
		}


		fileReader.readAsText(icalFile); // Finally calling the file reader function and parsing in the ical file.
	});

}

function convertSentralDateToJSDate(events){
    // We take in the event[i].getFirstPropertyValue('FOO') and we individually pluck data and wham it inside an initialised date and return it for future processing
    var date = new Date();
    date.setUTCDate(events._time.day);
    date.setUTCMonth(events._time.month-1);
    date.setUTCFullYear(events._time.year);
    date.setUTCHours(events._time.hour);
    date.setUTCMinutes(events._time.minute);
    date.setUTCSeconds(events._time.second);
    date.setUTCMilliseconds(0);
    return date;
}


async function icalProcess() {

    // Taking the parsed data from the readFile function into this main function, also waiting for it to end before moving on.
    var icalData = await readFile();

    var jcalDataComp = new ICAL.Component(icalData);
	var events = jcalDataComp.getAllSubcomponents("vevent");
    //console.log(events);

    for(var i = 0; i < events.length; i++) {
        // PLucking raw data from the iCal abomination into readable individual variables
        var teacher = events[i].getFirstPropertyValue('description').split("\n")[0].split(": ")[1];
        var period = events[i].getFirstPropertyValue('description').split("\n")[1].split(": ")[1];
        var subject = events[i].getFirstPropertyValue('summary');
        var room = events[i].getFirstPropertyValue('location').split(": ")[1];
        var startDate = convertSentralDateToJSDate(events[i].getFirstPropertyValue('dtstart'));
        var endDate = convertSentralDateToJSDate(events[i].getFirstPropertyValue('dtend'));
        console.log(`Period ${period}: ${subject} with ${teacher} at ${room}, from ${startDate} to ${endDate}.`);
    }
}
