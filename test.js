function add(a, b) {
    return a + b;
}
function sum(myArray) {
    let sum = 0;
    myArray.forEach(element => {
        sum += element;
    });
    return sum;
}
function multipleOfThree(myArray) {
    let mul = 1;
    for (let i = 0; i < 3; i++) {
        mul *= myArray[i];
    }
    return mul;
}
function isPalendrome(str) {
    let rev = "";
    for (let i = str.length - 1; i >= 0; i--) {
        rev += str[i];
    }
    console.log(rev);
    return rev == str;
}
function max(a, b) {
    if (a > b) {
        return a;
    } else {
        return b;
    }
}
function maxOfThree(a, b, c) {
    if (a > b) {
        if (a > c) {
            return a;
        } else {
            return c;
        }
    } else {
        if (b > c) {
            return b;
        } else {
            return c;
        }
    }
}
function isVowel(str) {
    const charAscii = [97, 101, 105, 111, 117];
    return charAscii.includes(str.charCodeAt(0));
}
function sum(myArray) {
    let sum = 0;
    myArray.forEach(element => {
        sum += element;
    });
    return sum;
}
function multiple(myArray) {
    let mul = 1;
    myArray.forEach(element => {
        mul *= element;
    });
    return mul;
}
function reverse(str) {
    let rev = "";
    for (let i = str.length - 1; i >= 0; i--) {
        rev += str[i];
    }
    return rev;
}
function findLongestWord(strArray) {
    let longest = "";
    strArray.forEach(s => {
        if (s.length > longest.length)
            longest = s;
    });
    return longest;
}
function filterLongWords(strArray, idx) {
    let longest = [];
    strArray.forEach(s => {
        if (s.length > idx)
            longest.push(s);
    });
    return longest;
}
function remove(strArray, str) {
    for (let ele of strArray) {
        if (ele == str) {
            //strArray.splice(ele,1);
            strArray.shift();
        }
    }
    return strArray;
}
function slice(strArray, startIndex) {
    console.log("first");
    for (let i = 0; i < startIndex; i++) {
        strArray.shift();
    }
    return strArray;
}
function slice(strArray, startIndex, endIndex) {
    let len = strArray.length;
    for (let i = 0; i < startIndex; i++) {
        strArray.shift();
    }
    for (let i = endIndex; i < len; i++) {
        strArray.pop();
    }
    return strArray;
}
function splice(strArray, startIndex, deleteCount, insertElement) {
    let tempArray = [];
    let str = strArray[startIndex];
    let cnt = 0;
    for (let i = 0; i < strArray.length - deleteCount; i++) {
        if (strArray[i] != str && cnt < deleteCount) {
            tempArray.push(strArray[i]);
            cnt++;
        }
    }
    tempArray.push(insertElement);
    return tempArray;
}
console.log(add(2, 2));
console.log(multipleOfThree([1, 20, 3, 4]));
console.log(isPalendrome("apple"));
console.log(max(2, 3));
console.log(maxOfThree(5, 30, 4));
console.log(isVowel("pineapple"));
console.log(sum([1, 2, 3, 4]));
console.log(multiple([1, 2, 3, 4]));
console.log(reverse("apple"));
console.log(findLongestWord(["apple", "pineaplle", "ginger"]));
console.log(filterLongWords(["apple", "pineaplle", "ginger"], 5));
console.log(remove(["apple", "pineaplle", "ginger"], "apple"));
console.log(slice(["apple", "pineaplle", "ginger"], 0));
console.log(slice(["apple", "pineaplle", "ginger", "orange", "mango"], 2, 5));
console.log(splice(["apple", "pineaplle", "ginger", "orange", "mango"], 1, 1, "strawberry"));