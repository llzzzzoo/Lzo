$(function () {
    // 下拉菜单的操作
    //获取元素
    var r_nav = document.querySelector('.r_nav');
    var lis = r_nav.children; //得到小li

    for (var i = 0; i < lis.length; i++) {
        var droplist = lis[i].children[0];
        if (droplist === undefined || droplist.className !== 'droplist') continue;
        lis[i].onmouseover = function () {
            this.children[0].children[1].style.display = 'block';
        }
        if (droplist != undefined) {
            droplist.onmouseout = function () {
                this.children[1].style.display = 'none';
            }
        }
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

    // 全部商品数目的功能
    function getNum() {
        var allItemLength = $(".item-content").length;
        $(".switch-cart").html("全部商品（全部" + allItemLength + "）");
    }
    getNum();
    // 全选功能
    // 1.全选 全不选功能
    // 就是把全选按钮的属性赋值给小的按钮就好了
    // 利用change
    $(".select-AllBox").change(function () {
        if (0 === $(".one-checkbox").length) {
            alert("当前购物车并无商品哦！");
            $(this).prop("checked", false);
            return;
        }
        $(".one-checkbox,.checkShop").prop("checked", $(this).prop("checked"));
        $(".select-AllBox").prop("checked", $(this).prop("checked"));
        if ($(this).prop("checked")) {
            // 让所有商品添加类名
            $(".item-content").addClass("check-cart-item");
        } else {
            // 否则移除
            $(".item-content").removeClass("check-cart-item");
        }
        updateNumAndMoney();
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
        if ($(this).prop("checked")) {
            // 让选中商品添加类名
            $(this).parents(".item-content").addClass("check-cart-item");
        } else {
            // 否则移除
            $(this).parents(".item-content").removeClass("check-cart-item");
        }
        updateNumAndMoney();
    })

    // 3.处理店铺名字全选
    $(".checkShop").change(function () {
        $(this).parent().parent().parent().find(".one-checkbox").prop("checked", $(this).prop("checked"));

        if ($(".checkShop:checked").length === $(".checkShop").length) {
            $(".select-AllBox").prop("checked", true);
        } else {
            $(".select-AllBox").prop("checked", false);
        }
        if ($(this).prop("checked")) {
            // 让选中商品添加类名
            $(this).parents(".cart-tbody").find(".item-content").addClass("check-cart-item");
        } else {
            // 否则移除
            $(this).parents(".cart-tbody").find(".item-content").removeClass("check-cart-item");
        }
        updateNumAndMoney();
    })

    function updateNumAndMoney() {
        // 修改选中的数量和总的金额
        var selected_items = 0;
        var totalMoney = 0;
        $(".one-checkbox:checked").each(function (index, domEle) {
            selected_items += parseInt($(domEle).parents(".td-check").siblings(".td-quantity").find(".cart-input-o").val());
            var num = parseInt($(domEle).parents(".td-check").siblings(".td-quantity").find(".cart-input-o").val());
            var price = parseFloat($(domEle).parents(".td-check").siblings(".td-price").find(".price-content").text().substr(1));
            var one_item_money = num * price;
            totalMoney += parseFloat(one_item_money);
        })
        $("#selectedItemsCount").html(selected_items);
        $(".cart-sum .price").text("￥" + totalMoney.toFixed(2));
    }

    // 下滑固定banner
    // 1.当下滑的offsetTop等于当前界面的总高度-固定的底部高度时，即固定
    $(this.document).scroll(function () {
        // 不能用if-else不然就会卡在复原上
        // 1.固定点位
        if ($(".float-bar").offset().top > $(document).height() - 551) {
            $(".float-bar").css("position", "static");
        }
        // 2.还原 
        if ($(window).scrollTop() + $(window).height() < $(document).height() - 479) {
            $(".float-bar").css("position", "fixed");
        }
    });



    // 增加商品数量
    $(".cart-number-inc").click(function () {
        // 得到当前input的输入值
        var n = $(this).siblings(".cart-input").children(".cart-input-o").val();
        if (200 == n) {
            $(this).css("cursor", "not-allowed");
            return false;
        }
        n++;
        $(this).siblings(".cart-input").children(".cart-input-o").val(n);

        // 计算金额
        var p = $(this).parents(".td-quantity").siblings(".td-price").find(".price-content").html();
        p = p.substr(1); // 截断符号
        var price = (p * n).toFixed(2); // 保留两位小数
        $(this).parents(".td-quantity").siblings(".td-sum").find(".sum-price-o").html("￥" + price);
        updateNumAndMoney();
    })
    // 减少商品数量
    $(".cart-number-dec").click(function () {
        // 得到当前input的输入值
        var n = $(this).siblings(".cart-input").children(".cart-input-o").val();
        if (1 == n) {
            $(this).css("cursor", "not-allowed");
            return false;
        }
        n--;
        $(this).siblings(".cart-input").children(".cart-input-o").val(n);

        // 计算金额
        var p = $(this).parents(".td-quantity").siblings(".td-price").find(".price-content").html();
        p = p.substr(1); // 截断符号
        var price = (p * n).toFixed(2); // 保留两位小数
        $(this).parents(".td-quantity").siblings(".td-sum").find(".sum-price-o").html("￥" + price);
        updateNumAndMoney();
    })

    // 输入框输入
    $(".cart-input-o").change(function () {
        // 得到当前文本框的值，再乘以数量
        var n = $(this).val();
        // 防止溢出范围
        if (n < 1) {
            n = 1;
        } else if (n > 200) {
            n = 200;
        }
        $(this).val(n);

        var p = $(this).parents(".td-quantity").siblings(".td-price").find(".price-content").html();
        p = p.substr(1); // 截断符号
        var price = (p * n).toFixed(2); // 保留两位小数
        $(this).parents(".td-quantity").siblings(".td-sum").find(".sum-price-o").html("￥" + price);
        updateNumAndMoney();
    })

    // 判断数量，免得出问题
    $(".cart-number-inc").mouseover(function () {
        if (200 == $(this).siblings(".cart-input").find(".cart-input-o").val()) {
            $(this).css("cursor", "not-allowed");
        } else {
            $(this).css("cursor", "pointer");
        }
    })
    $(".cart-number-dec").mouseover(function () {
        if (1 == $(this).siblings(".cart-input").find(".cart-input-o").val()) {
            $(this).css("cursor", "not-allowed");
        } else {
            $(this).css("cursor", "pointer");
        }
    })


    // 删除商品
    // (1)删除当前的样品    
    $(".td-act .remove-item").click(function () {
        $(this).parents(".item-content").remove();
        getNum();
        updateNumAndMoney();
        getNowStatus();
        getCheckedStatus();
    })

    // (2)删除复选框选中的
    $(".remove-itemChecked").click(function () {
        $(".one-checkbox:checked").parents(".item-content").remove();
        getNum();
        updateNumAndMoney();
        getNowStatus();
        getCheckedStatus();
    })


    // 店铺检查子商品是否删完，若删完，自行删除
    function getNowStatus() {
        $(".shop").each(function (index, domEle) {
            var len = $(domEle).parents(".cart-tbody").find(".item-content").length;
            if (0 === len) $(domEle).parents(".cart-tbody").remove();
        })
    }

    // 检查全选
    function getCheckedStatus() {
        var lenChecked = $(".select-AllBox").parents(".cart-main").siblings(".itemList").find(".cart-tbody").length;
        console.log(lenChecked);
        if (0 === lenChecked) $(".select-AllBox").prop("checked", false);
    }


    // 电梯导航
    $(window).scroll(function () {
        var topLen = $(".cart-table-th").offset().top;
        if ($(document).scrollTop() >= topLen) {
            $(".comebackTop").fadeIn();
            $(".elevator").addClass("elevator_fixed");
        } else {
            $(".comebackTop").fadeOut();
            $(".elevator").removeClass("elevator_fixed");
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
        $("body, html").stop().animate({
            scrollTop: 0
        });
    }
    )
})


