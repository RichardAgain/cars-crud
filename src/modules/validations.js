
const validatePlate = plate => {
    const test = /^[A-Z0-9]{6}$/.test(plate) && plate.length === 6
    test || alert('La placa no esta en el formato correcto')
    
    return test
}

const validateYear = year => {
    const test = year <= new Date().getFullYear() && year >= 1900
    console.log(test)
    test || alert(`La año no esta en el rango correcto (1900 - ${new Date().getFullYear()})`)
    
    return test

}

const validateCI = ci => {
    const test = /\d{7,8}/.test(ci) && ci.length < 9
    test || alert('La cedula no esta en el formato correcto')
    
    return test 
}

const validatePhone = phone => {
    const test = /^\d{3,4}-\d{7}$/.test(phone)
    test || alert('La telefono no esta en el formato correcto')
    
    return test
}

const validateData = data => {
    const test = !(Object.values(data).some((value => !value)))
    test || alert('Faltan campos requeridos')

    return test
}
 
const runValidations = (formObj) => { 

    return (
        validateData(formObj) &&
        validatePlate(formObj.plate) &&      
        validateYear(formObj.year) &&       
        validateCI(formObj.ci) &&
        validatePhone(formObj.phone)
    )

}

export default runValidations