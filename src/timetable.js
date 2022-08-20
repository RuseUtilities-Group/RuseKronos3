// By Chris Ahn and Ethan Du Toit
var listOfDays = ['1B', '2A', '3A', '4A', '5A', '1A', '2B', '3B', '4B', '5B'];

function gen_table(json) {
	table = document.getElementById("timetable");
	tableIn = "";
	it = json;
	if (it === undefined) {
		console.log ("Error: Variable 'it' is not defined.");
		it = {};
	}

	var period;
	var startTime;
	var teacher;
	var room;
	for(var day = 0; day < 10; day++) {
		if(day % 5 == 0) {
			tableIn += "<tr id=\"Weeks\">";
		}
		tableIn += "<td id=\"timetableTd\"><table id=\"timetableDay\">";

		dayNum = listOfDays[day].substring(0, listOfDays[day].length-1)[0].toUpperCase();
		var dayWord;
		if(dayNum == "1") {
			dayWord = "Monday ";
		}else if (dayNum == "2") {
			dayWord = "Tuesday ";
		}else if (dayNum == "3") {
			dayWord = "Wednesday ";
		}else if (dayNum == "4") {
			dayWord = "Thursday ";
		}else if (dayNum == "5") {
			dayWord = "Friday ";
		}
		if(dayWord + listOfDays[day].substring(0, listOfDays[day].length-1).slice(1) + listOfDays[day][listOfDays[day].length-1] + " " === "Monday A ") tableIn += `<tr><th style="text-align: left;">Monday B</th></tr>`
		else if(dayWord + listOfDays[day].substring(0, listOfDays[day].length-1).slice(1) + listOfDays[day][listOfDays[day].length-1] + " " === "Monday B ") tableIn += `<tr><th style="text-align: left;">Monday A</th></tr>`
		else tableIn += `<tr><th style="text-align: left;">${dayWord + listOfDays[day].substring(0, listOfDays[day].length-1).slice(1) + listOfDays[day][listOfDays[day].length-1] + " "}</th></tr>`;
		
		period = "BS";
		teacher = it[listOfDays[day]][period].teacher;
		subject = it[listOfDays[day]][period].subjectCode;
		room = it[listOfDays[day]][period].room;
		if(!room) room = "";
		
		if(subject !== "") {
			tableIn += "<tr>";
			tableIn += `<td id="timetableTd1" style="padding: 2%; width: 4%;">${period}: ${subject} <br></td>`;
			tableIn += `<td id="startTimeTd" style="padding: 2%; width: 4%;">${room}</td>`;
			tableIn += "</tr>";
		}

		period = 1;
		
		while(typeof it[listOfDays[day]][period] !== "undefined") {
			tableIn += "<tr>";
			teacher = it[listOfDays[day]][period].teacher;
			subject = it[listOfDays[day]][period].subjectCode;
			room = it[listOfDays[day]][period].room;
			if(!room) room = "";

			if(subject !== "") {
				tableIn += `<td id="timetableTd1" style="padding: 2%; width: 4%;">${period}: ${subject} <br></td>`;
			}
			else {
				tableIn += `<td id="timetableTd1" style="padding: 2%; width: 4%; font-size: 85%">${period}: Free Period</td>`;
			}
			tableIn += `<td id="startTimeTd" style="padding: 2%; width: 4%;">${room}</td>`;
			tableIn += "</tr>";
			period++;
		}
		
		try{
			if(day === 3){
				period = "AS";
				teacher = it[listOfDays[day]][period].teacher;
				subject = it[listOfDays[day]][period].subjectCode;
				room = it[listOfDays[day]][period].room;
				if(!room) room = "";
			
				if(subject !== "") {
					tableIn += "<tr>";
					tableIn += `<td id="timetableTd1" style="padding: 2%; width: 4%;">${period}: ${subject} <br></td>`;
					tableIn += `<td id="startTimeTd" style="padding: 2%; width: 4%;">${room}</td>`;
					tableIn += "</tr>";
				}
			}

			period = "AS1";
			teacher = it[listOfDays[day]][period].teacher;
			subject = it[listOfDays[day]][period].subjectCode;
			room = it[listOfDays[day]][period].room;
			if(!room) room = "";
		
			if(subject !== "") {
				tableIn += "<tr>";
				tableIn += `<td id="timetableTd1" style="padding: 2%; width: 4%;">${period}: ${subject} <br></td>`;
				tableIn += `<td id="startTimeTd" style="padding: 2%; width: 4%;">${room}</td>`;
				tableIn += "</tr>";
			}

			period = "AS2";
			teacher = it[listOfDays[day]][period].teacher;
			subject = it[listOfDays[day]][period].subjectCode;
			room = it[listOfDays[day]][period].room;
			if(!room) room = "";
		
			if(subject !== "") {
				tableIn += "<tr>";
				tableIn += `<td id="timetableTd1" style="padding: 2%; width: 4%;">${period}: ${subject} <br></td>`;
				tableIn += `<td id="startTimeTd" style="padding: 2%; width: 4%;">${room}</td>`;
				tableIn += "</tr>";
			}
		} catch(e){}

		tableIn += "</table></td>";
		if(day % 5 == 4) {
			tableIn += "</tr>";
		}
	}
	table.innerHTML = tableIn;
}


json = JSON.parse(localStorage.getItem("timetable"));
try{
	gen_table(json);
} catch(e){}