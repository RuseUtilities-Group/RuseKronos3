var timetable = JSON.parse(localStorage.getItem("timetable"));

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

function numToPeriod(num){
    // Converts a number to the period i.e. 0 -> BS, 1-> 1, 2-> 2 etc etc
    var period;
    switch(num) {
        case 0:
            period = "BS";
            break;
        case 1:
            period = "1";
            break;
        case 2:
            period = "2";
            break;
        case 3:
            period = "R";
            break;
        case 4:
            period = "3";
            break;
        case 5:
            period = "4";
            break;
        case 6:
            period = "L";
            break;
        case 7:
            period = "5";
            break;
        case 8:
            period = "AS1";
            break;
        case 9:
            period = "AS2";
            break;

    }
    return period;
}

function wednesdayNumToPeriod(num){
    // Converts a number to the period i.e. 0 -> BS, 1-> 1, 2-> 2 etc etc
    var period;
    switch(num) {
        case 0:
            period = "BS";
            break;
        case 1:
            period = "1";
            break;
        case 2:
            period = "2";
            break;
        case 3:
            period = "ASS";
            break;
        case 4:
            period = "R";
            break;
        case 5:
            period = "3";
            break;
        case 6:
            period = "WL";
            break;
        case 7:
            period = "4";
            break;
        case 8:
            period = "5";
            break;
        case 9:
            period = "AS";
            break;
        case 10:
            period = "AS1";
            break;
        case 11:
            period = "AS2";
            break;
    }
    return period;
}

function findNextPeriod(dayWeek, currHour, currMinute, currSecond){
    for(i = 0; i < 10; i++) {
        try{
            if(timetable[dayWeek][numToPeriod(i)].subjectName){
                var startDate = new Date(timetable[dayWeek][numToPeriod(i)].startDate);
                if((startDate.getHours() === currHour && startDate.getMinutes() > currMinute) || startDate.getHours() > currHour){
                    return numToPeriod(i);
                }
            }
        } catch(e){}
    }
}

function findLastPeriod(dayWeek){
    for(i = 9; i >= 0; i--){
        try{
            if(timetable[dayWeek][numToPeriod(i)].subjectName){
                return numToPeriod(i);
            }
        } catch(e){}
    }
}

function wednesdayfindNextPeriod(dayWeek, currHour, currMinute, currSecond){
    for(i = 0; i < 12; i++) {
        try{
            if(timetable[dayWeek][wednesdayNumToPeriod(i)].subjectName){
                var startDate = new Date(timetable[dayWeek][wednesdayNumToPeriod(i)].startDate);
                if((startDate.getHours() === currHour && startDate.getMinutes() > currMinute)|| startDate.getHours() > currHour){
                    return wednesdayNumToPeriod(i);
                }
            }
        } catch(e){}
    }
}

function countdownTimer(){
    var timeLeft;
    var hoursLeft;
    var minutesLeft;
    var secondsLeft;
    const currDate = new Date();
    var currDay = currDate.getDay();
    const currHour = currDate.getHours();
    const currMinute = currDate.getMinutes();
    const currSecond = currDate.getSeconds();
    const currWeek = currDate.getWeek();
    var weekLetter = "A";
    var nextPeriod;
    var lastPeriod;     
    // Odd weeks are Week A, i.e. Week 1 of the year is always A unless a blood moon rises over saturn
    if(currWeek % 2 === 0) weekLetter = "B";
    
    // If Saturday and Sunday, force showing Monday
    if(currDay === 0 || currDay === 6) currDay = 1;
    
    var dayWeek = (currDay+weekLetter).toString();

    lastPeriod = findLastPeriod(dayWeek);
    var lastPeriodStartDate = new Date(timetable[dayWeek][lastPeriod].startDate);
    var lastPeriodEndDate = new Date(timetable[dayWeek][lastPeriod].endDate);
    var lastPeriodSubject = "End of Day";
    var lastPeriodStartHour = lastPeriodStartDate.getHours();
    var lastPeriodEndHour = lastPeriodEndDate.getHours();
    var lastPeriodEndMinute = lastPeriodEndDate.getMinutes();
    var lastPeriodStartMinute = lastPeriodStartDate.getMinutes();
    
    if((currHour < lastPeriodEndHour && currHour > lastPeriodStartHour) || (currHour < lastPeriodEndHour && currHour === lastPeriodStartHour && currMinute >= lastPeriodStartMinute)|| (currHour === lastPeriodEndHour && currMinute < lastPeriodEndMinute)){
        secondsLeft = 60 - currSecond;
        if(currDate.getDay() === 0) hoursLeft = lastPeriodEndDate.getHours() + (24 - currHour) -1;
        else if(currDate.getDay() === 6) hoursLeft = lastPeriodEndDate.getHours() + 24 + (24 - currHour) -1;
        else if(currHour === lastPeriodEndDate.getHours()) hoursLeft = 0;
        else hoursLeft = lastPeriodEndDate.getHours() - currHour - 1;
        if(currMinute <= lastPeriodEndDate.getMinutes()) minutesLeft = lastPeriodEndDate.getMinutes() - currMinute -1;
        else minutesLeft = 60 - currMinute + lastPeriodEndDate.getMinutes() -1;
        if(hoursLeft === 0 && minutesLeft === 0 && secondsLeft <= 3) location.reload();

        if(hoursLeft / 10 < 1) hoursLeft = "0" + hoursLeft;
        
        if(minutesLeft / 10 < 1) minutesLeft = "0" + minutesLeft;
        
        if(secondsLeft / 10 < 1) secondsLeft = "0" + secondsLeft;
        
        var TMS = `${hoursLeft}:${minutesLeft}:${secondsLeft}`
        
        if(!timetable[dayWeek][nextPeriod].teacher || timetable[dayWeek][nextPeriod].teacher === " "){
            document.getElementById("KOH").innerHTML = `in ${timetable[dayWeek][nextPeriod].room}`;
        } else document.getElementById("KOH").innerHTML = `with ${timetable[dayWeek][nextPeriod].teacher} in ${timetable[dayWeek][nextPeriod].room}`;
        
        document.getElementById("HMS").innerHTML = `${nextPeriodSubject} in ${TMS}`;
        document.querySelector('title').textContent = `${nextPeriodSubject} in ${TMS}`;
        if(!timetable[dayWeek][nextPeriod].room) document.getElementById("KOH").innerHTML = "";
    } else{
        if(localStorage.getItem("timetable")){
            if(dayWeek === "1A") nextPeriod = findNextPeriod("1B", currHour, currMinute, currSecond);
            else if(dayWeek === "1B") nextPeriod = findNextPeriod("1A", currHour, currMinute, currSecond);
            else if(currDay === 3) nextPeriod = wednesdayfindNextPeriod(dayWeek, currHour, currMinute, currSecond);
            else nextPeriod = findNextPeriod(dayWeek, currHour, currMinute, currSecond);
            if(!nextPeriod){
                currDay++;
                if(currDay === 6 || currDay === 7) currDay = 1;
                dayWeek = currDay+weekLetter;
                if(dayWeek === "1A") nextPeriod = findNextPeriod("1B", 0, 0, 0);
                else if(dayWeek === "1B") nextPeriod = findNextPeriod("1A", 0, 0, 0);
                else if(currDay === 3) nextPeriod = wednesdayfindNextPeriod(dayWeek, 0, 0, 0);
                else nextPeriod = findNextPeriod(dayWeek, 0, 0, 0);
            }
        }
            var nextPeriodDate = new Date(timetable[dayWeek][nextPeriod].startDate);
            var nextPeriodSubject = timetable[dayWeek][nextPeriod].subjectName;
            
            secondsLeft = 60 - currSecond;
            if(currDate.getDay() < nextPeriodDate.getDay()) hoursLeft = nextPeriodDate.getHours() + (24 - currHour) -1;
            else if(currDate.getDay() === 0) hoursLeft = nextPeriodDate.getHours() + (24 - currHour) -1;
            else if(currDate.getDay() === 6) hoursLeft = nextPeriodDate.getHours() + 24 + (24 - currHour) -1;
            else if(currHour === nextPeriodDate.getHours()) hoursLeft = 0;
            else hoursLeft = nextPeriodDate.getHours() - currHour - 1;
            if(currMinute <= nextPeriodDate.getMinutes() && currSecond !== 0) minutesLeft = nextPeriodDate.getMinutes() - currMinute -1;
            else if(currMinute <= nextPeriodDate && currSecond === 0) minutesLeft = nextPeriodDate.getMinutes() - currMinute;
            else if(currSecond === 0) minutesLeft = 60 - currMinute + nextPeriodDate.getMinutes() - 1;
            else minutesLeft = 60 - currMinute + nextPeriodDate.getMinutes() -1;
            if(hoursLeft === 0 && minutesLeft === 0 && secondsLeft <= 3) location.reload();

            if(hoursLeft / 10 < 1) hoursLeft = "0" + hoursLeft;
            
            if(minutesLeft / 10 < 1) minutesLeft = "0" + minutesLeft;
            
            if(secondsLeft / 10 < 1) secondsLeft = "0" + secondsLeft;
            
            var TMS = `${hoursLeft}:${minutesLeft}:${secondsLeft}`

            if(!timetable[dayWeek][nextPeriod].teacher || timetable[dayWeek][nextPeriod].teacher === " "){
                document.getElementById("KOH").innerHTML = `in ${timetable[dayWeek][nextPeriod].room}`;
            } else document.getElementById("KOH").innerHTML = `with ${timetable[dayWeek][nextPeriod].teacher} in ${timetable[dayWeek][nextPeriod].room}`;
            
            document.getElementById("HMS").innerHTML = `${nextPeriodSubject} in ${TMS}`;
            document.querySelector('title').textContent = `${nextPeriodSubject} in ${TMS}`;
            if(!timetable[dayWeek][nextPeriod].room) document.getElementById("KOH").innerHTML = "";
    }
    if(!timetable) document.getElementById("HMS").innerHTML = "<a href='./upload.html'>Upload</a> your timetable to continue!"
    
    var tstr = " ";
    if(currDay === 3){
        for(i = 0; i < 12; i++) {
            try{
                if(timetable[dayWeek][wednesdayNumToPeriod(i)].startDate){
                    var subject = timetable[dayWeek][wednesdayNumToPeriod(i)].subjectName;
                    if(!subject) subject = "";
                    var teacher = timetable[dayWeek][wednesdayNumToPeriod(i)].teacher;
                    if(!teacher) teacher = "";
                    var room = timetable[dayWeek][wednesdayNumToPeriod(i)].room;
                    if(!room) room = "";
                    var startDate = new Date(timetable[dayWeek][wednesdayNumToPeriod(i)].startDate);
                    var hours = startDate.getHours();
                    var minutes = startDate.getMinutes();
                    if(hours / 10 < 1) hours = "0" + hours;
                    if(minutes / 10 < 1) minutes = "0" + minutes;
                    var startTime = `${hours}:${minutes}`;
                    if(wednesdayNumToPeriod(i) === "R") tstr += `<tr class="tableRow"><td class="alignRight">R</td><td class="smallFont"><b>Recess</b> - 10:55</td><td class="smallColumn"> </td></tr>`;
                    else if(wednesdayNumToPeriod(i) === "WL") tstr += `<tr class="tableRow"><td class="alignRight">L</td><td class="smallFont"><b>Lunch</b> - 12:10</td><td class="smallColumn"> </td></tr>`;
                    else if(wednesdayNumToPeriod(i) === "ASS") tstr += `<tr class="tableRow"><td class="alignRight">A</td><td class="smallFont"><b>Assembly</b> - 10:40</td><td class="smallColumn"> </td></tr>`;
                    else tstr += `<tr class="tableRow"><td class="alignRight">${wednesdayNumToPeriod(i)}</td><td class="smallFont"><b>${subject}</b> <br> ${startTime} - ${teacher}</td><td class="smallColumn">${room}</td></tr>`;
                } else if(wednesdayNumToPeriod(i) !== "BS" && wednesdayNumToPeriod(i) !== "AS" && wednesdayNumToPeriod(i) !== "AS1" && wednesdayNumToPeriod(i) !== "AS2") tstr += `<tr class="tableRow"><td class="alignRight">${wednesdayNumToPeriod(i)}</td><td class="smallFont"><b>Free Period</b></td><td class="smallColumn"></td></tr>`;
            } catch(e){}
        }
    } else {
        if(dayWeek === "1A") dayWeek = "1B";
        else if(dayWeek === "1B") dayWeek = "1A";
        for(i = 0; i < 10; i++) {
            try{
                if(timetable[dayWeek][numToPeriod(i)].startDate){
                    var subject = timetable[dayWeek][numToPeriod(i)].subjectName;
                    if(!subject) subject = "";
                    var teacher = timetable[dayWeek][numToPeriod(i)].teacher;
                    if(!teacher) teacher = "";
                    var room = timetable[dayWeek][numToPeriod(i)].room;
                    if(!room) room = "";
                    var startDate = new Date(timetable[dayWeek][numToPeriod(i)].startDate);
                    var hours = startDate.getHours();
                    var minutes = startDate.getMinutes();
                    if(hours / 10 < 1) hours = "0" + hours;
                    if(minutes / 10 < 1) minutes = "0" + minutes;
                    var startTime = `${hours}:${minutes}`;
                    if(numToPeriod(i) === "R") tstr += `<tr class="tableRow"><td class="alignRight">R</td><td class="smallFont"><b>Recess</b> - 11:00</td><td class="smallColumn"> </td></tr>`;
                    else if(numToPeriod(i) === "L") tstr += `<tr class="tableRow"><td class="alignRight">L</td><td class="smallFont"><b>Lunch</b> - 13:25</td><td class="smallColumn"> </td></tr>`;
                    else tstr += `<tr class="tableRow"><td class="alignRight">${numToPeriod(i)}</td><td class="smallFont"><b>${subject}</b> <br> ${startTime} - ${teacher}</td><td class="smallColumn">${room}</td></tr>`;
                } else if(numToPeriod(i) !== "BS" && numToPeriod(i) !== "AS1" && numToPeriod(i) !== "AS2")tstr += `<tr class="tableRow"><td class="alignRight">${numToPeriod(i)}</td><td class="smallFont"><b>Free Period</b></td><td class="smallColumn"></td></tr>`;
            } catch(e){}
        }
    }
    document.getElementById("classes").innerHTML = tstr;
} 

if(!timetable) window.location.href = "./upload.html";
else window.setInterval(countdownTimer, 1000);