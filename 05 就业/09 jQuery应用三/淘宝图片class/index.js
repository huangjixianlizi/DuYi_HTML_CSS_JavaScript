function init() {
    bindEvent();
    dirClick()
}
init();
var activeClass = 'active';
var len = $('li').length;
function bindEvent() {
    $('ul').on('click', 'li', function () {
        var index = $(this).index();
        var $this = $(this);
        $(this).toggleClass(activeClass).siblings().removeClass(activeClass);
        var flag = $(this).hasClass(activeClass);
        change(index,flag);
    })
};

function dirClick() {
    $('a span').on('click', function () {
        var $this = $(this);
        var index;
        var cla = $this.parent().attr('class');
        var nowIndex = $('.active').index();
        cla == 'navLeft' ? nowIndex-- : nowIndex++;
        index = nowIndex;
        if (nowIndex == -1) {
            index = len - 1;
        }
        if (nowIndex == len) {
            index = 0;
        }
        $('li').eq(index).toggleClass(activeClass).siblings().removeClass(activeClass);
        change(index, true);

    })
}

function change(i, flag) {
    var src = $('li').eq(i).find('img').attr('src');
    var img = new Image();
    img.src = src;
    // 展示图片
    if (flag) {
        // 展示大图
        img.onload = function () {
            var w = img.width;
            var h = img.height;
            $('.phptpView').css({
                'width': w + 'px',
                'height': h + 'px'
            }).find('img').css({
                'transform': 'scale(0.96)'
            }).on('click', function () {
                $('.phptpView').css({
                    'width': 0 + 'px',
                    'height': 0 + 'px'
                });
                $('li').eq(i).removeClass(activeClass);
            })
        }
    } else {
        // width=0;
        $('.phptpView').css({
            'width': 0 + 'px',
            'height': 0 + 'px'
        })
    }
    $('.phptpView').find('img').attr('src', src);
}