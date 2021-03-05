var MSG = {
    "noTag": "无\r",
    "saveSuccess": "保存成功\r",
    "none": "无\r",
    "like": "赞\r",
    "unlike": "取消赞\r",
    "delete": "删除\r",
    "cancel": "取消\r",
    "confirm": "确认\r",
    "chooseReason": "请选择举报理由\r",
    "reportSuccess": "举报成功, 我们处理后会通知作者, 感谢您的监督\r",
    "error": "错误\r",
    "reportComment?": "举报该评论?\r",
    "reportBlog?": "举报该博客?\r",
    "confirmDeleteComment": "确定删除该评论?\r",
    "scanQRCode": "打开微信扫一扫二维码\r",
    "justNow": "刚刚\r",
    "minutesAgo": "分钟前\r",
    "hoursAgo": "个小时前\r",
    "daysAgo": "天前\r",
    "weeksAgo": "周前\r",
    "monthsAgo": "个月前\r",
    "Just now": "刚刚\r",
    "minutes ago": "分钟前\r",
    "hours ago": "个小时前\r",
    "days ago": "天前\r",
    "weeks ago": "周前\r",
    "months ago": "个月前\r"    
};

function getMsg(key, data) {
    var msg = MSG[key];
    if (msg) {
        if (data) {
            if (!isArray(data)) {
                data = [data];
            }
            for (var i = 0; i < data.length; ++i) {
                msg = msg.replace("%s", data[i]);
            }
        }
        return msg;
    }
    return key;
}