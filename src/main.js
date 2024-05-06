
import Car from "./modules/car.js";
import { validatePlate, validateYear } from "./modules/validations.js";

const form = document.getElementById('formElem')

form.addEventListener('submit', (e) => {
    e.preventDefault()

    
    const formData = new FormData(form)
    
    const car = new Car(formData)
    console.log(car)
    
    console.log(validatePlate(car.plate))

    console.log(validateYear(car.year))
    
})

const brandCombo = document.getElementById('brand')
const modelCombo = document.getElementById('model')

const onSelectChange = () => {

    const models = {
        'Toyota': ['Corsa', 'Fortruner', 'Yaris'],
        'Ford': ['Fiesta', 'Ranger', 'Explorer' ],
        'Chevrolet': ['Optra', 'Cruze', 'Silverado']
    }

    modelCombo.replaceChildren()
    
    models[brandCombo.value].forEach(value => {
        const option = modelCombo.appendChild(document.createElement('option'))
        option.value = value
        option.innerText = value
    })
}

onSelectChange()
brandCombo.onchange = onSelectChange

