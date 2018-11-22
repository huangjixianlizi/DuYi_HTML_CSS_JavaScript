// server data

var personArr = [
    {name: '王港', src: './src/img/3.png', des: '颈椎不好', sex: 'm'}, 
    {name: '刘莹', src: './src/img/5.png',des: '我是谁', sex: 'f'}, 
    {name: '王秀莹', src: './src/img/4.png', des: '我很好看', sex: 'f'}, 
    {name: '刘金雷', src: './src/img/1.png', des: '你没有见过陌生的脸', sex: 'm'}, 
    {name: '刘飞翔', src: './src/img/2.png', des: '瓜皮刘', sex: 'm'}
];


var oDivFriendList = document.getElementsByClassName('friendList')[0];
var oUl = oDivFriendList.getElementsByTagName('ul')[0];
var oInput = document.getElementsByClassName('search')[0];
// var dom = 

// dom.onclick = function () {
//     Store.dispatch({type: 'age', value: '19-20'});
// }


var Store = createStore({
    text: '',
    sex: 'a',
    // age: '0-18'
});

// 根据后台模拟的数据 来 渲染页面

function renderPage (data) {
    // 在页面生成标签
    var htmlStr = '';
    data.forEach(function (ele, index, self) {
        htmlStr +=  '<li><img src="' + ele.src + '"></img><p class="name">' + ele.name + '</p><p class="des">' + ele.des + '</p></li>';
    });
    oUl.innerHTML = htmlStr;
}



function upDate () {
    renderPage( lastFilterFunc( personArr ) );
}

upDate();

Store.subscribe(upDate);


oInput.oninput = function () {
   Store.dispatch( {type: 'text', value: this.value} );
}





// filterArrByText(personArr, '王');


var oButtonArr = [].slice.call(document.getElementsByClassName('btn'), 0);
var lastActiveBtn = oButtonArr[oButtonArr.length - 1];

function changeActive (ele) {
    ele.className = 'btn active';
    lastActiveBtn.className = 'btn';
    lastActiveBtn = ele;
}

oButtonArr.forEach(function (ele, index, self) {
    ele.onclick = function () {
        changeActive(this);
        Store.dispatch( {type: 'sex', value: this.getAttribute('sex')} );
    }
});


