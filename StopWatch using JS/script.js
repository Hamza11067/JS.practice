let [milliseconds, seconds, minutes, hours] = [0,0,0,0];
let timeRef = document.querySelector('.timer-display');
const startTimer = document.querySelector('.start');
const pauseTimer = document.querySelector('.pause');
const resetTimer = document.querySelector('.reset');

let int = null;

startTimer.addEventListener('click',() =>{
    if (int !== null) {
        clearInterval(int)        
    }
    int = setInterval(displayTimer, 10);
    startTimer.classList.add('remove');
});

pauseTimer.addEventListener('click', () =>{
    clearInterval(int)
    startTimer.classList.remove('remove');
    startTimer.innerHTML = "Resume";
});



resetTimer.addEventListener('click', () =>{
    clearInterval(int);
    [milliseconds, seconds, minutes, hours] = [0, 0, 0, 0];
    timeRef.innerHTML = "00 : 00 : 00 : 000 ";
    startTimer.innerHTML = "Start";
    startTimer.classList.remove('remove');
});

function displayTimer () {
    milliseconds += 10
    if (milliseconds == 1000) {
        milliseconds = 0
        seconds ++
        if (seconds == 60) {
            seconds = 0
            minutes++
            if (minutes == 60) {
                minutes = 0
                hours++                
            }            
        }        
    }

    let h = hours < 10 ? '0' + hours : hours
    let m = minutes < 10 ? '0' + minutes : minutes
    let s = seconds < 10 ? '0' + seconds : seconds
    let ms = milliseconds < 10 ? '00' + milliseconds :
             milliseconds < 100 ? '0' + milliseconds : milliseconds

    timeRef.innerHTML = `${h} : ${m} : ${s} : ${ms}`;
};