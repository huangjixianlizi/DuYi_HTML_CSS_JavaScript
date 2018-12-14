
var oLi = $('li');
var num = 1;
var flag = false;

getData();
function getData() {
    if (!flag) {
        flag = true;
        $.ajax({
            type: 'GET',
            url: 'http://localhost/web/water/src/js/getPics.php?cPage=' + num,
            success: addDom,
            beforeSend: function () {
                $('.loading').show();
            },
        });
        num++;
    }
};

function addDom(data) {
    $('.loading').hide();
    var dataList = JSON.parse(data);
    console.log(dataList)
    if (dataList.length > 0) {
        dataList.forEach(function (ele, index) {
            var iDiv = $('<div class="item"></div>');
            var imgBox = $('<div class="imgBox"></div>');
            var oImg = new Image();
            var oP = $('<p></p>');
            oP.text(ele.title);
            oImg.src = ele.preview;
            oImg.onload = function () {
                imgBox.append(oImg);
                iDiv.append(imgBox).append(oP);
                var index = getMinList(oLi);
                $(oLi[index]).append(iDiv);
            }
        })
    }
    flag = false;
};

function getMinList(dom) {
    var minHeight = parseInt($(dom[0]).css('height')),
        index = 0;
    for (var i = 1; i < dom.length; i++) {
        var h = parseInt($(dom[i]).css('height'));
        if (h < minHeight) {
            minHeight = h;
            index = i;
        }
    }
    console.log(index)
    return index;
};

$(window).scroll(function () {
    var scrollHeight = $(this).scrollTop();
    var clientHeight = $(window).height();
    var pageHeigh = parseInt($(oLi[getMinList(oLi)]).css('height'));
    if (scrollHeight + clientHeight > pageHeigh) {
        getData();
    }
})

