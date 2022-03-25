function limitRequest(urls = [], limit = 3) {
  return new Promise((resolve, reject) => {
    const len = urls.length;
    let count = 0;

    while (limit--) start()

    function start() {
      const url = urls.shift();
      if (url) {
        new Promise(resolve => {
          setTimeout(() => resolve(url), 3000)
        }).then(res => {
        // axios.post(url).then(res => {
          console.log(res);
        }).catch(error => {
          //error
        }).finally(() => {
          if (count == len - 1) {
            resolve()
          } else {
            count++;
            start();
          }
        })
      }
    }
  })
}


limitRequest(['http://xxa', 'http://xxb', 'http://xxc', 'http://xxd', 'http://xxe'])
