/**
 * Created by Administrator on 2015/11/15.
 */

var xuxusheng={"name":"xuxusheng","age":22,"school":"hubeidaxue","gf":{"name":"liufangling","age":24,"school":"hubeidaxue"}}

var jsonText=JSON.stringify(xuxusheng);

console.log(xuxusheng);
console.log(jsonText);

var xuxushengCopy=JSON.parse(jsonText);

console.log(xuxushengCopy);