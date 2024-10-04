let hourElement = document.querySelector(".hour-show");

let minuteElement = document.querySelector(".minute-show");

let secondElement = document.querySelector(".second-show");

function Time() {  

    // aktuelle Zeit bekommen
    
    let time = new Date();
    
    let hour = time.getHours();
    
    let minute = time.getMinutes();
    
    let second = time.getSeconds();

}

console.log(Time());

