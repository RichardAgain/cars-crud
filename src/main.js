
import Car, { carList } from "./modules/car.js";
import { onSelectChange } from "./modules/combo.js";
import runValidations from "./modules/validations.js";

const form = document.getElementById('formElem')
const toShow = document.getElementById('carList')

const submitButton = document.getElementById('submitButton')
const createButton = document.getElementById('create')
const deleteButton = document.getElementById('byebye')

let editing;
let selectedCarIndex;

form.addEventListener('submit', (e) => {
    e.preventDefault()
    
    const formData = new FormData(form)

    const formObj = {}
    formData.forEach((value, key) => formObj[key] = value)
    formObj.img = URL.createObjectURL(formObj.img)

    runValidations(formObj) ? (
        editing ? carList[selectedCarIndex].setData(formObj) : carList.push(new Car (formObj))

    ) : (alert('failed validations'))

    createTable()
})

createButton.onclick = () => {
    toggleEditing(false)
    clear()
}

deleteButton.onclick = () => {

    const car = carList[selectedCarIndex]
    console.log(car)
        
    confirm(`Seguro quieres eliminar el ${car.model} (${car.plate}) de ${car.name}?`) && carList.splice(selectedCarIndex, 1)

    createTable()

}

const clear = () => {

    document.getElementById('brand').value = 'Toyota'
    document.getElementById('plate').value = ''
    document.getElementById('year').value = ''
    document.getElementById('color').value = ''

    document.getElementById('name').value = ''
    document.getElementById('second').value = ''
    document.getElementById('phone').value = ''
    document.getElementById('address').value =''
    document.getElementById('ci').value = ''

    document.getElementById('carImage').src = ''
}

const toggleEditing = value => {
    editing = value
    submitButton.value = value ? 'Modificar' : 'Crear'
}


const createTable = () => {
    toShow.replaceChildren()

    carList.forEach((car, index) => {

        const row = toShow.appendChild(document.createElement('div'))
        car.createRow(row)

        
        row.classList.add('bg-green-400')
        row.classList.add('hover:bg-gray-400')


        console.log('how')

        row.onclick = () => { 
            car.updateInfo()
            onSelectChange()
            toggleEditing(true) 
            selectedCarIndex = index 
        }

    })
}

createTable()
 