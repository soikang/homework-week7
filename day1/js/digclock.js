/* Code to display time and timezone */
//create a time data function
function currentTime(){
    //declare variables
    var d = new Date(); //get current date
    var hr = d.getHours(); //get current hours
    var min = d.getMinutes(); //get current minutes
    var sec = d.getSeconds(); //get current seconds
    var ampm; //declare empty variable to store AM or PM

    //test different time zone
    //hr = hr + 2;
    
    //add 0 to single digits for seconds
    if (sec < 10){
        sec = "0" + sec;
    }

    //add 0 to single digits for minutes
    if (min < 10){
        min = "0" + min;
    }

    //determine AM or PM string
    if (hr == 12){
        ampm = "PM"; //set to PM
    }
    else if ( hr > 12){
        hr -= 12; //deduct 12 from hours greater than 12 (military time)
        ampm = "PM" //set to PM
    }
    else {
        ampm = "AM"; //set to AM
    }

    //assemble time format to display 
    var time = hr + ":" + min + ":" + sec + " " + ampm;

    // add timezone 
    var utchr = d.getUTCHours(); //get current Greenwhich Mean Time (GMT)
    var timeDiff; // to store time differece betweem GMT hour and Local hour
    var adjTimeDiff; // to store time difference converted to positive number
    var timeZone; // to store the 4 time zones (PT, MT, CT, ET)

    //  Convert Greenwich Mean Time from military time to standard time
    if (utchr == 12){
        //do nothing
    }
    else if (utchr > 12){
        utchr -= 12; //deduct 12 from hours greather than 12 (military time)
    }
    else {
        // do nothing
    }
    //  Calculate time difference between GMT hour and local hour
    timeDiff = utchr - hr; // +6 in my case - MT

    //  Convert time difference, if negative, to positive (adjusted time difference)
    if (timeDiff < 0){ // for example, if UTC hour was 
        adjTimeDiff = -(timeDiff);
    }
    else {
        adjTimeDiff = timeDiff;
    }
    // Check which time zone based on the converted time difference between GMT Hour and Local Hour
    switch(adjTimeDiff){
        case(4): //eastern
            timeZone = "ET";
            break;
        case(5): //central
            timeZone = "CT";
            break;
        case(6): //mountain
            timeZone = "MT";
            break;
        case(7): //pacific
            timeZone = "PT";
            break;
        default:
            timeZone = "outside the continental US time zone"
    } 

    //  Add time zone to the very end of the assembly time format
    //display current local time and time zone on HTML elements 
    document.getElementById("clock").innerHTML = time + " " + timeZone; //adding time

    //run time data function every 1 second
    setInterval(currentTime, 1000); //setting timer
}
//initial run of time data function
currentTime();