// 放大倍数
var mul = 2;
function init() {
    bindEvent();
    createMove();
}
init();

function bindEvent() {
    getIndex(0);
    $('ul').on('click', 'li', function () {
        var index = $(this).index();
        getIndex(index);
    });
    $('.content').on('mousemove', function (e) {
        move(e);
    }).on('mouseleave', function () {
        $('.bigView').hide();
        $('.moveView').hide();
    });
};

function getIndex(i) {
    var src = $('li').eq(i).find('img').attr('src');
    $('.active').removeClass('active');
    $('li').eq(i).addClass('active');
    var img = '<img src="' + src + '" alt="">';
    $('.imgCover').empty().append(img);
    $('.bigView').empty().append(img).find('img').css({
        'width': 500 * mul + 'px',
        'height': 500 * mul + 'px'
    });
}

function createMove() {
    var w = 500 / mul;
    $('.moveView').css({
        'width': w + 'px',
        'height': w + 'px'
    })
};

function move(e) {
    var w = $('.moveView').width();
    var X = e.clientX - $('.wrapper').offset().left - w / 2;
    var Y = e.clientY - $('.wrapper').offset().top - w / 2;

    X = X <= 0 ? 0 : X;
    Y = Y <= 0 ? 0 : Y;

    X = X >= (500 - w) ? (500 - w) : X;
    Y = Y >= (500 - w) ? (500 - w) : Y;

    $('.moveView').css({
        'left': X,
        'top': Y,
        'display': 'block'
    })

    var posX = X * mul;
    var posY = Y * mul;

    $('.bigView').css({
        'display': 'block'
    }).find('img').css({
        'margin-left': -posX,
        'margin-top': -posY
    })
};