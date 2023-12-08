let mystart = document.querySelector('#start');
let mystop = document.querySelector('#stop');
let myreset = document.querySelector('#reset');
let display = document.querySelector('#displayTime');


let timeseconds = 200;
let time;
function timerdisplay(){
    let minutes = Math.floor(timeseconds / 60);
    let seconds = timeseconds % 60;
    display.textContent=`${minutes}m : ${seconds}s`;
    timeseconds--;

    if(timeseconds >= 0){
        time = setTimeout(timerdisplay,1000)
    }
    else{
        display.innerHTML=`Time's Up!`;
    }
}


mystart.addEventListener('click', function(){
    // console.log('start');
    timerdisplay()
})

mystop.addEventListener('click', function(){
    // console.log('stop');
    clearInterval(time);
})

myreset.addEventListener('click', function(){
    // console.log('reset');
    clearInterval(time);
    minutes=0;
    seconds=0;
    display.innerHTML=`${minutes}m : ${seconds}s`
})