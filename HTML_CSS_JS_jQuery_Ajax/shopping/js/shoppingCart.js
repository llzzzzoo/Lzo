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





})

window.addEventListener('load', function () {
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


    // 放大效果
    $(".item-detail").hover(function () {
        var s_index = $(".item-detail").index($(this));
        $(".item-allInfo").css("top", $(this).offset().top - 50);
        $(".item-allInfo").eq(s_index).show();
    }, function () {
        var h_index = $(".item-detail").index($(this));
        $(".item-allInfo").eq(h_index).hide();
    })


    // 全选功能
    // 1.全选 全不选功能
    // 就是把全选按钮的属性赋值给小的按钮就好了
    // 利用change
    $(".select-AllBox").change(function () {
        $(".one-checkbox,.checkShop").prop("checked", $(this).prop("checked"));
        $(".select-AllBox").prop("checked", $(this).prop("checked"));
        updateNum();
    })

    // 2. 如果被选中的小框等于总的个数，就相当于全选 此时要把全选按钮选上
    // 4. 如果被选中的小框等于店铺下的个数，店铺的全选选上
    $(".one-checkbox").change(function () {
        if ($(".one-checkbox:checked").length === $(".one-checkbox").length) {
            $(".select-AllBox").prop("checked", true);
        } else {
            $(".select-AllBox").prop("checked", false);
        }

        // 设置index和id
        // 当某个tbody的全部checkbox全部没有选中，则令其shop为未选中，否则为选中
        var index = $(this).attr("data-index");
        if ($("#item" + index + " .one-checkbox:checked").length === 0) {
            $("#item" + index + " .checkShop").prop("checked", false);
        } else {
            $("#item" + index + " .checkShop").prop("checked", true);
        }
        updateNum();
    })

    // 3.处理店铺名字全选
    $(".checkShop").change(function () {
        $(this).parent().parent().parent().find(".one-checkbox").prop("checked", $(this).prop("checked"));

        if ($(".checkShop:checked").length === $(".checkShop").length) {
            $(".select-AllBox").prop("checked", true);
        } else {
            $(".select-AllBox").prop("checked", false);
        }
        updateNum();
    })

    function updateNum() {
        // 修改选中的数量
        var selected_items = $(".one-checkbox:checked").length;
        console.log(selected_items);
        $("#selectedItemsCount").html(selected_items);
    }

    // 下滑固定banner
    // 1.当下滑的offsetTop等于当前界面的总高度-固定的底部高度时，即固定
    $(this.document).scroll(function () {
        // 不能用if-else不然就会卡在复原上
        // 1.固定点位
        if ($(".float-bar").offset().top > $(document).height() - 551) {
            $(".float-bar").css("position", "static");
            $(".float-bar").css("border-top", "0px");
        }
        // 2.还原 
        if ($(window).scrollTop() + $(window).height() < $(document).height() - 479) {
            $(".float-bar").css("position", "fixed");
            $(".float-bar").css("border-top", "1px solid #e6e6e6");
        }
    });
})
