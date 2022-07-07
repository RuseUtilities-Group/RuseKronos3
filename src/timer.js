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



function countdownTimer(){
    var timeLeft;
    var hoursLeft;
    var minutesLeft;
    var secondsLeft;
    const currDate = new Date();
    const currDay = currDate.getDay();
    const currHour = currDate.getHours();
    const currMinute = currDate.getMinutes();
    const currSecond = currDate.getSeconds();
    const currWeek = currDate.getWeek();
    var weekLetter = "A";

    // Odd weeks are Week A, i.e. Week 1 of the year is always A unless a blood moon rises over saturn
    if(currWeek % 2 === 0) weekLetter = "B";
    
    // If Saturday and Sunday, force showing Monday
    if(currDay === 0 || currDay === 6) currDay = 1;

    var dayWeek = day+weekLetter;

    return timeLeft;
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