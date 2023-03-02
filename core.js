const fs=require("fs")
const http=require("http")
fs.readFile("./f.txt","utf8",function(err,data){
    if(err){
        console.log(err)
    }else{
        console.log(data)
    }
})
console.log("starting")
console.log("finishing")
console.log(http)