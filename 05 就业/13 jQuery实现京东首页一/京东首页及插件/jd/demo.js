// 京东首页js动态操作及插件应用

// 左侧menu鼠标覆盖展示
var index;
$('.cate_menu_item').hover(function () {
    $('.cate_pop').css('display', 'block');

    // 获得到第几个li 确定展示内容
    index = $(this).attr('data-index');
    // console.log(index)
    $('#cate_item' + index).css('display', 'block');
    // console.log('.cate_item'+index)    
}, function () {
    // 右侧展示区域
    $('.cate_pop').css('display', 'none');
    // 每一个li对应得展示内容
    $('#cate_item' + index).css('display', 'none');
});

//下拉地区列表
$('#location').areaList({
    items: [{
        name: '北京',
        href: '#',
    }, {
        name: '上海',
        href: '#',
    }, {
        name: '黑龙江',
        href: '#',
    }, {
        name: '天津',
        href: '#'
    }, {
        name: '重庆',
        href: '#',
    }, {
        name: '河北',
        href: '#'
    }, {
        name: '北京',
        href: '#',
    }, {
        name: '上海',
        href: '#',
    }, {
        name: '黑龙江',
        href: '#',
    }, {
        name: '天津',
        href: '#'
    }, {
        name: '重庆',
        href: '#',
    }, {
        name: '河北',
        href: '#'
    }, {
        name: '北京',
        href: '#',
    }, {
        name: '上海',
        href: '#',
    }, {
        name: '黑龙江',
        href: '#',
    }, {
        name: '天津',
        href: '#'
    }, {
        name: '重庆',
        href: '#',
    }, {
        name: '河北',
        href: '#'
    }, {
        name: '北京',
        href: '#',
    }, {
        name: '上海',
        href: '#',
    }, {
        name: '黑龙江',
        href: '#',
    }, {
        name: '天津',
        href: '#'
    }, {
        name: '重庆',
        href: '#',
    }, {
        name: '河北',
        href: '#'
    }, {
        name: '河北',
        href: '#'
    }],
    rowNum: 5,
    // itemWidth: 70,
    nowItem: '北京',
    color: '#999',
    nowItemImg: './image/local.jpg'
});

//应用轮播图插件
$('#swiper').sliderImg({
    image: ['./image/pic1.jpg', './image/pic2.jpg', './image/pic3.jpg'],
    interVal: 2000
});

// 鼠标覆盖滑动展示
$('.services_entry .row1').hover(function () {
    // 滑出
    $('.services_entry').slideUp();
    // 滑入
    $('.services_content').slideDown();

    $('.services_content .content').css('display', 'none');
    // $('.services_content .content').hide();          
    $('.' + this.id + '_content').show();
    $('.nowActive').removeClass('nowActive');
    $('.' + this.id + '_tab').addClass('nowActive');
    $('.services_content .close').show();
});
$('.services_content .close').on('click', function (e) {
    $(this).hide();
    $('.services_content').slideUp();
    $('.services_entry').slideDown();
    $('.services_content .content').css('display', 'none');
    // $('.services_content .content').show();
});
$('.services_content .header span').hover(function () {
    $('.nowActive').removeClass('nowActive');
    $(this).addClass('nowActive');
    $('.services_content .content').hide();
    $('.' + $(this).attr('data') + '_content').show();
});

// 导航条插件调用部分

$('#myJd').dropDown({
    direction: 'y',
    // height: 30,
    colNum: 2,
    menuList: [{
        title: '',
        items: [{
            href: '#',
            name: '待处理订单',
        }, {
            href: '#',
            name: '消息',
        }, {
            href: '#',
            name: '返修退换货',
        }, {
            href: '#',
            name: '我的问答',
        }, {
            href: '#',
            name: '降价商品',
        }, {
            href: '#',
            name: '我的关注',
        }
        ],
    }, {
        title: '',
        items: [{
            href: '#',
            name: '我的京豆',
        }, {
            href: '#',
            name: '我的优惠券',
        }, {
            href: '#',
            name: '我的白条',
        },
        ],
    }]
});
// $('#buy').dropDown({

// });

// $('#user').dropDown({

// });
$('#navWeb').dropDown({
    // 下拉列表里面每一块的排布是横向横向（y）, 纵向（x）
    direction: 'x',
    // 下拉列表内的内容
    menuList: [{
        // 每块的标题
        title: '特色',
        // 每块的宽度
        items: [{
            name: '企业购',
            href: '#'
        }, {
            name: '商用场景管',
            href: '#'
        }, {
            name: '工业品',
            href: '#'
        }, {
            name: '礼品卡',
            href: '#'
        }],
        // 每块每行的选项列数
    }, {
        title: '特色',
        items: [{
            name: '企业购',
            href: '#'
        }, {
            name: '商用场景管',
            href: '#'
        }, {
            name: '工业品',
            href: '#'
        }, {
            name: '礼品卡',
            href: '#'
        }],
    }, {
        title: '特色',
        items: [{
            name: '企业购',
            href: '#'
        }, {
            name: '商用场景管',
            href: '#'
        }, {
            name: '工业品',
            href: '#'
        }, {
            name: '礼品卡',
            href: '#'
        }],
    }, {
        title: '特色',
        items: [{
            name: '企业购',
            href: '#'
        }, {
            name: '商用场景管',
            href: '#'
        }, {
            name: '工业品',
            href: '#'
        }, {
            name: '礼品卡',
            href: '#'
        }],
    }]
});




// input渲染区域
// function addItem(data) {
//     console.log(data)
//     var list = data.result;
//     var str = '';
//     list.forEach(function (ele, index) {
//         str += '<a href="">' + ele[0] + '</a>';
//     });
//     $('.header-right .list').html(str);
//     $('.header-right .list').show();
// }



window.addItem = function(data){
    var list = data.result;
    var str = '';
    list.forEach(function (ele, index) {
        str += '<a href="">' + ele[0] + '</a>';
    });
    $('.header-right .list').html(str);
    $('.header-right .list').show();
}

// $('.cj-input-search').on('input', function () {
//     var val = $(this).val();
//     $.ajax({
//         type: 'GET',
//         url: 'https://suggest.taobao.com/sug',
//         data: { q: val, callback:'addItem',code:'utf-8'},
//         dataType: 'jsonp',
//     })
// });




// 鼠标移走列表消失
$('#search').on('mouseleave', function () {
    $('.header-right .list').hide();
});


// input输入框部分调用插件 
// 应用插件  
$('#search').inputSearch({
    jsonpCallback: 'window.addItem',
    url: 'https://suggest.taobao.com/sug',
    type: 'GET',
    dataName:'q',
    dataType: 'jsonp',
    btnColor: 'red',
    others:'code=utf-8'
});

