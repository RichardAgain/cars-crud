
import Car, { carList } from "./modules/car.js";
import {} from "./modules/combo.js";
import { validatePlate, validateYear } from "./modules/validations.js";

const form = document.getElementById('formElem')
const tableBody = document.querySelector('tbody')


form.addEventListener('submit', (e) => {
    e.preventDefault()
    
    const formData = new FormData(form)

    const formObj = {}
    formData.forEach((value, key) => formObj[key] = value)

    const car = new Car(formObj)



    carList.push(car)
    createTable()

    const avatar = document.querySelector('img')

    console.log(e.files)

    // const blob = new Blob([e.files[0]], { type: "image/jpeg" })
    const blobURL = URL.createObjectURL(car.img)
    avatar.style.display = "block"
    avatar.src = blobURL

})




const createTable = () => {
    tableBody.replaceChildren()

    carList.forEach(car => {
        const row = tableBody.appendChild(document.createElement('tr'))
        car.setTableRow(row)

        row.onclick = () => car.updateInfo()
    })
}

createTable()
