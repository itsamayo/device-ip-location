# [device-ip-location](https://www.npmjs.com/package/device-ip-location)

### This package only works with nodejs v10+


### Install

npm install device-ip-location 

### Usage

```js
const device = require('device-ip-location');

// Within your API function use your request data (req) to access the required parameters
// Example agent - 'Mozilla/5.0 (Linux; Android 5.0; NX505J Build/KVT49L) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/43.0.2357.78 Mobile Safari/537.36';
var agent = req.headers['user-agent'];
// Example requestIp - 8.8.8.8
var requestIp = req.ip

var data = device.getInfo(agent,requestIp);

console.log(data);

```

### Result parse

```json
{   "device" : 
    {   "os" : {
            "short_name" : "AND",
            "name" : "Android",
            "version" : "5.0",
            "platform" : "",
            "family" : "Android"
        },
        "device" : {
            "id" : "",
            "type" : "smartphone",
            "brand" : "ZTE",
            "model" : "Nubia Z7 max"
        },
        "client" : {
            "engine" : "Blink",
            "engine_version" : "",
            "short_name" : "CM",
            "name" : "Chrome Mobile",
            "version" : "43.0.2357.78",
            "type" : "browser"
        }
    },
    "locale" : { "time" : "time: 2018-09-26T21:47:09.559Z" },
    "ip" : "8.8.8.8" 
}

```