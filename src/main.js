
import Car, { carList } from "./modules/car.js";
import { onSelectChange } from "./modules/combo.js";
import runValidations from "./modules/validations.js";

const form = document.getElementById('formElem')
const toShow = document.getElementById('carList')

const submitButton = document.getElementById('submitButton')
const createButton = document.getElementById('create')
const deleteButton = document.getElementById('byebye')

const fileChooser = document.getElementById('img')

let editing;
let selectedCarIndex;

form.addEventListener('submit', (e) => {
    e.preventDefault()
    
    const formData = new FormData(form)

    const formObj = {}
    formData.forEach((value, key) => formObj[key] = value)
    formObj.img = URL.createObjectURL(formObj.img)


    runValidations(formObj) && peformAction(formObj)
})

const peformAction = formObj => {
    const car = new Car(formObj)

    editing ? carList[selectedCarIndex].setData(formObj) : ( carList.push(car), selectedCarIndex = carList.length - 1 )
    
    car.updateInfo()
    onSelectChange()
    toggleEditing(true)

    createTable()
}



createButton.onclick = () => {
    toggleEditing(false)
    clear()
}

deleteButton.onclick = () => {

    const car = carList[selectedCarIndex]
    console.log(car)
        
    confirm(`Seguro quieres eliminar el ${car.model} (${car.plate}) de ${car.name}?`) && carList.splice(selectedCarIndex, 1)

    createTable()
    
    carList.length === 0 ? clear() : carList[carList.length - 1].updateInfo(), selectedCarIndex = carList.length - 1
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
    document.getElementById('carImage').src = '../assets/image.svg'
}

const toggleEditing = value => {
    editing = value
    submitButton.value = value ? 'Modificar' : 'Crear'
    createButton.disabled = !value
    deleteButton.disabled = !value

    createButton.className = (value) ? 'size-10 fill-white hover:fill-slate-500' : 'size-10 fill-slate-500'
    deleteButton.className = (value) ? 'size-10 fill-white hover:fill-slate-500' : 'size-10 fill-slate-500'

    fileChooser.value = null
}


const createTable = () => {
    toShow.replaceChildren()

    carList.forEach((car, index) => {

        const row = toShow.appendChild(document.createElement('div'))
        car.createRow(row)
        
        row.classList.add(`bg-gray-200`)
        row.classList.add('hover:bg-gray-300')
        row.classList.add('inline-block')
        row.classList.add('text-lg')
        row.classList.add('h-10')
        row.classList.add('mt-2')
        row.classList.add('h-12')
        row.classList.add('flex')
        row.classList.add('flex-row')
        row.classList.add('justify-around')
        row.classList.add('items-center')
        row.classList.add('border-black')
        row.classList.add('border-solid')
        row.classList.add('rounded')
        row.classList.add('border-4')
        row.classList.add('cursor-pointer')

        row.onclick = () => { 
            car.updateInfo()
            onSelectChange()
            toggleEditing(true) 
            selectedCarIndex = index 
        }

    })
}

toggleEditing(false)
createTable()
 