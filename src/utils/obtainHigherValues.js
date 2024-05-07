export const obtainHigherValues = (amount, array) => {
    const aValues = array.map(e => Object.values(e)[0]);
    
    aValues.sort((a, b) => b - a);
    
    const higherObjects = array.filter(e => Object.values(e)[0] === aValues[0]);
    
    return higherObjects.slice(0, amount);
}

export const obtainHigherValuesObject = (amount, object) => {
    let aValues = Object.values(object);
    
    aValues.sort((a, b) => b - a);
    
    const higherObjects = {};
    aValues = aValues.slice(0, amount)
    
    aValues.forEach(v => {
        Object.keys(object).forEach(key => {
            if (object[key] === v) {
                higherObjects[key] = v;
                return
            }
        })
    })

    return higherObjects;
}