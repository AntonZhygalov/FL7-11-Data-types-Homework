function ForEach(arr, fn) {
    for (var i = 0; i < arr.length; i++) {
        fn(arr[i]);
    }
}

function getTransformedArray(arr, fn) {
    var newArr = [];
    ForEach(arr, function(a) {
        newArr.push(fn(a));
    });
    return newArr;
}