export const obtainHigherValues = (amount, array) => {
    const aValues = array.map(e => Object.values(e)[0]);
    
    aValues.sort((a, b) => b - a);
    
    const higherObjects = array.filter(e => Object.values(e)[0] === aValues[0]);
    
    return higherObjects.slice(0, amount);
}