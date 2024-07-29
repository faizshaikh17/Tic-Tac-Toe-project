let boxes = document.querySelectorAll(".box");
let btns = document.querySelectorAll("#btn");
let msg = document.querySelector(".msg");

let turn0 = true;
btns.forEach((btn)=>{
    btn.addEventListener("click",()=>{
        if (turn0) {
            btn.innerText="O";
            turn0 = false;            
        } else {
            btn.innerText="X";
            turn0 = true;   
        }
        btn.disabled = true;
        checkWinner();

    })
})

const winPatterns = [ [0,1,2] , [3,4,5] , [6,7,8] , [0,3,6] , [1,4,7] , [2,5,8] , [0,4,8] , [2,4,6] ];

const checkWinner = ()=>{
for(let Pattern of winPatterns){
    // console.log(btns[Pattern[0]].innerText,btns[Pattern[1]].innerText,btns[Pattern[2]].innerText);
    let pval1 = btns[Pattern[0]].innerText;
    let pval2 = btns[Pattern[1]].innerText;
    let pval3 = btns[Pattern[2]].innerText;

    if(pval1 !="" && pval2 !="" && pval3 !=""){
        if(pval1===pval2 && pval2===pval3){
            console.log(pval1,"Winner");
            disabledBtns();
        }
       
    }
    
}
}

const disabledBtns = ()=>{
    for(btn of btns){
        btn.disabled = true;
    }
}

let resetbtn = document.querySelector("#reset-btn");

resetbtn.addEventListener("click",()=>{
    for(btn of btns){
        btn.disabled = false;
    }
    clrval();
})

let clrval = ()=>{
    for(btn of btns){
        btn.innerText="";
    }
}

// if(pval1.innerText="O"){
//     turn0 = true;
// }
// else{
//     turn0 = false
// }

let hiddenmsg = () =>{
    msg.classList.remove("msg")
}