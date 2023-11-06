const forecast1 = [80, 90, 85];
const observed1 = [82, 95, 70];

function scoreForecasts(forecast, observed) {
    let percentArray = [];
    for (let i = 0; i < forecast.length; i++) {
        let acc =Math.abs(forecast[i] - observed[i]);
        if (acc <= 2) {
            percentArray.push(100);
        } else if (acc <= 5) {
            percentArray.push(80);
        } else if (acc < 10) {
            percentArray.push(60);
        } else {
            percentArray.push(0);
        }

    }
    console.log("percent array:" + percentArray);
    const initialValue = 0;
    let total = percentArray.reduce((accumulator, currentValue) => accumulator + currentValue, initialValue);
    console.log("total:" + total);
    return total / percentArray.length;
}

console.log(scoreForecasts(forecast1, observed1));
const forecast2 = [80, 80, 80];
const observed2 = [82, 85, 74];
console.log(scoreForecasts(forecast2, observed2));

