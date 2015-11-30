/**
 * Created by Administrator on 2015/11/15.
 */


$(document).ready(function(){
    //$(this).addClass("current").next().show().parent().siblings().children("a").removeClass("current").next().hide();
    var $level1_a=$(".level1 > a");
    //var $level2=$(".level2");
    $level1_a.on("click",function(){
        $(this).addClass("current").next(".level2").slideToggle().parent().siblings().children("a").removeClass("current").next().slideUp();
    });




});