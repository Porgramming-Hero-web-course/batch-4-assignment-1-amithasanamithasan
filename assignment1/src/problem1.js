function sumArray(numbers) {
    var sum = 0;
    for (var _i = 0, numbers_1 = numbers; _i < numbers_1.length; _i++) {
        var num = numbers_1[_i];
        sum += num;
    }
    return sum;
}
console.log(sumArray([1, 2, 3, 4, 5]));
