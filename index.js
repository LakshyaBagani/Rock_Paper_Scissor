
const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissor = document.getElementById("scissor");
const dis = document.getElementById("div");
const reset = document.getElementById("reset");
const any = document.getElementById("any");
const ans = document.getElementById("ans");

rock.addEventListener('click' , ()=>{

    let a = Math.floor(Math.random() * 100)
    let b;

    if(a<=50){
        b = "Scissor";
    }
    else{
        b = "Paper";
    }

    dis.innerHTML = "Rock";
    any.innerHTML = b;

    if(a<=50){
        ans.innerHTML = "You Won";
    }
    else{
        ans.innerHTML = "You Loose";
    }

})

paper.addEventListener('click' , ()=>{
    
    let a = Math.floor(Math.random() * 100)
    let b;

    if(a<=50){
        b = "Rock";
    }
    else{
        b = "Scissor";
    }

        dis.innerHTML = "Paper";
        any.innerHTML = b;

        if(a<=50){
            ans.innerHTML = "You Won";
        }
       
        else{
            ans.innerHTML = "You Loose";
        }

    })

scissor.addEventListener('click' , ()=>{

    let a = Math.floor(Math.random() * 100)
    let b;

    if(a<=50){
        b = "Rock";
    }
    else{
        b = "Paper";
    }

        dis.innerHTML = "Scissor";
        any.innerHTML = b;

        if(a<=50){
            ans.innerHTML = "You Loose";
        }
        else{
            ans.innerHTML = "You Won";
        }
    })

reset.addEventListener('click' , ()=>{
    dis.innerHTML = "Your Input ?" ;
    any.innerHTML = "Computers Input ?";
    ans.innerHTML = "Winner ?";
})



