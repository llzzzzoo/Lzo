window.addEventListener('load', function () {
    // 1.获取元素
    var prev = this.document.querySelector('.prev');
    var next = this.document.querySelector('.next');
    var focus = this.document.querySelector('.focus');
    var focus_nav = this.document.querySelector('.focus-nav');

    // 1.鼠标经过轮播图，就让按钮显示出来 离开就隐藏
    focus.addEventListener('mouseenter', function () {
        prev.style.display = 'block';
        next.style.display = 'block';
        clearInterval(timer);
        timer = null; // 去除定时器变量
    });
    focus.addEventListener('mouseleave', function () {
        prev.style.display = 'none';
        next.style.display = 'none';
        timer = setInterval(function () {
            next.click();
        }, 3000)
    });

    // 2.动态生成小圆圈 有几张图片几个小圆圈
    var ul = focus.querySelector('ul'); // 注意是focus，避免搞到别的ul了
    var ol = focus.querySelector('.circle');
    var focus_width = focus.offsetWidth; // 转换为Number

    for (var i = 0; i < ul.children.length; i++) {
        // 创建小li
        var li = this.document.createElement('li');

        // 记录当前小li的索引号，通过自定义属性可以哦
        li.setAttribute('index', i);
        //把小li插入ol 
        ol.appendChild(li);

        // 4.小圈圈排他思想 可以边生成边绑定事件
        li.addEventListener('mouseover', function () {
            // 排他思想，先不让其他玩意变色，再让我变色
            for (var i = 0; i < ol.children.length; i++) {
                ol.children[i].className = '';
            }
            this.className = 'selected';

            // 5.点击小圆圈，移动图片
            // 移动距离 小圆圈的索引号 乘以图片的宽度 负值哦
            // 移动到某个小圈的时候，获取其索引号
            var index = this.getAttribute('index');
            // 将索引号赋值给num，按下右侧按钮的num起点就是小圆圈所在的index
            // 总之，index记录当前li的下标
            num = index;
            circle = index;
            animate(ul, -index * focus_width);
        })
    }
    // 实现动态变化框框长度，少一个圈减20px
    focus_nav.style.width = focus_nav.offsetWidth - 20 * (8 - i) + 'px';
    // 始终保持变化框居中
    var nav_width = focus_nav.offsetWidth; // 此处获取的是Number型，如果上面的width获取的是String
    focus_nav.style.left = (focus_width - nav_width) / 2 + 'px';
    // 使得小圆圈均匀分布
    var liAll = focus_nav.querySelectorAll('li');
    for (var j = 0; j < liAll.length; j++) {
        liAll[j].style.marginLeft = ((nav_width - 24) - (i * 10)) / i / 2 + 'px';
        liAll[j].style.marginRight = ((nav_width - 24) - (i * 10)) / i / 2 + 'px';
    }

    // 把ol里面第一个li设置为selected
    ol.children[0].className = 'selected';

    // 6.克隆第一张图片，放到ul最后面
    // 此处便不必担心小圆圈会多了，因为前面已经生成完了小圆圈
    var first = ul.children[0].cloneNode(true);
    ul.appendChild(first);

    // 7.点击一次右侧按钮，图片滚动一张
    var num = 0;
    var circle = 0;
    next.addEventListener('click', function () {
        // 如果找到了最后复制的一张照片，此时，ul快速恢复到left=0的情况
        // 然后紧接着num++，继续播放，障眼法
        if (ul.children.length - 1 == num) {
            ul.style.left = 0;
            num = 0;
        }
        num++;
        animate(ul, -num * focus_width);

        // 8.点击右侧按钮，小圆圈跟着一起变化， 可以声明一个变量再控制小圆圈的播放
        circle++;
        // 如果circle等于8，表明走了到克隆的照片，直接使其为0
        if (ul.children.length - 1 == circle) {
            circle = 0;
        }
        circleChange();
    })
    // 8.点击左侧按钮，图片滚动
    prev.addEventListener('click', function () {
        // 如果找到了最后复制的一张照片，此时，ul快速恢复到left=0的情况
        // 然后紧接着num++，继续播放，障眼法
        if (0 == num) {
            num = ul.children.length - 1;
            ul.style.left = -num * focus_width + 'px';
        }
        num--;
        animate(ul, -num * focus_width);

        // 8.点击右侧按钮，小圆圈跟着一起变化， 可以声明一个变量再控制小圆圈的播放
        circle--;
        // 如果circle等于8，表明走了到克隆的照片，直接使其为0
        if (circle < 0) {
            circle = ol.children.length - 1;
        }
        circleChange();
    })

    function circleChange() {
        for (var i = 0; i < ol.children.length; i++) {
            ol.children[i].className = '';
        }
        ol.children[circle].className = 'selected';
    }

    // 10.自动播放轮播图
    var timer = this.setInterval(function () {
        next.click();
    }, 3500)

})

window.addEventListener('DOMContentLoaded', function () {
    // 下拉菜单的操作
    //获取元素
    var r_nav = document.querySelector('.r_nav');
    var lis = r_nav.children;//得到小li

    for (var i = 0; i < lis.length; i++) {
        var droplist = lis[i].children[0];
        lis[i].onmouseover = function () {
            this.children[0].children[1].style.display = 'block';
        }
        if (droplist != undefined) {
            droplist.onmouseout = function () {
                this.children[1].style.display = 'none';
            }
        }
    }

    // input的样式操作
    var input = document.querySelector('input');

    input.onfocus = function () {
        if (this.value === '嘉然今天吃什么')
            this.value = '';
        //获得焦点需要把文字框里面的颜色变黑
        this.style.color = '#333';
    }

    input.onblur = function () {
        if (this.value === '') {
            this.value = '嘉然今天吃什么';
        }
        this.style.color = '#62676e';
    }

    // 核心思路：检测用户是否按下了 s 键，如果按下s键，就把光标定在搜索框里面
    // 利用keyCode进行判断
    // 搜索框获取焦点： 使用js 的focus()方法
    // 此处建议keyup而不是keyon，因为后者会把s输入到搜索框里面
    document.addEventListener('keyup', function (e) {
        if (e.keyCode == 83) {
            input.focus();
        }
    });

});