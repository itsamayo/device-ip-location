const DeviceDetector = require('node-device-detector');
const dd = new DeviceDetector;

exports.getInfo = function(headerData,ipData){
    var deviceInfo = dd.detect(headerData);
    var ipAddress = ipData ? ipData : null;
    var date = new Date();
    var data = {
        device: deviceInfo,        
        locale: {
            time: date,
        },
        ip: ipAddress
    }
    return data;  
}