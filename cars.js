let tataTiago = {
    name: "Tata Tiago", manufacturer: "Tata", fuelType: "petrol", bodyType: "hatchback",
    seatingCapacity: 5, price: 5000
}
let nexon = {
    name: "Tata Nexon", manufacturer: "Tata", fuelType: "diesel", bodyType: "SUV",
    seatingCapacity: 5, price: 7000
};
let mahindra = {
    name: "Mahindra XUV700", manufacturer: "Mahindra", fuelType: "petrol",
    bodyType: "SUV", seatingCapacity: 5, price: 7500
};
let mg = {
    name: "MG ZS EV", manufacturer: "Mahindra", fuelType: "Electric", bodyType: "SUV",
    seatingCapacity: 5, price: 25000
};
let volvo = {
    name: "Volvo XC90", manufacturer: "Volvo", fuelType: "petrol", bodyType: "hybrid",
    seatingCapacity: 7, price: 35000
};
let list = [tataTiago, nexon, mahindra, mg, volvo];

function getPetrolCarsWithinPrice(list, price) {
    return list.filter((e) => e.price < price);
}

function Car(manufacturer, cnt) {
    this.manufacturer = manufacturer;
    this.cnt = cnt;
}

function groupByManufacturer(list) {
    let manufacturerArray = [];
    for (let car of list) {
        if (manufacturerArray[car.manufacturer]) {
            manufacturerArray[car.manufacturer]++;
        } else {
            manufacturerArray[car.manufacturer] = 1;
        }
    }
    return manufacturerArray;
}
function comparePrices(a, b) {
    return a.price - b.price;
}
function compareBodyType(a, b) {
    return a.bodyType.length - b.bodyType.length;
}
function sortThemByGivenFilter(list, type) {
    if (type == "bodyType") {
        list.sort(compareBodyType);
    } else if (type == "price") {
        list.sort(comparePrices);
    }
    return list;
}
function cloneObject(obj) {
    let newObject = {}
    for (let key in obj) {
        newObject[key] = obj[key];
    }
    return newObject;
}
function addServiceCostToAllCars(list, cost) {
   let newList = [];
   for(let ele of list){
        let cloned = cloneObject(ele);
        cloned.serviceCost=cost;
        newList.push(cloned);
   }
   return newList;
}

console.log(getPetrolCarsWithinPrice(list, 15000));
console.log("Group by:", groupByManufacturer(list));
console.log("Sorted list:", sortThemByGivenFilter(list, "bodyType"));
console.log("Sorted list:", sortThemByGivenFilter(list, "price"));
console.log(addServiceCostToAllCars(list, 100));