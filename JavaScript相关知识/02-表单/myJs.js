/**
 * Created by Administrator on 2015/11/15.
 */

window.onload=ready;
var myForm,myInput,btn_change,btn_focus,btn_disabled,btn_changeType;
function ready(){
    myForm=document.getElementById("myForm");
    myInput=myForm.elements[0];
    btn_change=document.getElementById("btn-change");
    btn_focus=document.getElementById("btn-focus");
    btn_disabled=document.getElementById("btn-disabled");
    btn_changeType=document.getElementById("btn-changeType");

    btn_change.addEventListener("click",change);
    btn_focus.addEventListener("click",focus);
    btn_disabled.addEventListener("click",disabled);
    btn_changeType.addEventListener("click",changeType)
}

function change(){
    myInput.value="abcdefg";        //修改value属性值
}
function focus(){
    myInput.focus();            //把焦点设置到当前元素
}


function disabled(){
    myInput.disabled=true;      //禁用当前
}

function changeType(){
    myInput.type="radio";      //修改type属性，不推荐，但对<input>来说是可行的
}