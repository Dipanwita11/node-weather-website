const path = require('path')

const express = require('express')

const hbs = require('hbs')

 

const geocode = require('./utils/geoCode.js')

const forecast = require('./utils/forecast.js')

 

const app = express()

const port = process.env.PORT || 3000
 

// Define paths for Express config

const publicDir = path.join(__dirname, '../public')

const viewsPath = path.join(__dirname, '../templates/views')

const partialsPath = path.join(__dirname, '../templates/partials')

 

// Setup handlebars engine and views location

app.set('view engine', 'hbs')

app.set('views', viewsPath)

hbs.registerPartials(partialsPath)





//Setup static directory to serve

app.use(express.static(publicDir))

 

app.get('', (req, res) => {

    // res.send('Hello Express')

    res.render('index', {

        title: 'Weather App',

        name: 'Dipanwita'

    })

})

 

app.get('/about', (req, res) => {

    //    res.send('About')

    res.render('about', {

        title: 'About',

        name: 'Dipanwita'

    })

})

 

// Goal: Create a template for help page

 

// 1. Setup a help template to render a help message to the screen

// 2. Setup the help route and render the template with an example message

// 3. Visit the route in the browser and see your help message print

 

app.get('/help', (req, res) => {

    //res.send('Help')

    res.render('help', {

        title: 'Help',

        name: 'Dipanwita',

        message: 'For any details contact Dipanwita'

    })

})

 

app.get('/weather', (req, res) => {

    if (!req.query.address) {

        return res.send({

            error: 'You must provide an address!!!!'

        })

    }

 

    geocode(req.query.address, (error, { latitude, longitude, location } = {}) => {

        if (error) {

            return res.set({ error })

        }

 

        forecast(latitude, longitude, (error, foreCastData) => {

            if (error) {

                return res.send(error)

            }

            res.send({

                forecast: foreCastData,

                location,

                address: req.query.address

            })

        })

    })

 

    // res.send({

    //     forecast: 'It is snowing',

    //     location: 'New York',

    //     address: req.query.address

    // })

})

 

// Goal: wire up /weather

 

// 1. Require geocode/forecast into app.js

// 2. Use the address to geocode

// 3. Use the coordinates to get forecast

// 4. Send back the real forecast and location 

 

app.get('/product', (req, res) => {

    if (!req.query.search) {

        return res.send({

            error: 'You must provide a search term'

        })

    }

    res.send({

        products: req.query.search

    })

 

})

 

app.get('/help/*', (req, res) => {

    res.render('404', {

        title: '404',

        name: 'Dipanwita',

        errorMessage: 'Help article not found '

    })

})

 

// Goal: Create partial for the footer

 

// 1. Setup the template for the footer partial "Created by some name"

// 2. Render the partial at the bottom of all three pages

// 3. Test your work by visiting all three pages

 

app.get('*', (req, res) => {

    res.render('404', {

        title: '404',

        name: 'Dipanwita',

        errorMessage: 'Page Not Found'

    })

})

 

// Goal: Create and render a 404 page with handlers

 

// 1. Setup the template to render the header and footer

// 2. Setup the template to render an error message in paragraph

// 3. Render the template for both 404 routes

//     - Page not found

//     - Help article not found

// 4. Test your work





app.listen(port, () => {

    console.log('Listening to the port number '+ port)

})

