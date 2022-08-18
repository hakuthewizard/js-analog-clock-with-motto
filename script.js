const hour = document.querySelector(".hour");
const minute = document.querySelector(".minute");
const second = document.querySelector(".second");

    function timeNow () {
        const now = new Date();
        const theHour = now.getHours();
        const theMins = now.getMinutes();
        const theSecs = now.getSeconds();

 const hourRotation = 30 * theHour + theMins / 2; 
 const minRotation = 6 * theMins;
 const secRotation = 6 * theSecs;

 hour.style.transform = `rotate(${hourRotation}deg)`;
 minute.style.transform = `rotate(${minRotation}deg)`;
 second.style.transform = `rotate(${secRotation}deg)`;
}
setInterval(timeNow,1000);

let message = document.querySelector(".message");
let mainMessage = document.querySelector(".mainMessage");

message.addEventListener('click', whatTodo)
function whatTodo() {
    mainMessage.classList.add('visible')
}
