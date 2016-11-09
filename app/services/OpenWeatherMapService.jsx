const API_KEY = 'e11af50148682cadb8b81ee1e1f1df4d';
const API_URL = 'http://api.openweathermap.org/data/2.5/weather?units=metric&APPID=' + API_KEY;

export default{
  getTemp(location){
    var encodedLocation = encodeURIComponent(location);
    var requestUrl = `${API_URL}&q=${encodedLocation}`;

    var deferred = $.Deferred();

    $.ajax({
      method: 'GET',
      url: requestUrl,
      success: function(data){
        if(data.cod && data.message){
          deferred.reject(data.message);
        }
        else{
          deferred.resolve(data.main.temp);
        }
      },
      error: function(err){
        deferred.reject(err.responseJSON.message);
      }
    });

    return deferred.promise();
  }
}
