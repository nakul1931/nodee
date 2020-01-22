// window.setTimeout(function(){
alert("Connected")
var a = [];
var cmmd = "move"
while(cmmd!="quit")
{
cmmd = prompt("What would you like to do");
if(cmmd==="new")
{
    var value1 = prompt("Enter");
    a.push(value1);
}
if(cmmd==="list")
{
    console.log(a)
}
if(cmmd==="quit")
{
    break;
}
// else
// {

//     alert("Enter the right command")
// }
}
// },500);
