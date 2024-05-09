
import Car, { carList } from "./modules/car.js";
import { onSelectChange } from "./modules/combo.js";
import runValidations from "./modules/validations.js";

const form = document.getElementById('formElem')
const tableBody = document.querySelector('tbody')
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
    editing = false
    clear()
}

const deletion = index => {

    carList.splice(index, 1)
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


const createTable = () => {
    tableBody.replaceChildren()

    carList.forEach((car, index) => {
        const row = tableBody.appendChild(document.createElement('tr'))
        car.setTableRow(row)

        row.onclick = () => { car.updateInfo(), onSelectChange(), selectedCarIndex = index, editing = true }

        deleteButton.onclick = () => deletion(index)
    })
}

createTable()
