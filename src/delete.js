var $ = require("jquery");

$("#formD").submit(function(event) {
    let id = $("#id").val();

    // pozivanje iz unosa korisnika
    event.preventDefault();
    $.ajax({
        url: "/delete",
        type: "POST",
        data: {
            id: id,
        },
        success: function(response) {
            console.log(response);
        }
    });
});