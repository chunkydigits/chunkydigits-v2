function calcage(secs, num1, num2) {
    s = ((Math.floor(secs / num1)) % num2).toString();
    if (LeadingZero && s.length < 2)
        s = "0" + s;
    return s;
}

function CountBack(overallsecs) {
    var days, hours, mins, weekends;
    if (overallsecs < 0) {
        $(".cntdwn").text(FinishMessage);
        return;
    }
    days = calcage(overallsecs, 86400, 100000);
    days = getDay(days);    

    hours = calcage(overallsecs, 3600, 24);
    mins = calcage(overallsecs, 60, 60);
    secs = calcage(overallsecs, 1, 60);
    
    /* for days after 3 pm */
    var today = new Date();

    if (hours > 7) {
        hours = "00";
        mins = "00";
        secs = "00";
    }


    if (today.getDay() == 6 || today.getDay() == 0) {
        hours = "00";
        mins = "00";
        secs = "00";
    }

    if (days < 10) {
        $("#cntdwn-days").text("0" + days);
    }
    else {
        $("#cntdwn-days").text(days);
    }
    $("#cntdwn-hours").text(hours);
    $("#cntdwn-mins").text(mins);
    $("#cntdwn-secs").text(secs);
    DisplayStr = days + ", ";
    DisplayStr += hours + ", ";
    DisplayStr += mins + ", ";
    DisplayStr += secs + ". ";

    $(".cntdwn").text(DisplayStr);
    
    if (CountActive)
    {
        setTimeout("CountBack(" + (overallsecs + CountStepper) + ")", SetTimeOutPeriod);
    }
}

function getDay(daysin) {
    switch (daysin) {
        case "56": return 40;
        case "55": return 39;
        case "54": return 39;
        case "53": return 39;
        case "52": return 38;
        case "51": return 37;
        case "50": return 36;
        case "49": return 35;
        case "48": return 34;
        case "47": return 34;
        case "46": return 34;
        case "45": return 33;
        case "44": return 32;
        case "43": return 31;
        case "42": return 30;
        case "41": return 29;
        case "40": return 29;
        case "39": return 29;
        case "38": return 28;
        case "37": return 27;
        case "36": return 26;
        case "35": return 25;
        case "34": return 24;
        case "33": return 24;
        case "32": return 24;
        case "31": return 23;
        case "30": return 22;
        case "29": return 21;
        case "28": return 20;
        case "27": return 19;
        case "26": return 19;
        case "25": return 19;
        case "24": return 18;
        case "23": return 17;
        case "22": return 16;
        case "21": return 15;
        case "20": return 14;
        case "19": return 14;
        case "18": return 14;
        case "17": return 13;
        case "16": return 12;
        case "15": return 11;
        case "14": return 10;
        case "13": return 9;
        case "12": return 9;
        case "11": return 9;
        case "10": return 8;
        case "9": return 7;
        case "8": return 6;
        case "7": return 5;
        case "6": return 4;
        case "5": return 4;
        case "4": return 4;
        case "3": return 3;
        case "2": return 2;
        case "1": return 1;
        case "09": return 7;
        case "08": return 6;
        case "07": return 5;
        case "06": return 4;
        case "05": return 4;
        case "04": return 4;
        case "03": return 3;
        case "02": return 2;
        case "01": return 1;
        default: return 0;
    }
}



if (typeof (TargetDate) == "undefined")
    TargetDate = "03/28/2013 3:00 PM";
if (typeof (CountActive) == "undefined")
    CountActive = true;
if (typeof (FinishMessage) == "undefined")
    FinishMessage = "";
if (typeof (CountStepper) != "number")
    CountStepper = -1;
if (typeof (LeadingZero) == "undefined")
    LeadingZero = true;
CountStepper = Math.ceil(CountStepper);
if (CountStepper == 0)
    CountActive = false;
var SetTimeOutPeriod = (Math.abs(CountStepper) - 1) * 1000 + 990;
var dthen = new Date(TargetDate);
var dnow = new Date();
if (CountStepper > 0)
    ddiff = new Date(dnow - dthen);
else
    ddiff = new Date(dthen - dnow);
gsecs = Math.floor(ddiff.valueOf() / 1000);
CountBack(gsecs);

