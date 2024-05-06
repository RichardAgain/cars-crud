
export const validatePlate = plate => {
    return /[A-Z0-9]{6}/.test(plate) && plate.length === 6
}

export const validateYear = year => {
    return new Date().getFullYear()
}