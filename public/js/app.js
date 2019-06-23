fetch('http://puzzle.mead.io/puzzle').then((response) => {

    response.json().then((data) => {

        console.log(data)

    })

})

 

// Goal: Fetch weather!

 

// 1. Setup a call to fetch weather for Boston

// 2. Get the parse JSON response

//     -If error property , print error

//     -If no error property, print location and forecast

// 3. Refresh the browser and test your work






const weatherForm = document.querySelector('form')

const search = document.querySelector('input')

const messageOne = document.querySelector('#message-1')

const messageTwo = document.querySelector('#message-2')

 

//messageOne.textContent = 'From javascript'

 

weatherForm.addEventListener('submit', (e) => {

    console.log('Testing')

 

    e.preventDefault()

    const location = search.value

 

    console.log(location)

 

    messageOne.textContent = 'Loading ......'

    messageTwo.textContent = ''

 
//http://localhost:2000/weather?address=

    fetch('/weather?address=' + location).then((response) => {

        response.json().then((data) => {

            if (data.error) {

                console.log(data.error.message)

                messageTwo.textContent = data.error.message

 

            } else {
                text = data.address + ', '+ data.location+ ', '+data.forecast.longitude+ ', '+data.forecast.latitude+ ', '+data.forecast.temperature
                messageTwo.textContent = text
               // messageTwo.textContent = data.location

                //messageTwo.textContent = data.forecast

                console.log(messageTwo.textContent)

                console.log(data.location)

                console.log(data.forecast)

            }

        })

    })

})

 

// Goal: Use input value to get weather

 

// 1. Migrate fetch call into the submit callback

// 2. Use the search text as the address query string value

// 3. Submit the form with a valid and invalid value to test

