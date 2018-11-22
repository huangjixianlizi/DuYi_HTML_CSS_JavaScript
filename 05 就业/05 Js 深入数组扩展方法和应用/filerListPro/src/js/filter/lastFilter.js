// combineFilterFunc
// 合并 filterArrByText  filterArrBySex .....
// 
function combineFilterFunc (config) {
    // AO = config
    return function (data) {
        var lastArr = data;
        for (var prop in config) {
            // prop = 'text' 'sex'
            //config[prop] = filterArrByText
            // config[prop] = filterArrBySex;
            lastArr = config[prop]( lastArr, Store.getState(prop)); 
        }
        return lastArr;
    }
}

var lastFilterFunc = combineFilterFunc({text: filterArrByText, sex: filterArrBySex});
// , age: filterArrByAge



