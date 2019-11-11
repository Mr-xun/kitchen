export const getQuery = url => {
    //获取url的queryString参数
    var obj = {},
        i,
        num;
    url = url || window.location.href;
    url = url.substr(url.indexOf("?") + 1);
    var arr = url.split("&");
    var len = arr.length;
    for (i = 0; i < len; i++) {
        num = arr[i].indexOf("=");
        if (num > 0) {
            obj[arr[i].substring(0, num)] = arr[i].substr(num + 1);
        }
    }
    return obj;
};
