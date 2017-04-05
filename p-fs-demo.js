"use strict"
//引包
const fs=require("fs");
const path=require("path");

//声明源文件、目标文件、目标文件夹
const sourceFile=path.join(__dirname,"test1/testFile.txt");
const targetDir=path.join(__dirname,"target");
const targetFile=path.join(__dirname,"target/targetFile.txt");

//监控源文件
fs.watchFile(sourceFile,(curr,prev)=>{
    //创建目标文件夹
    fs.exists(targetDir,(exists)=>{
        if(!exists){
            fs.mkdir(targetDir,(err)=>{
                if(err){
                    console.log(err);
                }
                console.log("mk targetDir successfully");
            })
        }
    })
    //拷贝文件，将源文件的内容读取到urpl中，再覆盖写入目标文件中
    fs.readFile(sourceFile,(err,data)=>{
        if(err){
            console.log(err);
        }
        fs.writeFile(targetFile,data,(err)=>{
            console.log(err);
        })
        console.log("targetFile success");
    })
})
