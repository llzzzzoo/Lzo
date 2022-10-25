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
        clearInterval(timer);
        timer = setInterval(function () {
            next.click();
        }, 3500)
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



    // 分类栏右侧的图片
    // 1.鼠标经过小li
    $(".dd ul li").mouseover(function () {
        // 2.得到当前小li的索引号
        var index = $(this).index(); // 由于伪数组，可以得到索引号
        // 5.让cate_top显示
        $(".cate_top").show();
        // 3.让对应索引号的图片显示出来
        $(".cate_top .cate_part").eq(index).show();
        // 4.让其他的图片隐藏起来
        $(".cate_top .cate_part").eq(index).siblings().hide();
    })



    $(".dd ul").mouseover(function () {
        $("#bottom").show();
    })

    $(".dd ul").mouseout(function () {
        // 5.让cate_top隐藏
        $("#bottom").hide();
    })

    $(".dd ul li").mouseout(function () {

        // 2.得到当前小li的索引号
        var index = $(this).index(); // 由于伪数组，可以得到索引号
        var flag = 0;
        // 6.如果也离开了catetop就隐藏
        $(".cate_top").mouseover(function () {
            flag = 1;
            // 5.让cate_top显示
            $(".cate_top").show();
            // 3.让对应索引号的图片显示出来
            $(".cate_top .cate_part").eq(index).show();
            // 4.让其他的图片隐藏起来
            $(".cate_top .cate_part").eq(index).siblings().hide();
        })

        $(".cate_top").mouseout(function () {
            // 5.让cate_top隐藏
            $(".cate_top").hide();
            // 3.让对应索引号的图片显示隐藏
            $(".cate_top .cate_part").eq(index).hide();
        })

        if (0 == flag) {
            // 5.让cate_top隐藏
            $(".cate_top").hide();
            // 3.让对应索引号的图片显示隐藏
            $(".cate_top .cate_part").eq(index).hide();
        }
    })

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


    // 电梯导航
    // 当点击某个模块，由于滚动事件会轮流变色
    // 利用节流阀、互斥锁使得点击时，不执行轮流变色
    var flag = true;
    $(window).scroll(function () {
        var topLen = $(".recom").offset().top - 75;
        if ($(document).scrollTop() >= topLen) {
            $(".comebackTop").fadeIn();
            $(".elevator").addClass("elevator_fixed");
        } else {
            $(".comebackTop").fadeOut();
            $(".elevator").removeClass("elevator_fixed");
        }
        // 页面滚动到某个区域，对应位置变色，记得if的先后顺序
        // 听我说，谢谢你
        if (flag) {
            if ($(document).scrollTop() >= $(".floor").offset().top - 30) {
                $(".elevator_item").eq(2).find(".elevator_item_content").addClass("style_easy_blue");
                $(".elevator_item").eq(2).siblings(".elevator_item").find(".elevator_item_content").removeClass("style_easy_blue");
            } else if ($(document).scrollTop() >= $(".hot").offset().top - 30) {
                $(".elevator_item").eq(1).find(".elevator_item_content").addClass("style_easy_blue");
                $(".elevator_item").eq(1).siblings(".elevator_item").find(".elevator_item_content").removeClass("style_easy_blue");
            } else if ($(document).scrollTop() >= $(".recom").offset().top - 30) {
                console.log($(".elevator_item").eq(0));
                $(".elevator_item").eq(0).find(".elevator_item_content").addClass("style_easy_blue");
                $(".elevator_item").eq(0).siblings(".elevator_item").find(".elevator_item_content").removeClass("style_easy_blue");
            } else {
                $(".elevator_item_content").removeClass("style_easy_blue"); // 去除蓝色
            }
        }
    })
    // 划过返回顶部的按钮
    var disPlaytimer;
    function updateDisplay() {
        disPlaytimer = setTimeout(function () {
            $(".slider_bar").css("display", "none");
        }, 130) // 设置为130为了解决滑动快速上移图案文字重合问题
    }
    var con = document.querySelector('.slider_bar');
    $(".comebackTop").hover(function () {
        clearTimeout(disPlaytimer);
        $(".slider_bar").css("display", "block");
        animate(con, 58, function () {
            $(".comeTop_icon").html("");
        });
    }, function () {
        animate(con, 0, function () {
            $(".comeTop_icon").html("");
        });
        updateDisplay();
    })
    // 滚动到指定的位置
    $(".elevator_item").click(function () {
        flag = false; // 互斥锁
        // 获取当前li的index，得到去往的位置
        var nowIndex = $(this).index();
        var currentClass; // 听我说，谢谢你
        switch (nowIndex) {
            case 0:
                currentClass = ".recom";
                break;
            case 1:
                currentClass = ".hot";
                break;
            case 2:
                currentClass = ".floor";
                break;
            case 4:
                currentClass = "TOP";
                break;
            default:
                currentClass = "nothing";
        }
        if (currentClass !== "nothing") {
            if (currentClass === "TOP") {
                $("body, html").stop().animate({
                    scrollTop: 0
                });
                $(".elevator_item_content").removeClass("style_easy_blue"); // 去除蓝色
                return;
            }
            var currentHeight = $(currentClass).offset().top - 20;
            // 页面滚动效果
            $("body, html").stop().animate({
                scrollTop: currentHeight
            }, function () {
                flag = true; // 开锁
            });
        }
        // 让当前点击的出现蓝色
        $(this).find(".elevator_item_content").addClass("style_easy_blue");
        $(this).siblings(".elevator_item").find(".elevator_item_content").removeClass("style_easy_blue");
    })


})



$(function () {
    // 下拉菜单的操作
    //获取元素
    var r_nav = document.querySelector('.r_nav');
    var lis = r_nav.children;//得到小li

    for (var i = 0; i < lis.length; i++) {
        var droplist = lis[i].children[0];
        if (droplist == null) return;
        lis[i].onmouseover = function () {
            this.children[0].children[1].style.display = 'block';
        }
        if (droplist != undefined) {
            droplist.onmouseout = function () {
                this.children[1].style.display = 'none';
            }
        }
    }
})