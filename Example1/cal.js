var count=0;
function sum(){
    count++;
    
    var x = document.getElementById("one").value;
    var y = document.getElementById("two").value;
    var z = document.getElementById("three").value;
    var sum = Number(x)+Number(y);
    document.getElementById("result").innerHTML=sum;
    document.getElementById("result1").innerHTML=z.length;
    document.getElementById("result2").innerHTML="Count is:"+count;
}
