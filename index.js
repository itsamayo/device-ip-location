const DeviceDetector = require('node-device-detector');
const dd = new DeviceDetector;
const request = require('request');


exports.getInfo = function(headerData,ipData,cb){
    request('http://api.ipstack.com/'+ipData+'?access_key=f5f5dacacca6450fd7a0cd63c1354b2b', function (error, response, body) {
        if (error) {
            console.log(error);
            return;            
        } 
        console.log('success');
        var deviceInfo = dd.detect(headerData);
        // var ipAddress = ipData ? ipData : null; 
        var data = {
            device: deviceInfo,
            locale: JSON.parse(body)
        }
        cb(null, data)         
              
    });          
}