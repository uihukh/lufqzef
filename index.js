const http = require('http');  

 
 
(async () => { 
  const requestHandler = (request, response) => {  
       console.log(request.url)
       response.end('Hello Worldss')
  }
       
  const server = http.createServer(requestHandler)

  server.listen(process.env.PORT, (err) => {  
    if (err) {
      return console.log('something bad happened', err)
    }

    console.log(`server is listening`)
  })
 
})();


const phantom = require('phantom');
function kiusi(){
  (async function() {
  const instance = await phantom.create();
  const page = await instance.createPage();
  await page.on('onResourceRequested', function(requestData) {
    console.info('Requesting', requestData.url);
  }); 
  
   const status = await page.open('https://uihukh.github.io/luijun/aaa.html');
   const content = await page.property('content');
   console.log(content);


  
  setTimeout(async () => await await instance.exit() , 40000); 
  
})();

}



function f() { 
    console.log('-111111111111-------trong f -----------');
    kiusi();
    console.log(Date()); 
    setTimeout( f, 50000 ); 
    console.log('--tttttttttt--') 
}



f();
