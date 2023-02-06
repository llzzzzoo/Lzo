$('#exampleModal').on('show.bs.modal', function (event) {
    var button = $(event.relatedTarget) // Button that triggered the modal
    var recipient = button.data('whatever') // Extract info from data-* attributes
    var modal = $(this)
    modal.find('.modal-title').text('New message to ' + recipient)
    modal.find('.modal-body input').val(recipient)
});

$(function () {
    // 将本地的数据存储进去
    load();
    $(".btn-ok").on("click", function () {
        // 先读取本地存储的数据
        var local = getData();
        var index_input = 0;
        var con = "null";
        // 把local数组进行更新 将最新的数据追加给local数组
        // 判断优先级和获取内容
        $(".form-group input").each(function (index) {
            if ($(this).prop("checked") == true) {
                index_input = index;
            }
        });
        con = $("#message-text").val();
        if (con === "") {
            con = "今天就摸鱼吧~";
        };
        local.push({ status: index_input, front_status: index_input, title: con, done: false });
        // 保存到本地存储
        saveData(local);
        // 渲染代码
        load();
    })

    $("#add-btn").on("click", function () {
        // 还原为初始状态，默认为提醒，内容为空
        $(".form-group input").each(function (i, e) {
            if (e.classList.contains("auto") == true) {
                e.checked = true;
            } else {
                e.checked = false;
            }
        });
        $("#message-text").val("");
    })
    // 删除操作，点击叉号
    $("tbody").on("click", ".list-remove-mark", function () {
        // 先获取本地存储
        var data = getData();
        // 修改数据
        var index = $(this).parent().parent().attr("id");
        data.splice(index - 1, 1);
        // 保存到本地存储
        saveData(data);
        // 重新渲染界面
        load();
    })

    // 确认操作，点击勾号
    $("tbody").on("click", ".list-ok-mark", function () {
        // 先获取本地存储
        var data = getData();
        // 修改数据
        var index = $(this).parent().parent().attr("id");
        data[index - 1].done = true; // 标记为完成
        data[index - 1].status = -1;
        // 保存到本地存储
        saveData(data);
        // 重新渲染界面
        load();
    })

    // 还原事项，点击文本
    $("tbody").on("click", ".con", function () {
        // 先获取本地存储
        var data = getData();
        // 修改数据
        var index = $(this).parent().parent().attr("id");
		var dataElement = data[index - 1];
		// 如果此时就处于未完成状态，不必进行重新保存和渲染
		if(dataElement.done === false) return;
        dataElement.done = false; // 标记为未完成
        dataElement.status = data[index - 1].front_status;
        // 保存到本地存储
        saveData(data);
        // 重新渲染界面
        load();
    })

    function getData() {
        var data = localStorage.getItem("todolist");
        if (data != null) {
            // 本地存储里面的数据是字符串格式的 但我们需要的是对象格式的
            return JSON.parse(data);
        } else {
            return [];
        }
    }

    //保存本地存储数据
    function saveData(data) {
        localStorage.setItem("todolist", JSON.stringify(data));
    }

    // 渲染加载数据
    function load() {
        // 读取本地存储的数据
        var data = getData();
        // 清空数据
        $(".todolist tbody").empty();
        // 统计完成与未完成
        var todoCount = 0; // 未完成的个数
        var doneCount = 0; // 已完成的个数
        // 遍历数据
        $.each(data, function (i, n) {
            var status_mark = "info";
            var list_index = i + 1; // 待办事项的下标
            var do_flag = "list-ok-mark";
            var icon_flag = "glyphicon-ok-circle";
            if (n.done == true) {
                do_flag = "list-remove-mark";
                icon_flag = "glyphicon-remove-circle";
                doneCount++;
            } else {
                todoCount++;
            }
            switch (n.status) {
                case -1: status_mark = "success"; break;
                case 0: status_mark = "info"; break;
                case 1: status_mark = "warning"; break;
                case 2: status_mark = "danger"; break;
                default: status_mark = "info"; break;
            }
            $(".todolist tbody").append("<tr id='" + list_index + "' class='" + "one-list'>" +
                "<td class='" + status_mark + " list-text'>" +
                "<strong class='num'>" + list_index + ".</strong>" +
                "&nbsp;" +
                "<p class='con'>" + n.title + "</p>" +
                "<span class='" + do_flag + " glyphicon " + icon_flag + "'></span>" +
                "</td>" +
                "</tr>");
        })
        $("#alreadyDoneNum").text(doneCount);
        $("#notDoneNum").text(todoCount);
    }
})
