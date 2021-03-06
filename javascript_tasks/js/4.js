const rand10 = (...argv) => {
    return Math.round(10 * Math.random());
}

const randArr = (len, func) => {
    let result = Array(len);
    for (let i = 0; i < result.length; i++) {
        result[i] = func(i);        
    }
    return result;
}

let arr = randArr(10, rand10);

let oddArr = arr.filter((item) => { return item % 2 === 0 && item !== 0; });

console.log(arr);
console.log(oddArr);