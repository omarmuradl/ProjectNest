let hourElement = document.querySelector(".hour-show");
let minuteElement = document.querySelector(".minute-show");
let secondElement = document.querySelector(".second-show");

function Time() {
   
    // aktuelle Zeit bekommen
    
    let time = new Date();
    
    let hour = time.getHours();
    
    let minute = time.getMinutes();
    
    let second = time.getSeconds();

    
    let hourGrad = (hour / 12) * 360;

    let minuteGrad = (minute / 60) * 360;

    let secondGrad = (second / 60) * 360;

    hourElement.style.transform = `rotate(${hourGrad}deg)`;

    minuteElement.style.transform = `rotate(${minuteGrad}deg)`;
    
    secondElement.style.transform = `rotate(${secondGrad}deg)`;

   }

Time();

setInterval(Time, 1000)