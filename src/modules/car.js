
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
        row.appendChild(document.createElement('p')).innerText = this.model
        row.appendChild(document.createElement('p')).innerText = this.plate
        row.appendChild(document.createElement('p')).innerText = this.name
        row.appendChild(document.createElement('p')).innerText = this.second
        
        const color = row.appendChild(document.createElement('div'))
        color.classList.add('size-6')

        color.style.backgroundColor = this.color

    }

    updateInfo () {

        document.getElementById('brand').value = this.brand
        document.getElementById('model').value = this.model

        document.getElementById('plate').value = this.plate

        document.getElementById('year').value = this.year
        document.getElementById('color').value = this.color

        document.getElementById('name').value = this.name
        document.getElementById('second').value = this.second
        document.getElementById('phone').value = this.phone
        document.getElementById('address').value = this.address
        document.getElementById('ci').value = this.ci

        document.getElementById('carImage').src = (this.img === '') ? '../assets/image.svg' : this.img
        // color.className = 'border-1 border-black'
    }

}   

export const carList = [
    new Car ({
        brand: 'Chevrolet',
        model: 'Bud Light',
        plate: 'NUM95R',
        year: 2004,
        color: '#f02424',
        name: 'Rayo',
        second: 'McQueen',
        phone: '0414-3127495',
        ci: '95959595',
        address: 'California',
        img: '../assets/rayo.webp'
    }),
    new Car ({
        brand: 'Chrysler',
        model: 'Plymouth Superbird',
        plate: 'AGC75T',
        year: 1970,
        color: '#339ee1',
        name: 'Strip',
        second: 'Weathers',
        phone: '0414-4249066',
        ci: '9425245',
        address: 'Texas',
        img: '../assets/rey.png'
    }),
    new Car ({
        brand: 'Dodge',
        model: 'Charger',
        plate: 'HJFK24',
        year: 1969,
        color: '#f58a32',
        name: 'Snot',
        second: 'Rod',
        phone: '0414-4300312',
        ci: '12029954',
        address: 'Detroit',
        img: '../assets/snot_rod.png'
    }),
    new Car ({
        brand: 'Chevrolet',
        model: 'Task Force',
        plate: 'GAY7T6',
        year: 1956,
        color: '#683a22',
        name: 'Tom',
        second: 'Mater',
        phone: '0414-4248756',
        ci: '30556338',
        address: 'Radiator Springs',
        img: '../assets/mater.png'
    })
]