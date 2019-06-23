
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
                // data={
                //     longitude: longitude,
                //     latitude: latitude,
                //     temperature: response.body.currently.temperature
                // }
                response.body.daily.data[0].summary+" It is currently "+response.body.currently.temperature+" degrees out. There is a "+response.body.currently.precipProbability+"% chance of rain. The highest temparature will be "+response.body.daily.data[0].temperatureHigh+" and the lowest temperature will be "+response.body.daily.data[0].temperatureLow            ))
        }
    })    
}

// Goal: Add new data to forecast

// 1. Update the forecast string to include new data 
// 2. Commit your changes
// 3. Push your changes to gihub abd deploy to heroku
// 4. Test your Work


module.exports=forecast