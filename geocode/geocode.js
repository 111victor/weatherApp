const request = require('request');
var geocodeAddress=(address, callback)=>{
	var urlIncode = encodeURIComponent(address);
	request({
		url:`https://maps.googleapis.com/maps/api/geocode/json?address=${urlIncode}&key=AIzaSyBqKyBy0JtWyFE3RLUHAzeRZY8W1EugUTk`,
		json: true
	},(error, response, body)=>{
		if(error){
			callback('Unable to connect to Google servers.');
		}else if(body.status === 'ZERO_RESULTS'){
			callback('Unable to find that address');
		}else if(body.status === 'OK'){
			callback(undefined,{
				address: body.results[0].formatted_address,
				latitude: body.results[0].geometry.location.lat,
				longitude: body.results[0].geometry.location.lng
			});
		}
	})
};

module.exports.geocodeAddress = geocodeAddress;

//56b9f328780c7076a4674df4865f5aae