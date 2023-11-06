const testArr1 = [ [1,2,3], [5,2,3], [9,2,3] ];
const testArr2 = [ [1, 2], [3, 4], [5, 6] ];

function firstRowColSum (arr){
    let result = [];
    const init = 0;
    result.push(arr[0].reduce((a,c) => a+c, init));
    result.push(arr.reduce((a,c) => a+c[0], init));
    return result;
}

console.log(firstRowColSum (testArr1));
console.log(firstRowColSum (testArr2));