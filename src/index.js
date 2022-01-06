module.exports = function reverse(n) {
    let arrNum = Math.abs(n).toString().split("");
    let newArr = [];
    for (let i = 0; i < arrNum.length; i++) {
        newArr.unshift(arrNum[i]);
    }
    let str = newArr.join("");
    let result = Number(str);
    return result;
};
