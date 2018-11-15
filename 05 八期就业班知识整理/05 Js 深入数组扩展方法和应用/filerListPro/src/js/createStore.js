function createStore (initialState) {
    var state = initialState || {};
    var list = [];
    return {
        getState: function (type) {
            return state[type];
        },
        dispatch: function (action) {
            state[action.type] = action.value;
            list.forEach(function (ele) {
                ele();
            })
        },
        subscribe: function (func) {
            list.push(func);
        }
    }
}

var Store = createStore({
    text: '',
    sex: 'a'
});




