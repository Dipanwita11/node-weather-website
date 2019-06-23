
//
// Goal: Create a reusable function for getting the forecast
//
// 1. Setup the "forecast" function in utils/forecast.js
// 2. Require the function in app.js and call it as shown below
// 3. The forecast function should have three potential calls to callback:
//    - Low level error, pass string for error
//    - Coordinate error, pass string for error
//     - Success, pass forecast string for data (same format as from before)

const request = require('request')


const forecast = (latitude , longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/18ee06eb2e641fd374b83b4998740224/'+latitude+','+longitude+''
    request({url , json: true}, (error, response)=>{
        if(error){
            callback('Not able to get the forecast', undefined)
        }else if(response.body.error){
            callback('Not able to get the forecast, please try again', undefined)
        }else{
            callback(undefined,(
                data={
                    longitude: longitude,
                    latitude: latitude,
                    temperature: response.body.currently.temperature
                }
            ))
        }
    })    
}

module.exports=forecast