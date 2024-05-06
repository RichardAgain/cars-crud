
export default class Car {
    constructor (formData) {
        formData.forEach((value, key) => this[key] = value)
    }

    setData (newData) {
        Object.entries(newData).forEach(entries => {
            const [key, value] = entries

            this[key] = value
        })
    }
}   
