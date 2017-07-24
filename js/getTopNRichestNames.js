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

function pluckByAttribute(obj, label) {
    return getTransformedArray(obj, function(a) {
        for (var key in a) {
            if (a.hasOwnProperty(label)) {
                return a[label];
            }
        }
    });
}

function getTopNRichestNames(number, obj) {
    var newObj = obj.map(function(a) {
        var str1 = a.income.slice(0, -1);
        var str2 = a.income.slice(-1);
        if (str2 === 'B') {
            a.income = str1 * 1e9;
        } else if (str2 === 'M') {
            a.income = str1 * 1e6;
        } else if (str2 === 'K') {
            a.income = str1 * 1e3;
        }
        return a;
    });

    newObj.sort(function(a, b) {
        return a.income < b.income;
    });

    return pluckByAttribute(newObj.slice(0, number), 'name');
}