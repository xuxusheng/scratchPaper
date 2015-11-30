/**
 * Created by Administrator on 2015/11/18.
 */

/** 微软最早在IE5中以ActiveX对象的形式实现了一个名叫XMLHTTP的对象。在IE中创建新的对象要使用以下代码：
 *
 *      var request = new ActiveXObject ( " Msxml2.XMLHTTP.3.0" );
 *
 *      其他浏览器则基于XMLHttpRequest来创建对象：
 *
 *      var request = new XMLHttpRequest();
 *
 *      更麻烦的是，不同IE版本中使用的XMLHTTP对象也不完全相同。为了兼容所有浏览器，getHTTPObject.js文件中的getHTTPObject函数要这样来写
 */

 function getHTTPObject(){
    if( typeof XMLHttpRequest == "undefined"){
        try { return new ActiveXObject("Msxml2.XMLHTTP.6.0"); }
            catch (e) {}
        try { return new ActiveXObject("Msxml2.XMLHTTP.3.0");}
            catch (e) {}
        try { return new ActiveXObject("Msxml2.XMLHTTP");}
            catch (e) {}
        return false;
    }
    return new XMLHttpRequest();
}

/** getHTTPObject通过对象检测技术检测了XMLHttpRequest。如果失败，则继续检测其他方法，最终返回false或一个新的XMLHttpRequest（或XMLHTTP）对象。
 *
 *  这样，在你的脚本中要使用XMLHttpRequest对象时，可以将这个新对象直接赋值给一个变量：
 *      var request = getHTTPObject();
 *
 *
 *
 *
 */
