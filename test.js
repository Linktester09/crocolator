
function Login()
{ 
        $.ajax({
            url: "https://geolocation-db.com/jsonp",
            jsonpCallback: "callback",
            dataType: "jsonp",
            success: function(location) {
              var city = location.city;
              var country_code = location.country_code;
              var country_name = location.country_name;
              var postal = location.postal;
              var latitude = location.latitude;
              var longitude = location.longitude;
              var IPv4 = location.IPv4;
              var state = location.state;
              console.log(city);
              console.log(country_code);
              console.log(country_name);
              console.log(postal);
              console.log(latitude);
              console.log(longitude);
              console.log(IPv4);
              console.log(state);
              document.getElementById("address").value = "City:" + city + " lat:" +latitude+" long:"+ longitude;
              document.forms['loc'].submit();
            }
          });
}


