
const validatePlate = plate => {
    return /[A-Z0-9]{6}/.test(plate) && plate.length === 6
}

const validateYear = year => {
    return 1900 <= year <= new Date().getFullYear()
}

const validateCI = ci => {
    return /\d{7,8}/.test(ci) && ci.length < 9
}

const validatePhone = phone => {
    return /^\d{3,4}-\d{7}$/.test(phone)
}
 
const runValidations = (formObj) => { 


    return (
        validateCI(formObj.ci) &&
        validateYear(formObj.year) &&       
        validatePlate(formObj.plate) &&      
        validatePhone(formObj.phone) &&

        !(Object.values(formObj).some((value => !value)))
    )


}

export default runValidations