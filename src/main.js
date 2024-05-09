
import Car, { carList } from "./modules/car.js";
import { onSelectChange } from "./modules/combo.js";
import runValidations from "./modules/validations.js";

const form = document.getElementById('formElem')
const tableBody = document.querySelector('tbody')
const deleteButton = document.getElementById('byebye')

let editing;
let selectedCarIndex;

form.addEventListener('submit', (e) => {
    e.preventDefault()
    
    const formData = new FormData(form)

    const formObj = {}
    formData.forEach((value, key) => formObj[key] = value)
    formObj.img = URL.createObjectURL(formObj.img)

    runValidations(formObj) ? console.log('all test passed') : alert('nai')

    editing ? carList[selectedCarIndex].setData(formObj) : carList.push(new Car (formObj))

    createTable()
})

const deletion = index => {

    carList.splice(index, 1)
    createTable()
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
