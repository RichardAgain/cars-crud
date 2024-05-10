
const brandCombo = document.getElementById('brand')
const modelCombo = document.getElementById('model')

const onSelectChange = () => {

    const models = {
        'Toyota': ['Corsa', 'Fortruner', 'Yaris'],
        'Ford': ['Fiesta', 'Ranger', 'Explorer' ],
        'Chevrolet': ['Optra', 'Cruze', 'Bud Light', 'Task Force'],
        'Chrysler': ['Plymouth Superbird', '200C', 'Sunbeam'],
        'Dodge': ['Charger', 'Challenger', 'Durango']
    }

    modelCombo.replaceChildren()
    
    models[brandCombo.value].forEach(value => {
        const option = modelCombo.appendChild(document.createElement('option'))
        option.value = value
        option.innerText = value
    })
}

onSelectChange()
brandCombo.onchange = onSelectChange

export { onSelectChange }
