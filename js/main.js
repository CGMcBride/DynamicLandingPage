// Document Object Model (DOM) Elements
const time= document.getElementById('time'),
greeting = document.getElementById('greeting'),
name = document.getElementById('name'),
focus = document.getElementById('focus');

// Show the time function
function showTime(){
    let today= new Date(),
    hour = today.getHours(),
    min = today.getMinutes(),
    sec = today.getSeconds(),
     month = today.getMonth(),
     year = today.getFullYear();

    // Set AM or PM
    const amPm = hour >= 12 ? 'PM' : 'AM';

    // 12hr Format
    hour = hour % 12 || 12;

    // Output the time
    time.innerHTML= `${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(sec)}`;
    

    setTimeout(showTime,1000);
}

// add Zeros
function addZero(n){
    return (parseInt(n, 10) < 10 ? '0' : '') + n;
}

// Set Background and Greeting
function setBackGr(){
    let currentDate = new Date(),
    currentHour = currentDate.getHours();

    if(currentHour < 12 ){
        // Morning
        document.body.style.backgroundImage = "url('img\IMG_0388.jpg')";
        greeting.textContent = 'Good Morning'
    } else if( hour < 18){
        // Afternoon
        document.body.style.backgroundImage = "url('img\IMG_0394.jpg')";
        greeting.textContent = 'Good Afternoon'
    } else {
        //  Evening
        document.body.style.backgroundImage = "url('img\IMG_3002(Edited).jpg')";
        greeting.textContent = 'Good Evening'
    }
}

// Run
showTime();