const http = require('http');  

 
 
(async () => { 
  const requestHandler = (request, response) => {  
       console.log(request.url)
       response.end('Hello World')
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
 
  // const status = await page.open('http://www.adzbux.com/promote7.php?ref=biboucuongoc1102');
  browser.setProxy('186.208.231.28','34944','http', null, null, function(){
        const status = await page.open('http://www.adzbux.com/promote7.php?ref=biboucuongoc1102');
        const content = await page.property('content');
        console.log(content);
  });
   

  
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
