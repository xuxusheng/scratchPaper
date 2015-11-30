/**
 * Created by xusheng on 2015/11/18.
 */

/**
 * 输出一段包含页面上所有缩略语的文本
 *
 */

window.onload=displayAbbreviations;

function displayAbbreviations(){
    var abbreviations = document.getElementsByTagName("abbr");  // 获取所有的<abbr>标签
    if ( abbreviations.length < 1) return false;    // 如果没有获取到任何<abbr>标签，则返回false

    var defs=new Array();   //创建一个新数组，用来存放缩略语及其描述的键值对

    //循环遍历所有<abbr>标签，并将其包含的缩略语和title属性成对存放入数组中
    for ( var i=0 ; i<abbreviations.length ; i++){
        var current_abbr=abbreviations[i];  //创建一个变量current_abbr,用来存放当前循环中访问的<abbr>节点
        var definition= current_abbr.getAttribute("title"); //创建一个变量definition，用来存放current_abbr的title属性值
        var key = current_abbr.lastChild.nodeValue; // 创建一个变量key，用来存放current_abbr中包含的文本节点的值，即缩略语
        defs[key]=definition;      //将key和definition成对存入数组defs中
    }

    //创建节点，并插入文档流中

    var dlist = document.createElement("dl");       // 创建dlist为一个自定义列表节点

    /** for ( variable in array )
     *      在进入第一次循环时，变量variable将被赋值为数组array的第一个下标值；
     *      在进入第二次循环时，变量variable将被赋值为数组array的第二个下标值；
     *      依次类推，知道遍历完数组array里的所有元素为止。这就是我们遍历关联数组defs的方式：
     *
     *      for ( key in defs ){...}
     *          上面这行代码的含义是“对于defs关联数组里的每个键，把它的值赋给变量key”。
     *          在接下来的循环体部分，变量key可以像其他变量那样使用。
     *          具体到这个例子，因为变量key的值是当前正在处理的数组元素的键，所以可以利用它得到相应的数组元素的值：
     *
     *          在这个for/in循环的第一次循环里，变量key的值是W3C，变量definition的值是World Wide Web Consortium;
     *          在第二次循环中，变量key的值为DOM，变量definition的值为Document Object Model。
     */

    for (key in defs){

        var definition=defs[key];

        var dtitle = document.createElement("dt");          // 创建dtitle为一个自定义列表标题节点
        var dtitle_text = document.createTextNode(key);     // 创建dtitle_text为一个文本节点，保存key中的内容
        dtitle.appendChild(dtitle_text);                    // 将文本节点dtitle_text插入到dtitle中

        var ddesc = document.createElement("dd");           // 创建ddesc为一个自定义列表描述部分
        var ddesc_text = document.createTextNode(definition);    // 创建ddesc_text为一个文本节点，保存definition中的内容
        ddesc.appendChild(ddesc_text);                      // 将文本节点ddesc_text插入到ddesc中

        //将dt节点和dd节点一次添加到dl节点中
        dlist.appendChild(dtitle);
        dlist.appendChild(ddesc);
    }

    var header=document.createElement("h2");
    var header_text=document.createTextNode("Abbreviations");
    header.setAttribute("style","color:red");           // 修改header中字体颜色为红色
    header.appendChild(header_text);

    dlist.setAttribute("style","display:inline-block;border:1px red solid");

    document.body.appendChild(header);      //把标题添加到页面主体
    document.body.appendChild(dlist);       //把自定义列表添加到页面主体

}