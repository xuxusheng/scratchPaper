/**
 * Created by Administrator on 2015/11/18.
 */

//本js文件主要用来收录一些自定义的function()，便于在js没有提供此类方法的情况下随时调用。

//目录加在文档开头，如果增减，随时更新目录

/** 目录：
 * 1.function addLoadEvent(func){...}
 * 下面是addLoadEvent函数将要完成的操作：
 *      * 把现有的window.onload时间处理函数的值存入变量oldonload。
 *      * 如果在这个处理函数上还没有绑定任何函数，就像平是那样把新函数添加给它。
 *      * 如果在这个处理函数上已经绑定了一些函数，就把新函数追加的现有指令的末尾。
 *
 * 2.function insertAfter( newElement , targetElement ){...}
 *      * 虽然DOM本身并没有提供insertAfter方法，但它确实提供了把一个节点插入到另一个节点之后所需的所有工具。
 *      * 我们完全可以利用已有的DOM方法和属性编写一个insertAfter函数
 *      * 这个函数用到了以下DOM方法和属性：parentNode属性、lastChild属性、appendChild属性、insertBefore方法、nextSibling方法
 *
 *3. function getStyle( obj , attr ){...}
 *		使用原生js的方法obj.style.display只能获取行内样式，而DOM对象又无法使用jQuery方法
 * 		此时可以用该函数获取属性值
 * 		例如：getStyle( $("div")[0],"display" ){...}
 * 		if...else....作用是为了兼容IE和非IE
 *
 */



//  1.
function addLoadEvent(func){
    var oldonload = window.onload;
    if ( typeof window.onload != "function"){
        window.onload = func;                   //如果window.onload还未绑定任何函数，则将func绑定上去
    }else{
        window.onload =function(){
            oldonload();                        //如果window.onload已绑定了函数，则将oldload()和func()都添加到其绑定的函数中去。
            func();
        }
    }
}

// 2.
function insertAfter(newElement,targetElement){
    var parent = targetElement.parentNode;          //将目标节点的父节点存入parent中
    if(parent.lastChild == targetElement){
        parent.appendChild(newElement);             //如果目标节点是所有同胞节点中的最后一个，则直接使用父节点的appendChild()方法
    }else{
        parent.insertBefore(newElement,targetElement.nextSibling);  //如果目标节点不是最后一个，则对其下一个同胞节点使用insertBefore()方法
    }
}

// 3.
	function getStyle(obj,attr) {
		if (obj.currentStyle) {
			return obj.currentStyle[attr];
		} else {
			return document.defaultView.getComputedStyle(obj, false)[attr];
		}
	}








