function getStyle(elem, prop) {
    if (window.getComputedStyle) {
        return window.getComputedStyle(elem, null)[prop];
    } else {
        return elem.currentStyle[prop];
    }
}


function startMove(obj, data, func) {
    clearInterval(obj.timer);
    var timer = null;
    var iSpeed,
        iCur,
        name;
    obj.timer = setInterval(function() {
        var bStop = true;
        for (var attr in data) {
            if (attr === 'opacity') {
                iCur = parseFloat(getStyle(obj, attr)) * 100;
            } else {
                iCur = parseInt(getStyle(obj, attr));
            }
            iSpeed = (data[attr] - iCur) / 8;
            iSpeed = iSpeed > 0 ? Math.ceil(iSpeed) : Math.floor(iSpeed);
            if (attr === 'opacity') {
                obj.style.opacity = (iSpeed + iCur) / 100;
            } else {
                obj.style[attr] = iSpeed + iCur + 'px';
            }
            if (Math.floor(Math.abs(data[attr] - iCur)) != 0 ) {
                bStop = false;
            }
        }
        if (bStop) {
            clearInterval(obj.timer);
            if(name === 'opacity'){
                obj.style.opacity = data[name] / 100;
            }
            func();
        }
    }, 30)
}

