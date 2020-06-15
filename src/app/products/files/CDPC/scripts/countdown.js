function calcage(secs, num1, num2) {
    s = ((Math.floor(secs / num1)) % num2).toString();
    if (s.length < 2)
        s = "0" + s;
    return s;
}

var CountStepper = 1;
var amountperday, hoursperday, moneypersecond, worktype;

var started = false;

function StartTimer() {
    if (worktype == "permanent") {
        amountperday = $("#amount").val();
        amountperday = amountperday / 52;
        amountperday = amountperday / 5;
    }
    else {
        amountperday = $("#amount").val();
    }

    if (started == true) {
        started = false;
        $("#startbutton").val("START");
        return;
    } else {
        $("#startbutton").val("FINISH");
        started = true;
        hoursperday = $("#hours").val();
        moneypersecond = amountperday / hoursperday / 60 / 60;
        CountUp(0);
    }
}



function CountUp(overallsecs) {

    if (started == true) {
        var mins, secs, pounds, pence, total;

        total = overallsecs * moneypersecond;

        pence = leftPad(total % 1, 2);
        pounds = total - (total % 1);
        //pence = total - (total % 100);

        mins = calcage(overallsecs, 60, 60);
        secs = calcage(overallsecs, 1, 60);

        $("#cntdwn-mins").text(mins);
        $("#cntdwn-secs").text(secs);
        $("#money-pounds").text(pounds);
        $("#money-pence").text(pence);


        setTimeout("CountUp(" + (overallsecs + CountStepper) + ")", SetTimeOutPeriod);
    }
}




var SetTimeOutPeriod = (Math.abs(CountStepper) - 1) * 1000 + 990;


function leftPad(number, targetLength) {
    var output = number + '';

    while (output.length > targetLength) {
        output = output.toString().substr(2, 2);
    }
    if (output.length < targetLength) {
        output = "0" + output;
    }
    return output;
}