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

function cypherPhrase (obj, str) {
     return getTransformedArray(str, function(a) {
            for (var key in obj) {
                if (obj.hasOwnProperty(a)) {
                    return a = obj[a];
                } else return a;   
            }
        }).join('');
}

function decypherPhrase (obj, str) {
     return getTransformedArray(str, function(a) {
            for (var key in obj) {
                if (a === obj[key]) {
                    return a = key;
                } 
            }
            return a;
        }).join('');
}