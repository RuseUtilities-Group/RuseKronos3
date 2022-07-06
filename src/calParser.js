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


async function icalProcess() {

    // Taking the parsed data from the readFile function into this main function, also waiting for it to end before moving on.
    var icalData = await readFile();

    console.log(icalData);
}
