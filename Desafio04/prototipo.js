$(document).ready(function () {
    $("#buttonbars").click(function () {
        if ($("#form").is(":visible")) {
            $("#form").hide();
        } else {
            $("#form").show();
        }
    })
});

$(window).resize(function () {
    if ($(document).innerWidth() > 600) {
        $("#form").hide();
    }
});
