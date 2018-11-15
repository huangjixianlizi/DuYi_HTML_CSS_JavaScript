function filterArrByText (data, text) {
    if (!text) {
        return data;
    }
    return data.filter(function (ele, index, self) {
        //'刘港'.indexOf('王') != -1
        return ele.name.indexOf(text) != -1;
    });
}