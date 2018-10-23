const request = require('request');

var getWeather = (latitude,longitude,callback) =>{
	request({
		url:`https://api.darksky.net/forecast/56b9f328780c7076a4674df4865f5aae/${latitude},${longitude}`,
		json: true
	},(error, response, body)=>{
		if(error){
			callback('Unable to connect to server.');
		}else if(!error && response.statusCode === 200){
			callback(undefined,{
				temperature: body.currently.temperature,
				apparentTemperature:body.currently.apparentTemperature
			})
		}else{
			callback('Unable to fetch weather');
		}
	});
};



module.exports.getWeather= getWeather;