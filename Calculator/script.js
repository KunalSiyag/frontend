var input = document.getElementById("inputbox");
var buttons = document.querySelectorAll("button");
var arr = Array.from(buttons);
var temp = "";
var btnsound = new Audio('media/btnsound.wav');
var ACsound = new Audio('media/AC sound.wav');
var equate = new Audio('media/equate.wav');
    arr.forEach(btn =>{
        btn.addEventListener('click',(passed) =>{
            if(passed.target.innerHTML == '='){
                temp = eval(temp);
                input.value = temp;
                equate.play();
            }
            else if(passed.target.innerHTML == "AC" ){
                temp = "";
                input.value = temp;
                ACsound.play();
            }
            else{
                temp += passed.target.innerHTML;
                input.value = temp;
                btnsound.play();
            }
        })
    })
