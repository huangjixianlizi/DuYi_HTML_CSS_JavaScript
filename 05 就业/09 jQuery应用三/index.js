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

        // var src = $this.find('img').attr('src'),
        //     flag = $this.hasClass(activeClass),
        //     img = new Image();
        // img.src = src;
        // if (flag) {
        //     img.onload = function () {
        //         var imageW = img.width;
        //         var imageH = img.height;
        //         boxCon.css({
        //             'height': imageH + 'px',
        //             'width': imageW + 'px',
        //         }).find('img').css({
        //             'transform': 'scale(0.96)'
        //         }).on('click', function () {
        //             $this.removeClass(activeClass);
        //             boxCon.css({
        //                 'width': 0,
        //                 'height': 0,
        //             })
        //         });
        //     }
        //     boxCon.find('img').attr('src', src);
        // } else {
        //     boxCon.css({
        //         'width': 0 + 'px',
        //         'height': 0 + 'px',
        //     })
        // }
    })
};
function bindEvent() {
    $('.navicon').on('click', function () {
        var $this = $(this);
        var cla = $($this.parent()).attr('class');
        var nowIndex = $('.current').index();

        cla == 'navLeft' ? nowIndex-- : nowIndex++;
        index = nowIndex == -1 ? len - 1 : nowIndex;
        index = nowIndex == len ? 0 : nowIndex;

        // var src = $('li').eq(index).find('img').attr('src');
        $('li').eq(index).toggleClass(activeClass).siblings().removeClass(activeClass);
        change(index,true);
        // boxCon.find('img').attr("src", src);
        // var img = new Image();
        // img.src = src;
        // img.onload = function () {
        //     boxCon.css({
        //         'height': img.height + 'px',
        //         'width': img.width + 'px',
        //     }).find('img').css({
        //         'transform': 'scale(0.96)'
        //     })
        // }
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
