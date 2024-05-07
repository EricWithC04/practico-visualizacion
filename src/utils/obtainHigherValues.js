export const obtainHigherValues = (amount, array) => {
    const aValues = array.map(e => Object.values(e)[0]);
    
    aValues.sort((a, b) => b - a);
    
    const higherObjects = array.filter(e => Object.values(e)[0] === aValues[0]);
    
    return higherObjects.slice(0, amount);
}

export const obtainHigherValuesObject = (amount, object) => {
    const aValues = Object.values(object);
    
    aValues.sort((a, b) => b - a);
    
    const maxValue = aValues[0];
    
    const keysMaxValue = Object.keys(object).filter(key => object[key] === maxValue);
    
    const higherObjects = {};
    keysMaxValue.slice(0, amount).forEach(key => {
        higherObjects[key] = maxValue;
    });
    
    return higherObjects;
}