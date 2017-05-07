$(document).ready(function() {
var bih = ["Sarajevo", "Banja Luka", "Mostar"];
var hrvatska = ["Zagreb", "Split", "Dubrovnik"];
var srbija = ["Beograd", "Nis", "Novi Sad"];


 $(".locationCity").hide();
        $('#locationState').on('change', function() {
            var value = $(this).val();
            switch (value) {
                case "BiH":
                    $(".locationCity").show();
                    for (let x of bih) {
                        $("#locationCity").append("<option>" + x + "</option>");
                    }
                    break;
                case "Srbija":
                    $(".locationCity").show();
                    for (let x of srbija) {
                        $("#locationCity").append("<option>" + x + "</option>");
                    }
                    break;
                case "Hrvatska":
                    $(".locationCity").show();
                    for (let x of hrvatska) {
                        $("#locationCity").append("<option>" + x + "</option>");
                    }
                    break;
            }
           
        });

    }); // end dokument