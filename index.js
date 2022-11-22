let a=document.getElementsByClassName('box');
let b=Array.from(a)
let audio=new Audio('click.wav');
let winSound=new Audio('win.mp3');
let looseSound=new Audio('loose.mp3');
let turn ='X'
let ch=false;
const change=()=>{
    if (turn=='X'){
        return turn='O'
    }else{
        return turn= 'X'
    }
}
const checkWin=()=>{
    let win=[[0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [2,4,6]]
    win.forEach(e=>{
        if (document.getElementById(e[0]).innerText==document.getElementById(e[1]).innerText && document.getElementById(e[1]).innerText==document.getElementById(e[2]).innerText && document.getElementById(e[0]).innerText!=""){
            document.getElementsByClassName('turn')[0].style.fontSize='30px';
            document.getElementsByClassName('turn')[0].style.color='green';
            document.getElementsByClassName('turn')[0].innerText=document.getElementById(e[1]).innerText + ' won';
            ch=true 
            document.querySelector('#gif img').style.width='200px';
            winSound.play();
        }
         
    })
     
}


const check=()=>{
    let lis=[]
    for (let i=0 ;i<9 ;i++){
        if (document.getElementById(i).innerText!="" && ch==false){
            lis.push(1);
        }
    }
    if (lis.length==9){
        document.querySelector('#over img').style.width='200px';
        looseSound.play();
    }
}



b.forEach((e)=>{
    e.addEventListener("click",()=>{
        if (e.innerText==''){
            e.innerText=turn;
            audio.play()
            change();
            checkWin();
            if (ch==false){
                document.getElementsByClassName('turn')[0].innerText='Turn of '+turn;
            } 
            check();
        }
    })
     
})

// reset button
document.getElementById('reset').addEventListener('click',()=>{
    for (let i=0 ;i<9; i++){
        document.getElementById(i).innerText="";
    }
    turn='X'
    ch=false;
    document.getElementsByClassName('turn')[0].style.fontSize='20px';
    document.getElementsByClassName('turn')[0].innerText='Turn of '+turn;
    document.querySelector('#gif img').style.width='0px';
    document.querySelector('#over img').style.width='0px';
    document.getElementsByClassName('turn')[0].style.color='black';
})

 