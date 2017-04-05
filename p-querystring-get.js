//导入包
const http=require("http");
const url=require("url");
const querystring=require("querystring");

//创建web服务
const server=http.createServer();

//请求，处理，响应
server.on("request",(req,res)=>{
    const urlString=req.url;
    if(!urlString.includes("/favicon.ico")){
        const urlObj=url.parse(urlString);
        //转为js对象
        const paramsObj=querystring.parse(urlObj.query);
        console.log(paramsObj);
    }
    res.end("response end");
})

//开启web服务，启动监听
server.listen(3000,"127.0.0.1",(err)=>{
    if(err){
        console.log(err);
    }
    console.log("start server OK");
})