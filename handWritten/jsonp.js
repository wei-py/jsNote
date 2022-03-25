function jsonp(url, params, callback) {
  let queryString = url.indexOf("?") === -1 ? "?" : "&";
  for (const [k, v] of Object.entries(params)) {
    queryString += `${k}=${v}&`;
  }

  let random = Math.random().toString().replace('.', '');
  let callbackName = 'myJsonp' + random;
  queryString += 'callback=' + callbackName;

  let scriptNode = document.createElement("script");
  script.src = url + queryString;

  window[callbackName] = function() {
    callback(...arguments);
    document.getElementsByTagName("head")[0].removeChild(scriptNode);
  }

  document.getElementsByTagName("head")[0].appendChild(scriptNode);
}

jsonp("https://www.baidu.com", { aa: 11 });
