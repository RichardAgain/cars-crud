
import Car from "./modules/car.js";

// const getById = document.getElementById

const form = document.getElementById('formElem')

form.addEventListener('submit', (e) => {
    e.preventDefault()

    
    const formData = new FormData(form)
    const body = {}
    
    formData.forEach((value, key) => body[key] = value)

    // console.log(Object.entries(body))

    const car = new Car(body)
    console.log(car)

    car.setData({'name' : 'pepe', 'pepe': 'pepe'})

    console.log(car)

})

