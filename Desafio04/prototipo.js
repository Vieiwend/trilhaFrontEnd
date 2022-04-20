$(document).ready(function () {
    $("#buttonbars").click(function () {
        $("#lista").toggle();

    });
});

/*esse é a mesma coisa que o visible
        if ($("#form").is(":visible")) {
            $("#form").hide();
        } else {
            $("#form").show();
        }*/
        
$(window).resize(function () {
    if ($(document).innerWidth() > 600) {
        $("#lista").hide();
    }
});
