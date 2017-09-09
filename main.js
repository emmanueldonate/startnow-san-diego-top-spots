function topSpot() {
    //calling json data
    $.getJSON('data.json', function(data) {
       //grabbing the data from json 
        $.each(data, function(index, value) {
            var items = "<tr><td>" + value.name + "</td><td>" + value.description + "</td><td><a href='https://www.google.com/maps?q=" + value.location + "'><button id='submitButton' class='btn btn - primary'>Open in Maps</button></a></td></tr>";
            //output json data to index.html
            $(items).appendTo('#topSpots');
        });
    });
};

$(document).ready(topSpot);
