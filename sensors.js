let frontDoor = {
    id: 1, name: "Front Door Sensor", type: 34, manufacturer: "Climax",
    events: [{ time: "100", name: "Door Closed" }, { time: "101", name: "Door Opened" }]
};
let motionSensor = {
    id: 2, name: "Motion Sensor", type: 43, manufacturer: "NYCE",
    events: [{ time: "100", name: "Motion Detected" }]
};
let porticoLight = {
    id: 3, name: "Portico Light", type: 54, manufacturer: "Osram",
    events: [{ time: "100", name: "Light off" }]
};
let mainEntrance = {
    id: 4, name: "Main Entrance", type: 34, manufacturer: "Climax",
    events: [{ time: "100", name: "Door Closed" }]
};
let list = [frontDoor, motionSensor, porticoLight, mainEntrance];

function groupSensorsByManufacturer(list){
    let manufacturerArray = {};
    for(let sensor of list){
        if(manufacturerArray[sensor.manufacturer]){
            manufacturerArray[sensor.manufacturer]++;
        }else{
            manufacturerArray[sensor.manufacturer]=1;
        }
    }
    return manufacturerArray;
}

function getLatestEventofSensor(list, id){
    let maxEvnt = 0, maxEvntObj;
    for(let ele of list){
        if(ele.id == id){
            for(let evt of ele.events){
                if(evt.time > maxEvnt){
                    maxEvnt = evt.time;
                    maxEvntObj = evt;
                }
            }
        }
    }
    return maxEvntObj;
}

function findMostPopularManufacturer(list){
    let cnt = 0;
    let popularManufacturer="";
    let manufacturers = groupSensorsByManufacturer(list);
    console.log(manufacturers);
    for (let prop in manufacturers) {
        if (manufacturers[prop] > cnt) {
            cnt = manufacturers[prop];
            popularManufacturer = prop;
        }
    }
    return popularManufacturer;
}

console.log("Group by:",groupSensorsByManufacturer(list));
console.log("Latest event of sensor:",getLatestEventofSensor(list, 1));
console.log("expect Climax:", findMostPopularManufacturer(list));