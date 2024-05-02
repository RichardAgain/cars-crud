
export default class Car {
    constructor (data) {
        Object.entries(data).forEach(entries => {
            const [key, value] = entries

            this[key] = value
        })
    }

    setData (newData) {
        Object.entries(newData).forEach(entries => {
            const [key, value] = entries

            this[key] = value
        })
    }
}   
