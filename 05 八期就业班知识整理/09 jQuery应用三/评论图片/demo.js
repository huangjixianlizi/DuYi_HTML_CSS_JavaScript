function init() {
    clickLi();
    bindEvent();
}
init();
var activeClass = 'current';
var boxCon = $('.photoView');
var len = $('li').length;
function clickLi() {
    // 绑定事件利用事件委托
    $('ul').on('click', 'li', function () {
        var index = $(this).index();
        $(this).toggleClass(activeClass).siblings().removeClass(activeClass);
        var flag = $(this).hasClass(activeClass);
        change(index,flag);
    })
};
function bindEvent() {
    $('.navicon').on('click', function () {
        var $this = $(this);
        var cla = $($this.parent()).attr('class');
        var nowIndex = $('.current').index();

        cla == 'navLeft' ? nowIndex-- : nowIndex++;
        var index = nowIndex;
        index = nowIndex == -1 ? len - 1 : index;
        index = nowIndex == len ? 0 : index;
        // console.log(index);
        // .eq(-1) 找到倒数第几个元素
        $('li').eq(index).toggleClass(activeClass).siblings().removeClass(activeClass);
        change(index,true);
    })
};
function change(i, flag) {
    var src = $('li').eq(i).find('img').attr('src'),
        img = new Image();
        img.src = src;
    if (flag) {
        img.onload = function () {
            var imageW = img.width;
            var imageH = img.height;
            boxCon.css({
                'height': imageH + 'px',
                'width': imageW + 'px',
            }).find('img').css({
                'transform': 'scale(0.96)'
            }).on('click', function () {
                $('li').eq(i).removeClass(activeClass);
                boxCon.css({
                    'width': 0,
                    'height': 0,
                })
            });
        }
        boxCon.find('img').attr('src', src);
    } else {
        boxCon.css({
            'width': 0 + 'px',
            'height': 0 + 'px',
        })
    }
}
