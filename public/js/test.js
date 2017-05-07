    $(document).ready(function() {
        //poziv prvi request
        $.getJSON("http://localhost:3000/api", function(data) {
            for (var x = 0; x < data.length; x++) {
                $("tbody").append("<tr>" + "<th scope='row'>" + [x] +
                    "<td>" + data[x].id + "</td>" +
                    "<td>" + data[x].name + "</td>" +
                    "<td>" + data[x].lname + "</td>" +
                    "<td>" + data[x].mob + "</td>" +
                    "<td>" + data[x].gmail + "</td>" +
                    "<td>" + data[x].state + "</td>" +
                    "<td>" + data[x].city + "</td>" + 
              "<td>" + "<button type='button' class='btn dlt'>Delete</button>" + "</td>" +
              "<td>" + "<button type='button' class='btn inst'>Insert</button>" + "</td>" + 
                    "</th>" + "</tr>");
            }
    // delete button
     $(".dlt").click(function(event) {
      var id =  $(this).parent().parent().find('td:first').text();
       
      event.preventDefault();
      $.ajax({
        url: '/delete',
        type: 'post',
        dataType: 'json',
        data: {
            id: id,
        },
        success: function(data) {
                   console.log(response);
                 }
        });
          location.reload();
    });

        // insert button
    $(".inst").click(function() {
       var ulaz = $(this).parent().parent().find('td:first').text();
        for (var y = 0; y < data.length; y++) {
        if(ulaz == data[y].id){

          $("#fname").val(data[y].name);
          $("#lname").val( data[y].lname);
          $("#mob").val(data[y].mob);
          $("#email").val(data[y].gmail);
          $("#locationState").val(data[y].state);
          $("#locationCity").val(data[y].city);
    
        }  
       }
      });
     });
    });

       