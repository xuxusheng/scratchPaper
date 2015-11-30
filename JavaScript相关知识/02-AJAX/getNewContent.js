/**
 * Created by Administrator on 2015/11/18.
 */

/**
 * XMLHttpRequest对象有许多的方法。
 *
 * 其中最有用的是open方法，它用来指定服务器上将要访问的文件，指定请求类型：GET、POST或SEND。
 * 这个方法的第三个参数用于指定请求是否以异步方式发送和处理。
 *
 */


function getNewContent(){
    var request = getHTTPObject();
    if(request){
        request.open( "GET","example.txt",true);
        request.onreadystatechange = function(){
            if (request.readyState == 4){
                var para = document.createElement("p");
                var txt = document.createTextNode(request.responseText);
                para.appendChild(txt);
                document.getElementById("new").appendChild(para);
            }
        };
        request.send(null);
    }else{
        alert("sorry,your browser does\'t support XMLRequest");
    }
}

window.onload=getNewContent();