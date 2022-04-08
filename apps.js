
let userNum = document.getElementById("getNumber");
userNum.addEventListener("keydown", function (e) {
    if (e.keyCode == 13){
        run(e);
    }

});

userNum.focus();

let counter = 0;

function run(){
    document.getElementById("paragraph").innerHTML = "Hello world!";
    document.getElementById("paragraph").style.backgroundColor = "green";
    document.getElementById("paragraph").style.color = "white";
    randomNum();
    userNumber();
    compareNumbers();
    
}

function randomNum() {
    let ran = Math.floor(Math.random() * 10);
    let x = document.getElementById("random");
    x.innerHTML = ran;
    x.style.backgroundColor = "green";
    x.style.color = "white";
    return ran;
}

function userNumber(){
   let user = document.getElementById("getNumber").value;
   let y = document.getElementById("userNumber");
    y.innerHTML = user;
    y.style.color = "white";
    y.style.backgroundcolor = "orange";
    y.style.padding = "20px";
    y.style.textAlign = "center";
    return user;
    
}

function compareNumbers(){
    let a = userNumber();
    let b = randomNum();
    let z = document.getElementById("compare");
    let c = document.getElementById("counter");

    if (a!=b){
        z.innerHTML = "Numbers are not the same.Computer get " + b + ", and user got " + a;
        z.style.color = "orange";
        z.style.backgroundcolor = "white";
        z.style.padding = "20px";
        z.style.textAlign = "center";
        counter++;
        c.innerHTML = "You have tried " + counter + " times."
        c.innerHTML = "Numbers are not the same.Computer get " + b + ", and user got " + a;
        c.style.color = "white";

    } else if ( a == b) {
        z.innerHTML = "Numbers are the same.Computer get " + b + ", and user got " + a;
        z.style.color = "blue";
        z.style.backgroundColor = "pink";
        z.style.padding = "20px";
        z.style.textAlign = "center";
        counter = 0;
        c.innerHTML = "You have tried " + counter + " times to get it right."
        c.style.color = "pink";

    }

    resetInput();

}

function resetInput(){
    document.getElementById("getNumber").value = "";
}