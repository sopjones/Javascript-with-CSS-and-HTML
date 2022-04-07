
let userNum = document.getElementById("getNumber");
userNnum.addEventListener("keydown", function (e) {
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
    let run = Math.floor(math.random() * 10);
    let x = document.getElementById("random").innerHTML = ran;
    x.innerHTML = ran;
    x.style.backgroundColor = "green";
    x.style.color = "white";
    return ran;
}

function userNumber(){
   let user = document.getElementById("getNumber").value;
   let y = document.getElementById("userNumber");
    alert(user);
    y.innerHTML = user;
    y.style.color = "white";
    y.style.backgroundcolor = orange;
    y.style.padding = "20px";
    y.style.textAlign = "center";
    return user;
    
}

function compareNumber(){
    let a = userNumber();
    let b = randomNumber();
    let z = document.getElementById("compare");
    let c = document.getElementById("counter");

    if (a!=b){
        z.innerHTML = "Numbers are not the same.Computer get " + b + ", and user got " + a;
        z.innerHTML = user;
        z.style.color = "white";
        z.style.backgroundcolor = orange;
        z.style.padding = "20px";
        z.style.textAlign = "center";
        counter++;
        c.innerHTML = "You have tried " + counter + " times."
        c.innerHTML = "Numbers are not the same.Computer get " + b + ", and user got " + a;
        c.innerHTML = user;
        c.style.color = "white";

        return user;
    } else if ( a == b) {
        z.innerHTML = "Numbers are the same.Computer get " + b + ", and user got " + a;
        z.style.color = "white";
        z.style.backgroundcolor = "pink";
        z.style.padding = "20px";
        z.style.textAlign = "center";
        counter = 0;
        c.innerHTML = "You have tried " + counter + " times to get it right."
        c.innerHTML = "Numbers are not the same.Computer get " + b + ", and user got " + a;
        c.innerHTML = user;
        c.style.color = "white";

    }

    resetInput();

}

function resetInput(){
    document.getElementById("getNumber").value = "";
}