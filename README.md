# [device-ip-location](https://www.npmjs.com/package/device-ip-location)

### Get device information from your systems users: Device model and version, operating system and version, and an abundance of location information from their ip address

Handy for use in security management for password resetting, detecting new sign in devices etc.

### Install

npm install device-ip-location 

### Usage

```js
const device = require('device-ip-location');

//Make sure bypass the reverse proxy by allowing for IP visibility by enabling proxy trust if you're using express:
app.enable('trust proxy');

// Within your API function use your request data (req) to access the required parameters (ip and header)
// Example agent - 'Mozilla/5.0 (Linux; Android 5.0; NX505J Build/KVT49L) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/43.0.2357.78 Mobile Safari/537.36';
var agent = req.headers['user-agent'];
// Example requestIp - 105.4.4.147
var requestIp = req.ip

device.getInfo(agent,requestIp,function(err,res){
    if(err){
        console.log(err);
        return
    } 
    console.log(res);
})

```

### Result parse

```json
{ "device":
   { "os":
      { "short_name": "WIN",
        "name": "Windows",
        "version": "10",
        "platform": "x64",
        "family": "Windows" },
     "device": { "id": "", "type": "desktop", "brand": "", "model": "" },
     "client":
      { "engine": "Blink",
        "engine_version": "",
        "short_name": "CH",
        "name": "Chrome",
        "version": "69.0.3497.100",
        "type": "browser" } },
  "locale":
   { "ip": "105.4.4.147",
     "type": "ipv4",
     "continent_code": "AF",
     "continent_name": "Africa",
     "country_code": "ZA",
     "country_name": "South Africa",
     "region_code": "GT",
     "region_name": "Gauteng",
     "city": "Johannesburg",
     "zip": "2000",
     "latitude": -26.2309,
     "longitude": 28.0583,
     "location":
      { "geoname_id": 993800,
        "capital": "Pretoria",
        "languages": [],
        "country_flag": "http://assets.ipstack.com/flags/za.svg",
        "country_flag_emoji": "🇿🇦",
        "country_flag_emoji_unicode": "U+1F1FF U+1F1E6",
        "calling_code": "27",
        "is_eu": false } } }

```