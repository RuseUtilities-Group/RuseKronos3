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

function nextPeriod(){
    
}

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
            period = "L";
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
    for(i = 0; i < 9; i++) {
        if(timetable[dayWeek][numToPeriod(i)].subjectName){
            var startDate = new Date(timetable[dayWeek][numToPeriod(i)].startDate);
            if(startDate.getHours() >= currHour){
                if(startDate.getMinutes() > currMinute){
                    if(59 >= currSecond){
                        return numToPeriod(i);
                    }
                }
            }
        }
    }
}

function wednesdayfindNextPeriod(dayWeek, currHour, currMinute, currSecond){
    for(i = 0; i < 9; i++) {
        if(timetable[dayWeek][wednesdayNumToPeriod(i)].subjectName){
            var startDate = new Date(timetable[dayWeek][wednesdayNumToPeriod(i)].startDate);
            if(startDate.getHours() >= currHour){
                if(startDate.getMinutes() > currMinute){
                    if(59 >= currSecond){
                        return wednesdayNumToPeriod(i);
                    }
                }
            }
        }
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

    // Odd weeks are Week A, i.e. Week 1 of the year is always A unless a blood moon rises over saturn
    if(currWeek % 2 === 0) weekLetter = "B";
    
    // If Saturday and Sunday, force showing Monday
    if(currDay === 0 || currDay === 6) currDay = 1;

    var dayWeek = currDay+weekLetter;

    if(localStorage.getItem("timetable")){
        if(currDay !== 3){
            nextPeriod = findNextPeriod(dayWeek, currHour, currMinute, currSecond);
            if(!nextPeriod){
                if(currDay === 5) currDay = 1;
                else currDay++;
                dayWeek = (currDay)+weekLetter;
                if(currDay === 3){
                    nextPeriod = wednesdayfindNextPeriod(dayWeek, currHour, currMinute, currSecond);
                } else nextPeriod = findNextPeriod(dayWeek, currHour, currMinute, currSecond);
            }
        } if(currDay === 3){
            nextPeriod = wednesdayfindNextPeriod(dayWeek, currHour, currMinute, currSecond);
            if(!nextPeriod){
                dayWeek = (currDay+1)+weekLetter;
                nextPeriod = findNextPeriod(dayWeek, currHour, currMinute, currSecond);
            }
        }
    }
    console.log(timetable[dayWeek][nextPeriod].subjectName);
}


if (localStorage.getItem("timetable") === null) {
    timetable = {
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
                "subjectName": "",
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
                "subjectName": "",
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
                "subjectName": "",
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
                "subjectName": "",
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
                "subjectName": "",
                "startDate": "2022-07-31T00:40:00.000Z",
                "endDate": ""
            },
            "R":{
                "teacher": "",
                "room": "",
                "subjectCode": "",
                "subjectName": "",
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
            "L":{
                "teacher": "",
                "room": "",
                "subjectCode": "",
                "subjectName": "",
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
                "subjectName": "",
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
                "subjectName": "",
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
                "subjectName": "",
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
                "subjectName": "",
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
                "subjectName": "",
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
                "subjectName": "",
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
                "subjectName": "",
                "startDate": "2022-07-31T00:40:00.000Z",
                "endDate": ""
            },
            "R":{
                "teacher": "",
                "room": "",
                "subjectCode": "",
                "subjectName": "",
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
            "L":{
                "teacher": "",
                "room": "",
                "subjectCode": "",
                "subjectName": "",
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
                "subjectName": "",
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
                "subjectName": "",
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
                "subjectName": "",
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
                "subjectName": "",
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
}
else {
    timetable = JSON.parse(localStorage.getItem("timetable"));
}


countdownTimer();