// By Chris Ahn and Ethan Du Toit
var listOfDays = ['1A', '2A', '3A', '4A', '5A', '1B', '2B', '3B', '4B', '5B'];

function gen_table(json) {
	table = document.getElementById("timetable");
	tableIn = "";
	it = json;
	if (it === undefined) {
		console.log ("Error: Variable 'it' is not defined.");
		it = {};
	}

	console.log(it)

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
		tableIn += `<tr><th style="text-align: left;">${"Week " + listOfDays[day].substring(0, listOfDays[day].length-1).slice(1) + listOfDays[day][listOfDays[day].length-1] + " " + dayWord}</th></tr>`;
		period = 1;
		while(typeof it[listOfDays[day]][period] !== "undefined") {
			tableIn += "<tr>";

			var startDate = new Date(it[listOfDays[day]][period].startDate);
			var hours = startDate.getHours();
			var minutes = startDate.getMinutes();
			if(hours / 10 < 1) hours = "0" + hours;
			if(minutes / 10 < 1) minutes = "0" + minutes;
			startTime = `${hours}:${minutes}`;
			teacher = it[listOfDays[day]][period].teacher;
			subject = it[listOfDays[day]][period].subjectCode;
			room = it[listOfDays[day]][period].room;
			if(!room) room = "";
			if(startTime.startsWith("9") || startTime.startsWith("8")) startTime = "0" + startTime

			//if((day % 5 != 2 && period == 3) || (day % 5 == 2 && period == 2)) {
			//	startTime = it[listOfDays[day]]["Recess"].startTime;
			//	tableIn += `<tr><td style=";">Recess</td>`;
			//	tableIn += `<td id="startTimeTd" style=""></td>`;
			//	tableIn += `<td id="startTimeTd" style="">${startTime}</td>`;
			//	tableIn += "</tr>";
			//}
			if((day % 5 != 2 && period == 5) || (day % 5 == 2 && period == 4)) {
				tableIn += `<tr><td style="padding: 2%; width: 4%;">Lunch</td>`;
				tableIn += `<td id="startTimeTd" style="padding: 2%; width: 4%;"></td>`;
				tableIn += "</tr>";
			}
			if((day % 5 != 2 && period == 3) || (day % 5 == 2 && period == 3)) {
				tableIn += `<tr><td style="padding: 2%; width: 4%;">Recess</td>`;
				tableIn += `<td id="startTimeTd" style="padding: 2%; width: 4%;"></td>`;
				tableIn += "</tr>";
			}
			if(teacher !== "") {
				tableIn += `<td id="timetableTd1" style="padding: 2%; width: 4%;">${period}: ${subject} <br></td>`;
			}
			else if (room === "Sport"){
				tableIn += `<td id="timetableTd1" style="padding: 2%; width: 4%;">Sports</td>`;
			}
			else if (room === "Scripture"){
				tableIn += `<td id="timetableTd1" style="padding: 2%; width: 4%;">Scripture</td>`
			}
			else if (subject === "Place Holder") {
				tableIn += `<td id="timetableTd1" style="padding: 2%; width: 4%;">Sports</td>`;
			}	
			else {
				tableIn += `<td id="timetableTd1" style="padding: 2%; width: 4%;">Free Period</td>`;
			}
			tableIn += `<td id="startTimeTd" style="padding: 2%; width: 4%;">${room}</td>`;
			tableIn += "</tr>";
			period++;
		}
		tableIn += "</table></td>";
		if(day % 5 == 4) {
			tableIn += "</tr>";
		}
	}
	table.innerHTML = tableIn;
}

json = JSON.parse(localStorage.getItem("timetable"));
console.log(json);
gen_table(json);