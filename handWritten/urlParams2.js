// "{'protocol':'http:','host':'www.abc.com','port':null,'hostname':'www.abc.com',
// 'hash':'#title','search':'?auth=abc&sort=discount','query':'auth=abc&sort=discount',
// 'pathname':'/article/list','path':'/article/list?auth=abc&sort=discount',
// 'href':'http://www.abc.com/article/list?auth=abc&sort=discount#title'}"

// let uri = "http://www.abc.com:3000/article/list?auth=abc&sort=discount#title";
// let uri = "http://www.abc.com/article/list?auth=abc&sort=discount";
let uri = "https://www.abc.com/article/list#title";

// const params = new URLSearchParams(uri);

//          hostname      path      search
// protocol host    port  pathname  query   hash
// href

const result = {
  protocol: null,
  host: null,
  port: null,
  hostname: null,
  hash: null,
  search: null,
  query: null,
  pathname: null,
  path: null,
  href: null,
}

result.href = uri;
if (uri.includes('#')) {
  result.hash = '#' + uri.split('#')[1];
  result.uri = uri.split('#')[0];
}
if (uri.includes('?')) {
  result.query = uri.split('?')[1];
  result.search = '?' + result.query;
  uri = uri.split('?')[0];
}
result.protocol = uri.split('//')[0];
uri = uri.split('//')[1];

result.pathname = '/' + uri.split('/').slice(1).join('/');
result.path = result.pathname + (result.search ? result.search : '')
uri = uri.split('/')[0]
if (uri.includes(':')) {
  result.port = uri.split(':')[1];
  result.host = uri.split(':')[0];
  result.hostname = result.host;
} else {
  result.host = uri;
  result.hostname = result.host;
}

console.log(result);