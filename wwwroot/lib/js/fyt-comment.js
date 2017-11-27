$(function () {
	btnBack();
});
//返回上一页
function btnBack() {
    $(".btn-back").click(function () {
        history.go(-1);
    });
    $(".btn-dig-close").click(function () {
        dig.close();
    });
};

var dig = {
    //打开一个iframe窗口
    Open: function (title, url, width, height, fun) {
        top.layer.open({
            type: 2,
            title: title,
            shadeClose: true,
            shade: 0.3,
            maxmin: false, //开启最大化最小化按钮
            area: [width, height],
            content: url,
            zIndex: "10",
            end: function () {
                if (fun) fun();
            }
        });
    },
    //关闭所有
    close: function () {
        top.layer.closeAll();
    },
    //关闭单个
    closesingle: function (index) {
        top.layer.close(index);
    },
    //正确提示
    alert: function (title, msg, funcSuc) {
        top.layer.alert(msg, { icon: 6, title: title }, function () {
            if (funcSuc) funcSuc();
        });
    },
    //正确提示
    alertCOk: function (title, msg, funcSuc) {
        top.layer.alert(msg, { icon: 6, title: title }, function (index) {
            if (funcSuc) funcSuc(index);
        });
    },
    //错误提示
    alertErr: function (title, msg, fun) {
        top.layer.alert(msg, { icon: 2, title: title });
    },
    //确认框=询问框
    confim: function (title, msg, funcSuc, funcErr) {
        top.layer.confirm(msg, {
            title: title,
            icon: 3,
            btn: ['确定', '取消'] //按钮
        }, function () {
            if (funcSuc) funcSuc();
        }, function () {
            if (funcErr) funcErr();
        });
    },
    //确认框=询问框(可自动关闭)
    confimclose: function (title, msg, funcSuc, funcErr) {
        top.layer.confirm(msg, {
            title: title,
            icon: 3,
            btn: ['确认', '取消'] //按钮
        }, function (index) {
            if (funcSuc) funcSuc(index);
        }, function () {
            if (funcErr) funcErr();
        });
    },
    //弹出一个输入的框
    prompts: function (title, fun) {
        layer.prompt({
            title: title,
            formType: 1
        }, function (pass) {
            if (fun) fun(pass);
        });
    },
    //消息的提示
    msg: function (msg) {
        top.layer.msg(msg);
    },
    tips: function () {
        $(".tips").each(function () {
            $(this).mouseover(function () {
                layer.tips($(this).attr("title"), $(this),
                {
                    tips: [1, '#0FA6D8']
                });
            });
            $(this).mouseout(function () {
                layer.closeAll();
            });

        });
    }
};