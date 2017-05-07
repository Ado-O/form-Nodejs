var $ = require("jquery");

$("#formM").submit(function(event) {
    let userName = $("#fname").val();
    let userLName = $("#lname").val();
    let userMob = $("#mob").val();
    let gmail = $("#email").val();
    let userState = $("#locationState").val();
    let userCity = $("#locationCity").val();

    // pozivanje iz unosa korisnika
    event.preventDefault();
    $.ajax({
        url: "/",
        type: "POST",
        data: {
            name: userName,
            lname: userLName,
            mob: userMob,
            gmail: gmail,
            state: userState,
            city: userCity,
        },
        success: function(response) {
            console.log(response);
        }
    });
    location.reload();
});