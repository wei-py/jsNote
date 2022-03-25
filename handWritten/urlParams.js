const url = "https://www.baidu.com/s?wd=url&rsv_spt=1&";
const result = new Map(
  (url.endsWith("&") ? url : url + "&")
    .match(/(?<=(&|\?))(.*?)(?=&)/g)
    .map((item) => [item.replace(/=(.*)/, ""), item.replace(/(.*)=/, "")])
);
// console.log(result);

// window.location.search
const urlSearchParams = new URLSearchParams(url.split("?")[1]);
const params = Object.fromEntries(urlSearchParams.entries());
console.log(Object.prototype.toString.call(urlSearchParams));

const nums = "19876543";
const kb = nums.replace(/\d(?=(\d{3})+$)/g, '$&,')
// const b = nums.replace(/\d{3}/g, '$&,')
console.log(kb);