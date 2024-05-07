
export default class Car {

    constructor (formObj) {
        Object.entries(formObj).forEach(entries => {
            const [key, value] = entries

            this[key] = value
        })
    }

    get data () {
        return {
            'brand': this.brand,
            'model': this.model,
            'plate': this.plate,
            'year': this.year,
            'color': this.color,
        }
    }

    set data(newData) {
        Object.entries(newData).forEach(entries => {
            const [key, value] = entries

            this[key] = value
        })
    }

    setTableRow (tr) {
        tr.insertCell().textContent = this.model
        tr.insertCell().textContent = this.brand
        tr.insertCell().textContent = this.color

    }

    updateInfo () {

        document.getElementById('modelOut').textContent = this.model
        document.getElementById('brandOut').textContent = this.brand
        document.getElementById('plateOut').textContent = this.plate
    }

}   

export const carList = [
    new Car ({
        brand: 'Toyota',
        model: 'Corsa',
        plate: '123ASD',
        year: 2009,
        color: '#c7c7c7'
    }),
    new Car ({
        brand: 'Chevrolet',
        model: 'Optra',
        plate: 'AGC75T',
        year: 2008,
        color: '#e8a873'
    })
]
