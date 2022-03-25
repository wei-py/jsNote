
var urls = [];

// 英文域名
urls.push("baidu.com");
urls.push("aaa.bbb.ccc.baidu.com");

// 带协议
urls.push("https://www.baidu.com");
urls.push("https://aaa.bbb.ccc.baidu.com");

// 带端口
urls.push("www.baidu.com:888");
urls.push("https://aaa.bbb.ccc.baidu.com:888");

// 带路径
urls.push("www.baidu.com/");
urls.push("https://www.baidu.com/");
urls.push("https://aaa.bbb.ccc.baidu.com:888/aaa/bbb/ccc.php");

// 带参数
urls.push("www.baidu.com/demo.php?aaa=111&bbb=222&ccc=333");
urls.push("aaa.bbb.ccc.baidu.com:888/demo.php?aaa=111&bbb=222&ccc=333");
urls.push("https://www.baidu.com/demo.php?aaa=111&bbb=222&ccc=333");
urls.push("https://aaa.bbb.ccc.baidu.com:888/demo.php?aaa=111&bbb=222&ccc=333");
urls.push("http://a.com:8888/a/b.html?c=1&0=0&d===&=1");

// 带锚点
urls.push("www.baidu.com/demo.php?aaa=111&bbb=222&ccc=333#username");
urls.push("https://www.baidu.com/page/uuid/#/anotheruuid/area?action=whatever");
urls.push("https://www.baidu.com:888/uuid/demo.php?aaa=111&bbb=222&ccc=333#username");

// 中文参数
urls.push("https://www.baidu.com/demo.php?input=你好");
urls.push("https://aaa.bbb.ccc.baidu.com:888/demo.php?input=你好");

// 中文域名
urls.push("www.demo.网址");
urls.push("https://中文.com");
urls.push("https://www.中文.com:888/uuid/demo.php?aaa=111&bbb=222&ccc=333#username");

// IP地址
urls.push("192.168.1.234");
urls.push("https://192.168.1.234:888/demo.php?input=你好");

// 身份凭证
urls.push("https://username:password@www.example.com/");
urls.push("http://username:password@192.168.1.234:888/a.b.c/d/demo.html?input=你好#世界");

// URL路径
urls.push("/");
urls.push("/aaa/bbb/ccc/uuid/demo.html");
urls.push("/uuid/demo.php?aaa=111&bbb=222&ccc=333#username");

// 奇怪的输入
urls.push(":1234/aaa/bbb/ccc/uuid/demo.html");
urls.push("http://aaa:1234/aaa/bbb/ccc/uuid/demo.html");
urls.push("aaa:/123");
urls.push("http://aaa:/#/123");
urls.push(":/#/123&456");
urls.push("aaa=bbb&ccc=ddd");
urls.push("http://aaa=bbb&ccc=ddd");
urls.push("http://#abc?aaa=111&bbb=222&ccc=333");
urls.push("http://www.example.com:$88;9,9@www.abc.com$/what??key=val?&&#123http://?query=2#45");


// JS正则表达式解析

function parseUri(str) {

    if (!parseUri || !parseUri.options) {
        parseUri.options = {
            strictMode: false,
            key: ["source", "protocol", "authority", "userInfo", "user", "password", "host", "port", "relative", "path", "directory", "file", "query", "anchor"],
            q: {
                name: "queryKey",
                parser: /(?:^|&)([^&=]*)=?([^&]*)/g
            },
            parser: {
                strict: /^(?:([^:\/?#]+):)?(?:\/\/((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?))?((((?:[^?#\/]*\/)*)([^?#]*))(?:\?([^#]*))?(?:#(.*))?)/,
                loose: /^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/
            }
        };
    }

    if (!str) {
        return '';
    }

    var o = parseUri.options,
        m = o.parser[o.strictMode ? "strict" : "loose"].exec(str),
        uri = {},
        i = 14;

    while (i--) uri[o.key[i]] = m[i] || "";

    uri[o.q.name] = {};
    uri[o.key[12]].replace(o.q.parser, function($0, $1, $2) {
        if ($1) uri[o.q.name][$1] = $2;
    });

    return uri;
}

// 批量测试
for (var i = urls.length - 1; i >= 0; i--) {
    console.log(urls[i]);
    console.log(parseUri(urls[i]));
}
