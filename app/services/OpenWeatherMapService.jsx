import Axios from 'axios';

const API_KEY = 'e11af50148682cadb8b81ee1e1f1df4d';
const API_URL = 'http://api.openweathermap.org/data/2.5/weather?units=metric&APPID=' + API_KEY;

export default{
  getTemp(location){
    var encodedLocation = encodeURIComponent(location);
    var requestUrl = `${API_URL}&q=${encodedLocation}`;

    return Axios.get(requestUrl)
      .then(function(res){
        if(res.data.cod && res.data.message){
          throw new Error(res.data.message);
        }
        else{
          return res.data.main.temp;
        }
      })
      .catch(function(err){
        throw new Error(err.data.message);
      });
  }
}
