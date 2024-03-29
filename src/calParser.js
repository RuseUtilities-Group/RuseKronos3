Date.prototype.getWeek = function (dowOffset) {
    /*getWeek() was developed by Nick Baicoianu at MeanFreePath: http://www.meanfreepath.com */
    
        dowOffset = typeof(dowOffset) == 'number' ? dowOffset : 0; //default dowOffset to zero
        var newYear = new Date(this.getFullYear(),0,1);
        var day = newYear.getDay() - dowOffset; //the day of week the year begins on
        day = (day >= 0 ? day : day + 7);
        var daynum = Math.floor((this.getTime() - newYear.getTime() - 
        (this.getTimezoneOffset()-newYear.getTimezoneOffset())*60000)/86400000) + 1;
        var weeknum;
        //if the year starts before the middle of a week
        if(day < 4) {
            weeknum = Math.floor((daynum+day-1)/7) + 1;
            if(weeknum > 52) {
                nYear = new Date(this.getFullYear() + 1,0,1);
                nday = nYear.getDay() - dowOffset;
                nday = nday >= 0 ? nday : nday + 7;
                /*if the next year starts before the middle of
                  the week, it is week #1 of that year*/
                weeknum = nday < 4 ? 1 : 53;
            }
        }
        else {
            weeknum = Math.floor((daynum+day-1)/7);
        }
        return weeknum;
};

// Manually constructing javascript timetable object (record)
var timetable = {
    "1A": {
        "BS":{
            "teacher": "",
            "room": "",
            "subjectCode": "",
            "subjectName": "",
            "startDate": "",
            "endDate": ""
        },
        "1":{
            "teacher": "",
            "room": "",
            "subjectCode": "",
            "subjectName": "",
            "startDate": "",
            "endDate": ""
        },
        "2":{
            "teacher": "",
            "room": "",
            "subjectCode": "",
            "subjectName": "",
            "startDate": "",
            "endDate": ""
        },
        "R":{
            "teacher": "",
            "room": "",
            "subjectCode": "",
            "subjectName": "Recess",
            "startDate": "2022-07-31T01:00:00.000Z",
            "endDate": ""
        },
        "3":{
            "teacher": "",
            "room": "",
            "subjectCode": "",
            "subjectName": "",
            "startDate": "",
            "endDate": ""
        },
        "4":{
            "teacher": "",
            "room": "",
            "subjectCode": "",
            "subjectName": "",
            "startDate": "",
            "endDate": ""
        },
        "L":{
            "teacher": "",
            "room": "",
            "subjectCode": "",
            "subjectName": "Lunch",
            "startDate": "2022-07-31T03:25:00.000Z",
            "endDate": ""
        },
        "5":{
            "teacher": "",
            "room": "",
            "subjectCode": "",
            "subjectName": "",
            "startDate": "",
            "endDate": ""
        },
        "AS1":{
            "teacher": "",
            "room": "",
            "subjectCode": "",
            "subjectName": "",
            "startDate": "",
            "endDate": ""
        },
        "AS2":{
            "teacher": "",
            "room": "",
            "subjectCode": "",
            "subjectName": "",
            "startDate": "",
            "endDate": ""
        }
    },
    "2A": {
        "BS":{
            "teacher": "",
            "room": "",
            "subjectCode": "",
            "subjectName": "",
            "startDate": "",
            "endDate": ""
        },
        "1":{
            "teacher": "",
            "room": "",
            "subjectCode": "",
            "subjectName": "",
            "startDate": "",
            "endDate": ""
        },
        "2":{
            "teacher": "",
            "room": "",
            "subjectCode": "",
            "subjectName": "",
            "startDate": "",
            "endDate": ""
        },
        "R":{
            "teacher": "",
            "room": "",
            "subjectCode": "",
            "subjectName": "Recess",
            "startDate": "2022-07-31T01:00:00.000Z",
            "endDate": ""
        },
        "3":{
            "teacher": "",
            "room": "",
            "subjectCode": "",
            "subjectName": "",
            "startDate": "",
            "endDate": ""
        },
        "4":{
            "teacher": "",
            "room": "",
            "subjectCode": "",
            "subjectName": "",
            "startDate": "",
            "endDate": ""
        },
        "L":{
            "teacher": "",
            "room": "",
            "subjectCode": "",
            "subjectName": "Lunch",
            "startDate": "2022-07-31T03:25:00.000Z",
            "endDate": ""
        },
        "5":{
            "teacher": "",
            "room": "",
            "subjectCode": "",
            "subjectName": "",
            "startDate": "",
            "endDate": ""
        },
        "AS1":{
            "teacher": "",
            "room": "",
            "subjectCode": "",
            "subjectName": "",
            "startDate": "",
            "endDate": ""
        },
        "AS2":{
            "teacher": "",
            "room": "",
            "subjectCode": "",
            "subjectName": "",
            "startDate": "",
            "endDate": ""
        }
    },
    "3A": {
        "BS":{
            "teacher": "",
            "room": "",
            "subjectCode": "",
            "subjectName": "",
            "startDate": "",
            "endDate": ""
        },
        "1":{
            "teacher": "",
            "room": "",
            "subjectCode": "",
            "subjectName": "",
            "startDate": "",
            "endDate": ""
        },
        "2":{
            "teacher": "",
            "room": "",
            "subjectCode": "",
            "subjectName": "",
            "startDate": "",
            "endDate": ""
        },
        "ASS":{
            "teacher": "",
            "room": "",
            "subjectCode": "",
            "subjectName": "Assembly",
            "startDate": "2022-07-31T00:40:00.000Z",
            "endDate": ""
        },
        "R":{
            "teacher": "",
            "room": "",
            "subjectCode": "",
            "subjectName": "Recess",
            "startDate": "2022-07-31T00:55:00.000Z",
            "endDate": ""
        },
        "3":{
            "teacher": "",
            "room": "",
            "subjectCode": "",
            "subjectName": "",
            "startDate": "",
            "endDate": ""
        },
        "WL":{
            "teacher": "",
            "room": "",
            "subjectCode": "",
            "subjectName": "Lunch",
            "startDate": "2022-07-31T02:10:00.000Z",
            "endDate": ""
        },
        "4":{
            "teacher": "",
            "room": "",
            "subjectCode": "",
            "subjectName": "",
            "startDate": "",
            "endDate": ""
        },
        "5":{
            "teacher": "",
            "room": "",
            "subjectCode": "",
            "subjectName": "",
            "startDate": "",
            "endDate": ""
        },
        "AS":{
            "teacher": "",
            "room": "",
            "subjectCode": "",
            "subjectName": "",
            "startDate": "",
            "endDate": ""
        },
        "AS1":{
            "teacher": "",
            "room": "",
            "subjectCode": "",
            "subjectName": "",
            "startDate": "",
            "endDate": ""
        },
        "AS2":{
            "teacher": "",
            "room": "",
            "subjectCode": "",
            "subjectName": "",
            "startDate": "",
            "endDate": ""
        }
    },
    "4A": {
        "BS":{
            "teacher": "",
            "room": "",
            "subjectCode": "",
            "subjectName": "",
            "startDate": "",
            "endDate": ""
        },
        "1":{
            "teacher": "",
            "room": "",
            "subjectCode": "",
            "subjectName": "",
            "startDate": "",
            "endDate": ""
        },
        "2":{
            "teacher": "",
            "room": "",
            "subjectCode": "",
            "subjectName": "",
            "startDate": "",
            "endDate": ""
        },
        "R":{
            "teacher": "",
            "room": "",
            "subjectCode": "",
            "subjectName": "Recess",
            "startDate": "2022-07-31T01:00:00.000Z",
            "endDate": ""
        },
        "3":{
            "teacher": "",
            "room": "",
            "subjectCode": "",
            "subjectName": "",
            "startDate": "",
            "endDate": ""
        },
        "4":{
            "teacher": "",
            "room": "",
            "subjectCode": "",
            "subjectName": "",
            "startDate": "",
            "endDate": ""
        },
        "L":{
            "teacher": "",
            "room": "",
            "subjectCode": "",
            "subjectName": "Lunch",
            "startDate": "2022-07-31T03:25:00.000Z",
            "endDate": ""
        },
        "5":{
            "teacher": "",
            "room": "",
            "subjectCode": "",
            "subjectName": "",
            "startDate": "",
            "endDate": ""
        },
        "AS1":{
            "teacher": "",
            "room": "",
            "subjectCode": "",
            "subjectName": "",
            "startDate": "",
            "endDate": ""
        },
        "AS2":{
            "teacher": "",
            "room": "",
            "subjectCode": "",
            "subjectName": "",
            "startDate": "",
            "endDate": ""
        }
    },
    "5A": {
        "BS":{
            "teacher": "",
            "room": "",
            "subjectCode": "",
            "subjectName": "",
            "startDate": "",
            "endDate": ""
        },
        "1":{
            "teacher": "",
            "room": "",
            "subjectCode": "",
            "subjectName": "",
            "startDate": "",
            "endDate": ""
        },
        "2":{
            "teacher": "",
            "room": "",
            "subjectCode": "",
            "subjectName": "",
            "startDate": "",
            "endDate": ""
        },
        "R":{
            "teacher": "",
            "room": "",
            "subjectCode": "",
            "subjectName": "Recess",
            "startDate": "2022-07-31T01:00:00.000Z",
            "endDate": ""
        },
        "3":{
            "teacher": "",
            "room": "",
            "subjectCode": "",
            "subjectName": "",
            "startDate": "",
            "endDate": ""
        },
        "4":{
            "teacher": "",
            "room": "",
            "subjectCode": "",
            "subjectName": "",
            "startDate": "",
            "endDate": ""
        },
        "L":{
            "teacher": "",
            "room": "",
            "subjectCode": "",
            "subjectName": "Lunch",
            "startDate": "2022-07-31T03:25:00.000Z",
            "endDate": ""
        },
        "5":{
            "teacher": "",
            "room": "",
            "subjectCode": "",
            "subjectName": "",
            "startDate": "",
            "endDate": ""
        },
        "AS1":{
            "teacher": "",
            "room": "",
            "subjectCode": "",
            "subjectName": "",
            "startDate": "",
            "endDate": ""
        },
        "AS2":{
            "teacher": "",
            "room": "",
            "subjectCode": "",
            "subjectName": "",
            "startDate": "",
            "endDate": ""
        }
    },
    "1B": {
        "BS":{
            "teacher": "",
            "room": "",
            "subjectCode": "",
            "subjectName": "",
            "startDate": "",
            "endDate": ""
        },
        "1":{
            "teacher": "",
            "room": "",
            "subjectCode": "",
            "subjectName": "",
            "startDate": "",
            "endDate": ""
        },
        "2":{
            "teacher": "",
            "room": "",
            "subjectCode": "",
            "subjectName": "",
            "startDate": "",
            "endDate": ""
        },
        "R":{
            "teacher": "",
            "room": "",
            "subjectCode": "",
            "subjectName": "Recess",
            "startDate": "2022-07-31T01:00:00.000Z",
            "endDate": ""
        },
        "3":{
            "teacher": "",
            "room": "",
            "subjectCode": "",
            "subjectName": "",
            "startDate": "",
            "endDate": ""
        },
        "4":{
            "teacher": "",
            "room": "",
            "subjectCode": "",
            "subjectName": "",
            "startDate": "",
            "endDate": ""
        },
        "L":{
            "teacher": "",
            "room": "",
            "subjectCode": "",
            "subjectName": "Lunch",
            "startDate": "2022-07-31T03:25:00.000Z",
            "endDate": ""
        },
        "5":{
            "teacher": "",
            "room": "",
            "subjectCode": "",
            "subjectName": "",
            "startDate": "",
            "endDate": ""
        },
        "AS1":{
            "teacher": "",
            "room": "",
            "subjectCode": "",
            "subjectName": "",
            "startDate": "",
            "endDate": ""
        },
        "AS2":{
            "teacher": "",
            "room": "",
            "subjectCode": "",
            "subjectName": "",
            "startDate": "",
            "endDate": ""
        }
    },
    "2B": {
        "BS":{
            "teacher": "",
            "room": "",
            "subjectCode": "",
            "subjectName": "",
            "startDate": "",
            "endDate": ""
        },
        "1":{
            "teacher": "",
            "room": "",
            "subjectCode": "",
            "subjectName": "",
            "startDate": "",
            "endDate": ""
        },
        "2":{
            "teacher": "",
            "room": "",
            "subjectCode": "",
            "subjectName": "",
            "startDate": "",
            "endDate": ""
        },
        "R":{
            "teacher": "",
            "room": "",
            "subjectCode": "",
            "subjectName": "Recess",
            "startDate": "2022-07-31T01:00:00.000Z",
            "endDate": ""
        },
        "3":{
            "teacher": "",
            "room": "",
            "subjectCode": "",
            "subjectName": "",
            "startDate": "",
            "endDate": ""
        },
        "4":{
            "teacher": "",
            "room": "",
            "subjectCode": "",
            "subjectName": "",
            "startDate": "",
            "endDate": ""
        },
        "L":{
            "teacher": "",
            "room": "",
            "subjectCode": "",
            "subjectName": "Lunch",
            "startDate": "2022-07-31T03:25:00.000Z",
            "endDate": ""
        },
        "5":{
            "teacher": "",
            "room": "",
            "subjectCode": "",
            "subjectName": "",
            "startDate": "",
            "endDate": ""
        },
        "AS1":{
            "teacher": "",
            "room": "",
            "subjectCode": "",
            "subjectName": "",
            "startDate": "",
            "endDate": ""
        },
        "AS2":{
            "teacher": "",
            "room": "",
            "subjectCode": "",
            "subjectName": "",
            "startDate": "",
            "endDate": ""
        }
    },
    "3B": {
        "BS":{
            "teacher": "",
            "room": "",
            "subjectCode": "",
            "subjectName": "",
            "startDate": "",
            "endDate": ""
        },
        "1":{
            "teacher": "",
            "room": "",
            "subjectCode": "",
            "subjectName": "",
            "startDate": "",
            "endDate": ""
        },
        "2":{
            "teacher": "",
            "room": "",
            "subjectCode": "",
            "subjectName": "",
            "startDate": "",
            "endDate": ""
        },
        "ASS":{
            "teacher": "",
            "room": "",
            "subjectCode": "",
            "subjectName": "Assembly",
            "startDate": "2022-07-31T00:40:00.000Z",
            "endDate": ""
        },
        "R":{
            "teacher": "",
            "room": "",
            "subjectCode": "",
            "subjectName": "Recess",
            "startDate": "2022-07-31T00:55:00.000Z",
            "endDate": ""
        },
        "3":{
            "teacher": "",
            "room": "",
            "subjectCode": "",
            "subjectName": "",
            "startDate": "",
            "endDate": ""
        },
        "WL":{
            "teacher": "",
            "room": "",
            "subjectCode": "",
            "subjectName": "Lunch",
            "startDate": "2022-07-31T02:10:00.000Z",
            "endDate": ""
        },
        "4":{
            "teacher": "",
            "room": "",
            "subjectCode": "",
            "subjectName": "",
            "startDate": "",
            "endDate": ""
        },
        "5":{
            "teacher": "",
            "room": "",
            "subjectCode": "",
            "subjectName": "",
            "startDate": "",
            "endDate": ""
        },
        "AS":{
            "teacher": "",
            "room": "",
            "subjectCode": "",
            "subjectName": "",
            "startDate": "",
            "endDate": ""
        },
        "AS1":{
            "teacher": "",
            "room": "",
            "subjectCode": "",
            "subjectName": "",
            "startDate": "",
            "endDate": ""
        },
        "AS2":{
            "teacher": "",
            "room": "",
            "subjectCode": "",
            "subjectName": "",
            "startDate": "",
            "endDate": ""
        }
    },
    "4B": {
        "BS":{
            "teacher": "",
            "room": "",
            "subjectCode": "",
            "subjectName": "",
            "startDate": "",
            "endDate": ""
        },
        "1":{
            "teacher": "",
            "room": "",
            "subjectCode": "",
            "subjectName": "",
            "startDate": "",
            "endDate": ""
        },
        "2":{
            "teacher": "",
            "room": "",
            "subjectCode": "",
            "subjectName": "",
            "startDate": "",
            "endDate": ""
        },
        "R":{
            "teacher": "",
            "room": "",
            "subjectCode": "",
            "subjectName": "Recess",
            "startDate": "2022-07-31T01:00:00.000Z",
            "endDate": ""
        },
        "3":{
            "teacher": "",
            "room": "",
            "subjectCode": "",
            "subjectName": "",
            "startDate": "",
            "endDate": ""
        },
        "4":{
            "teacher": "",
            "room": "",
            "subjectCode": "",
            "subjectName": "",
            "startDate": "",
            "endDate": ""
        },
        "L":{
            "teacher": "",
            "room": "",
            "subjectCode": "",
            "subjectName": "Lunch",
            "startDate": "2022-07-31T03:25:00.000Z",
            "endDate": ""
        },
        "5":{
            "teacher": "",
            "room": "",
            "subjectCode": "",
            "subjectName": "",
            "startDate": "",
            "endDate": ""
        },
        "AS1":{
            "teacher": "",
            "room": "",
            "subjectCode": "",
            "subjectName": "",
            "startDate": "",
            "endDate": ""
        },
        "AS2":{
            "teacher": "",
            "room": "",
            "subjectCode": "",
            "subjectName": "",
            "startDate": "",
            "endDate": ""
        }
    },
    "5B": {
        "BS":{
            "teacher": "",
            "room": "",
            "subjectCode": "",
            "subjectName": "",
            "startDate": "",
            "endDate": ""
        },
        "1":{
            "teacher": "",
            "room": "",
            "subjectCode": "",
            "subjectName": "",
            "startDate": "",
            "endDate": ""
        },
        "2":{
            "teacher": "",
            "room": "",
            "subjectCode": "",
            "subjectName": "",
            "startDate": "",
            "endDate": ""
        },
        "R":{
            "teacher": "",
            "room": "",
            "subjectCode": "",
            "subjectName": "Recess",
            "startDate": "2022-07-31T01:00:00.000Z",
            "endDate": ""
        },
        "3":{
            "teacher": "",
            "room": "",
            "subjectCode": "",
            "subjectName": "",
            "startDate": "",
            "endDate": ""
        },
        "4":{
            "teacher": "",
            "room": "",
            "subjectCode": "",
            "subjectName": "",
            "startDate": "",
            "endDate": ""
        },
        "L":{
            "teacher": "",
            "room": "",
            "subjectCode": "",
            "subjectName": "Lunch",
            "startDate": "2022-07-31T03:25:00.000Z",
            "endDate": ""
        },
        "5":{
            "teacher": "",
            "room": "",
            "subjectCode": "",
            "subjectName": "",
            "startDate": "",
            "endDate": ""
        },
        "AS1":{
            "teacher": "",
            "room": "",
            "subjectCode": "",
            "subjectName": "",
            "startDate": "",
            "endDate": ""
        },
        "AS2":{
            "teacher": "",
            "room": "",
            "subjectCode": "",
            "subjectName": "",
            "startDate": "",
            "endDate": ""
        }
    }
};

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
    date.setUTCMonth(events._time.month-1); // -1 coz javascript is weird and the month starts on 0 for January
    date.setUTCFullYear(events._time.year);
    date.setUTCHours(events._time.hour);
    date.setUTCMinutes(events._time.minute);
    date.setUTCSeconds(events._time.second);
    date.setUTCMilliseconds(0);
    return date;
}

function capitalize(word) {
    const lower = word.toLowerCase();
    return word.charAt(0).toUpperCase() + lower.slice(1);
}
  


async function icalProcess() {
    localStorage.removeItem("timetable");
    try {
        // Taking the parsed data from the readFile function into this main function, also waiting for it to end before moving on.
        var icalData = await readFile();

        // Turning all the raw ical text data into something a computer can read for future processing and storing the data into events.
        var jcalDataComp = new ICAL.Component(icalData);
        var events = jcalDataComp.getAllSubcomponents("vevent");

        // Processing the first day on the whole events list on the iCal and the SCHOOL day before it to check for week A/B processing.
        var firstDay = convertSentralDateToJSDate(events[0].getFirstPropertyValue('dtstart')).getDay();
        if(firstDay === 1) var lastDay = 5;
        else lastDay = firstDay - 1;
        var passedFirstDay = 0;
        var currLastDay = 69;

        var teacher = "";

        for(var i = 0; i < events.length; i++) {
            // Plucking raw data continued from the iCal abomination into readable individual variables
            try{
                var period = events[i].getFirstPropertyValue('description').split("\n")[1].split(": ")[1];
            } catch(e){
                var period = events[i].getFirstPropertyValue('description').split(": ")[1];
                var teacher = " ";
            }
            if(teacher !== " "){
                // Plucking raw data from the iCal abomination into readable individual variables
                teacher = events[i].getFirstPropertyValue('description').split("\n")[0].split(": ")[1];
                // Formating the teacher name because Mr looks like MR on sentral's idiotic formatting
                if(teacher.startsWith("M") || teacher.startsWith("D")){ // If it starts with M for Ms or D for Dr, if theres any new titles add a or statement with the first letter of the title
                    var titleName = capitalize(teacher.split(" ")[0]);
                    var firstName = teacher.split(" ")[1];
                    var lastName = teacher.split(" ")[2];
                    teacher = `${titleName} ${firstName} ${lastName}`;
                }
            }

            var subjectCode = events[i].getFirstPropertyValue('summary').split(": ")[0];
            var subjectName = events[i].getFirstPropertyValue('summary').split(": ")[1].split(" Yr")[0];
            var room = events[i].getFirstPropertyValue('location').split(": ")[1];
            var startDate = convertSentralDateToJSDate(events[i].getFirstPropertyValue('dtstart'));
            var endDate = convertSentralDateToJSDate(events[i].getFirstPropertyValue('dtend'));
            var week = "A";
            if(startDate.getWeek() % 2 === 0) week = "B";
            var day = startDate.getDay()+week;
            // Setting the Object "timetable" data from the readed data above.
            timetable[`${day}`][period].teacher = teacher;
            timetable[`${day}`][period].subjectCode = subjectCode;
            timetable[`${day}`][period].subjectName = subjectName;
            timetable[`${day}`][period].room = room;
            timetable[`${day}`][period].startDate= startDate;
            timetable[`${day}`][period].endDate = endDate;
        }

        localStorage.setItem("timetable", JSON.stringify(timetable)); // Saving the timetable as a JSON string on local host for future use.
        //console.log(timetable);
        //alert("Timetable uploaded successfully :)");
        window.location.href = "./index.html";
    } catch(e) {
        alert(e); // If theres an error in the processing prompt the user with a HTML alert with the error in the body.
    }
}

