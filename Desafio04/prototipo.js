<script>

$(document).ready(function () {
            $("#ham").click(function () {
                if ($("#menuguer").is(":visible")) {
                    $("#menuguer").hide();
                } else {
                    $("#menuguer").show();
                }
            })
        });

        $(window).resize(function () {
            if ($(document).innerWidth() > 700) {
                $("#menuguer").hide();
            }
        });

 

</script>   