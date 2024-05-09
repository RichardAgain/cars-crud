
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

    setData(newData) {
        Object.entries(newData).forEach(entries => {
            const [key, value] = entries

            this[key] = value
        })
    }

    createRow (row) {
        row.appendChild(document.createTextNode(this.model))
        row.appendChild(document.createTextNode(this.name))
        row.appendChild(document.createTextNode(this.plate))

    }

    updateInfo () {

        document.getElementById('brand').value = this.brand
        document.getElementById('plate').value = this.plate

        document.getElementById('year').value = this.year
        document.getElementById('color').value = this.color

        document.getElementById('name').value = this.name
        document.getElementById('second').value = this.second
        document.getElementById('phone').value = this.phone
        document.getElementById('address').value = this.addres
        document.getElementById('ci').value = this.ci

        document.getElementById('carImage').src = this.img
    }

}   

export const carList = [
    new Car ({
        brand: 'Toyota',
        model: 'Corsa',
        plate: '123ASD',
        year: 2009,
        color: '#c7c7c7',
        name: 'Richardo',
        second: 'Hern',
        phone: '0414-4248756',
        ci: '30556338',
        addres: 'albuquerque',
    }),
    new Car ({
        brand: 'Chevrolet',
        model: 'Optra',
        plate: 'AGC75T',
        year: 2008,
        color: '#e8a873',
        name: 'Richardo',
        second: 'Hern',
        phone: '0414-4248756',
        ci: '30556338',
        addres: 'albuquerque',
    }),
    new Car ({
        brand: 'Chevrolet',
        model: 'Optra',
        plate: 'AGC75T',
        year: 2008,
        color: '#e8a873',
        name: 'Richardo',
        second: 'Hern',
        phone: '0414-4248756',
        ci: '30556338',
        addres: 'albuquerque',
    })
]
