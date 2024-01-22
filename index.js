// Code your solution here
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']
function findMatching(arrDrivers, driver){
 let matchingDriver = arrDrivers.filter((matchName) => driver.toUpperCase() === matchName.toUpperCase())
 return matchingDriver; 
}

function fuzzyMatch(arr, letters){
 let driverName = arr.filter((element) => element.startsWith(letters))
 return driverName;
}

function matchName(arr, str){
    let drivers = arr.filter((object) => object.name === str)
    return drivers;
}