function CalculateContractValue() {
    var amount = $("#amount").val();
    var weeks = $("#weeks").val();
    var length = $("#length").val();

    amount = amount * 5;
    amount = amount * weeks;

    $("#contractValueYear").html("&pound;" + amount);

    amount = amount / 12 * length;

    $("#contractValue").html("&pound;" + amount);
}

