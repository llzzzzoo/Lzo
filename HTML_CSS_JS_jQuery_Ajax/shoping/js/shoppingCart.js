$(function () {
    // 下拉菜单的操作
    //获取元素
    var r_nav = document.querySelector('.r_nav');
    var lis = r_nav.children; //得到小li

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

    // input的样式操作
    var input = document.querySelector('input');

    // 核心思路：检测用户是否按下了 s 键，如果按下s键，就把光标定在搜索框里面
    // 利用keyCode进行判断
    // 搜索框获取焦点： 使用js 的focus()方法
    // 此处建议keyup而不是keyon，因为后者会把s输入到搜索框里面
    document.addEventListener('keyup', function (e) {
        if (e.keyCode == 83) {
            input.focus();
        }
    });

})

$(function () {
    $(".item-detail").hover(function () {
        var s_index = $(".item-detail").index($(this));
        $(".item-allInfo").css("top", $(this).offset().top - 50);
        $(".item-allInfo").eq(s_index).show();
    }, function () {
        var h_index = $(".item-detail").index($(this));
        $(".item-allInfo").eq(h_index).hide();
    })

})