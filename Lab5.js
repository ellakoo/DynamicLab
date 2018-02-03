var myInp = document.getElementById("num");
var DisplayDiv = document.getElementById("numDisplay");
var answer = Math.round(Math.random()*100);
var score = 100;

document.getElementById("guess").addEventListener("click", function() {
    //console.log("hi");
    //document.body.style.backgroundColor = "red";
    
    //console.log(parseInt("10")+1);
    var realNum = parseInt(myInp.value);
    
    if (realNum == answer){
        DisplayDiv.innerText = "WOOHOO! You are CORRECT! Score: "+score;
    } else {
        //DisplayDiv.innerText = "WRONG!";
        if(realNum > answer){
            DisplayDiv.innerHTML = "Too big :(";
        } else if (realNum < answer){
            DisplayDiv.innerHTML = "Too small :(";
        }
        score = score - 1;
    }
});