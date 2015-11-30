/**
 * Created by xusheng on 2015/11/21.
 */

//jQuery数组($.each,$.grep,$.map,$.merge,$.inArray,$.unique,$.makeArray)处理函数详解


$(function(){

    /** each ( array , [callback] 遍历
     */

    var arr1=["aaaa","bbbb","cccc","dddd"];
    var i=1;

    //$.each(arr1,function(key , value){
    //
    //    alert("第"+i+"项为:"+value);
    //    i +=1;
    //})


    /**
     *  $.grep(array , callback , [invert]) 过滤数组【常用】
     */
    //---------------------------------------
    //var arr2=$.grep(arr1,function(val,key){
    ////    过滤数组有两个参数，第一个为当前元素，第二个为元素索引
    //    if(val=="第三项"){
    //        alert(key);
    //    }
    //});

    //-----------------------------------------

    //var arr2= $.grep(arr1,function(val,key){
    //   return key>1;
    //});
    //alert("第二项以后的有："+arr2);
//    返回cccc,dddd

    //-----------------------------------------


    //var arr2 = $.grep(arr1,function(val,key){
    //    return key>1;
    //},true);
    //alert(arr2);
//    第三个参数为true时，对过滤函数中的返回值取反
//    返回aaaa，bbbb

    /**
     *  $.map(array,[callback])按给定条件转换数组【使用频率一般】
     *      作为参数的转换函数会为每个数组元素调用，而且会给这个转换函数传递一个表示被转换的元素作为参数。
     *      转换函数可以返回转换后的值、null（删除数组中的项目）或一个包含值得数组，并扩展至原始数组中。
     *
     *      这是个很强的的方法，但并不常用，它可以根据特定条件，更新数组元素值，或根据原值扩展一个新的副本元素。
     */

    //var arrMap = $.map( arr1 , function(val){
    //    return val+"[新加]";
    //});
    //alert(arrMap);

//    ------------------------------------------------------------

    //var arrMap = $.map( arr1 , function(val){
    //    return val=="bbbb"?"[只给bbbb加]"+val:val;
    //});
    //alert(arrMap);

    //-------------------------------------------------------------

    //var arrMap = $.map( arr1 , function(val){
    //    // 为数组扩展一个新元素
    //    return [val,(val+'[扩展]')];
    //});
    //alert(arrMap);

    /**
     *  $.inArray( val , array )判断值是否存在于数组中【常用】
     * 解释: 确定第一个参数在数组中的位置, 从0开始计数(如果没有找到则返回-1)。
     * 记得indexOf()方法了吗? indexOf()返回字符串的首次出现位置,
     * 而$.inArray()返回的是传入参数在数组中的位置,
     * 同样的,如果找到的,返回的是一个大于或等于0的值,若未找到则返回-1.现在, 知道怎么用了吧. 有了它, 判断某个值是否存在于数组中,就变得轻而易举了。
     */
    //alert(arr1.indexOf("cccc"));
    //if($.inArray(arr1,"cccc")) alert("cccc存在数组arr1中");
    //if($.inArray(arr1,"eeee")) alert("eeee不存在数组arr1中");

    /**
     *  $.merge( first , second )合并两个数组【使用频率一般】
     *  解释：返回的结果会修改第一个数组的内容
     *  第一个数组的元素后面跟着第二个数组的元素
     *  这个方法是用jQuery的方法替代原生concat（）方法
     *  但功能并没有concat（）强大，concat（）可以同时合并多个数组
     */

    //var arrMerge1=["绿巨人","雷神"];
    //var arrMerge2=["卡尔","阿尔萨斯"];
    //alert($.merge(arrMerge1,arrMerge2));
    //alert(arrMerge1.concat(arrMerge2,"原生concat方法","可以合并多个"));

    /**
     *  $.unique(array)过滤数组中重复元素【不常用】
     *  解释：删除数组中重复元素，只处理删除DOM元素数组，而不能处理字符串或者数字数组。
     */

    /**
     *  $.makeArray(obj) 将类数组对象转换为数组【不常用】
     *  解释：将类数组对象转换为数组对象，类数组对象有length属性，其成员索引为0-length-1
     *  这是个多余的方法, 无所不能的$本来就包含了这个功能。jQuery官网上解释的非常模糊，其实, 它就是将某个类数组对象(比如用getElementsByTagName获取的元素对象集合)转换成数组对象。
     */











});