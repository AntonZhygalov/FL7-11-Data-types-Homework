function forEach(arr, fn) {
    for (var i = 0; i < arr.length; i++) {
        fn(arr[i]);
    }
}

function getTransformedArray(arr, fn) {
    var newArr = [];
    forEach(arr, function(a) {
        newArr.push(fn(a));
    });
    return newArr;
}

function cypherPhrase(obj, str) {
    return getTransformedArray(str, function(a) {
        for (var key in obj) {
            if (obj.hasOwnProperty(a)) {
                return a = obj[a];
            } else return a;
        }
    }).join('');
}

function decypherPhrase(obj, str) {
    var newObj = {};
    for (var key in obj) {
        newObj[obj[key]] = key;
    }
    return cypherPhrase(newObj, str);
}