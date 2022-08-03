timetable = JSON.parse(localStorage.getItem("timetable"));

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
        for(i = 0; i < 10; i++) {
            var startDate = new Date(timetable[dayWeek][numToPeriod(i)].startDate);
            if(startDate){
                if((startDate.getHours() === currHour && startDate.getMinutes() > currMinute) || startDate.getHours() > currHour){
                    return numToPeriod(i);
                    i = 11;
                }
            }
        }
    }
    
    function wednesdayfindNextPeriod(dayWeek, currHour, currMinute, currSecond){
        for(i = 0; i < 12; i++) {
            var startDate = new Date(timetable[dayWeek][wednesdayNumToPeriod(i)].startDate);
            if(startDate){
                if((startDate.getHours() === currHour && startDate.getMinutes() > currMinute)|| startDate.getHours() > currHour){
                    return wednesdayNumToPeriod(i);
                    i = 13;
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

        var nextPeriodDate = new Date(timetable[dayWeek][nextPeriod].startDate);
        var nextPeriodSubject = timetable[dayWeek][nextPeriod].subjectName;
        
        secondsLeft = 60 - currSecond;
        if(currDate.getDay() < nextPeriodDate.getDay()) hoursLeft = nextPeriodDate.getHours() + (24 - currHour);
        else if(currDate.getDay() === 0) hoursLeft = nextPeriodDate.getHours() + (24 - currHour);
        else if(currDate.getDay() === 6) hoursLeft = nextPeriod.getHours() + 24 + (24 - currHour);
        else hoursLeft = nextPeriodDate.getHours() - currHour;

        if(hoursLeft === 0) minutesLeft = nextPeriodDate.getMinutes() - currMinute - 1;
        else minutesleft = 60 - currMinute + nextPeriodDate.getMinutes() -1;

        if(hoursLeft === 0 && minutesLeft === 0 && secondsLeft <= 3) //reload page;

        if(hoursLeft / 10 <= 0) hoursleft = `0${hoursLeft}`;
        if(minutesLeft / 10 <= 0) minutesLeft = `0${minutesLeft}`;
        if(secondsLeft / 10 <= 0) secondsLeft = `0${secondsLeft}`;

        var TMS = `${hoursLeft}:${minutesLeft}:${secondsLeft}`
        

        console.log(`${nextPeriodSubject} in ${TMS}`);
    }


countdownTimer();