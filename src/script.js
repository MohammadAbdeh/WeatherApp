 var temps;
var tempf;
var temp;
function weather() {

    var location = document.getElementById("location");
    var apiKey = '733b52789029649f2f700955a26f2fb3'; 
    var url = 'https://api.forecast.io/forecast/';
 
    navigator.geolocation.getCurrentPosition(success, error);

    function success(position) {
      latitude = position.coords.latitude;
      longitude = position.coords.longitude;
     latitude= parseFloat(latitude).toFixed(2)
longitude=parseFloat(longitude).toFixed(2)
      location.innerHTML = 'Latitude is ' + latitude + '° Longitude is ' + longitude + '°';
var api=url + apiKey + "/" + latitude + "," + longitude + "?callback=?";
       $.getJSON(api, function(data) {
         tempf=data.currently.temperature;
         temp=tempf;
          $('#click').click(function(){
       temps=(tempf-32)/1.8 ;
        temps=parseFloat(temps).toFixed(2);
  if(temp===tempf){
    temp=temps;
   $('#temp').html(temp+"°C");
  }else{
    temp=tempf;
   $('#temp').html(temp+"°F");
  }
 });
        $('#temp').html(temp+"°F");
        $('#minutely').html(data.currently.summary);
         var str=data.currently.icon;
         str.toLowerCase();
        //////////////////////////////
         if (str.includes("rainy")){
           document.body.background ="https://report.az/storage/news/bc4a5bdaa7ab650d89d63f345be2c380/e1716b55-8504-4433-9395-ea94b3d6cef3.jpg"
         }
           else if (str.includes("cloudy")){
           document.body.background ="http://w0.fast-meteo.com/system/images/1840/large/Cloudy-Weather.JPG?1307982446"; }
            else if (str.includes("snow")){
           document.body.background ="https://bloximages.chicago2.vip.townnews.com/tdn.com/content/tncms/assets/v3/editorial/6/34/63412eb6-bad7-5143-8e70-38d436ebd83e/584a0fadbd175.image.jpg?resize=1200%2C876";
         }
             else
           document.body.background = "http://aceadventure.com.sg/wp-content/uploads/2015/04/Summit-lake-in-clear-weather.jpg";
             /////////
      });
    $.ajax({
            url: "https://geoip-db.com/jsonp",
            jsonpCallback: "callback",
            dataType: "jsonp",
            success: function( location ) {
               
                $('#city').html(location.city+","+location.country_name);
               
                  
            }
        });     
    }

    function error() {
      location.innerHTML = "Unable to retrieve your location";
    }

    location.innerHTML = "Locating...";
  }

  weather();