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

    // 不同时间段不同问候语
    //1.得到当前小时数
    var date = new Date();
    var hour = date.getHours();
    //2.判断小时数改变文字信息
    if (hour < 10) {
        $(".time_compliment").text('早上好呀');
    } else if (hour < 14) {
        $(".time_compliment").text('中午好呀');
    } else if (hour < 18) {
        $(".time_compliment").text('下午好呀');
    } else {
        $(".time_compliment").text('晚上好呀');
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