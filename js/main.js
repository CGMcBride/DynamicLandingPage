// Document Object Model (DOM) Elements
//import { backgroundImages } from './config.js';
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
    month = today.toLocaleString('default', { month: 'long' }),
     year = today.getFullYear();

    // Set AM or PM
    const amPm = hour >= 12 ? 'PM' : 'AM';

    // 12hr Format
    hour = hour % 12 || 12;

    // Output the time
    time.innerHTML= `${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(sec)}<span> ${amPm}</span><br>${month} ${year}`;    

   // setBackGr(); // Call setBackGr function to update background image and greeting

    setTimeout(showTime,1000);
}

// add Zeros
function addZero(n){
    return (parseInt(n, 10) < 10 ? '0' : '') + n;
}

// Set Background and Greeting
function setBackGr(){
    let today = new Date(),
    hour = today.getHours();

    if(hour < 12 ){
        // Morning
        document.body.style.backgroundImage = "url('..img/IMG_0388.jpg')";
        greeting.textContent = 'Good Morning'
    } else if( hour < 18){
        // Afternoon
        document.body.style.backgroundImage = "url('https://www.google.com/url?sa=i&url=https%3A%2F%2Ffreenaturestock.com%2Fbright-afternoon%2F&psig=AOvVaw106_5olLhDTNkZV4ps1cYo&ust=1696099979712000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCLD9wfi-0IEDFQAAAAAdAAAAABAE')";
        greeting.textContent = 'Good Afternoon'
    } else {
        //  Evening
        document.body.style.backgroundImage = "url('..img/IMG_3002(Edited).jpg')";
        greeting.textContent = 'Good Evening'
    }
}
/*function setBackGr(){
    let currentDate = new Date(),
    currentHour = currentDate.getHours();

    if(currentHour < 12 ){
        // Morning
        document.body.style.backgroundImage = backgroundImages.morning;
        greeting.textContent = 'Good Morning'
    } else if( currentHour < 18){
        // Afternoon
        document.body.style.backgroundImage = backgroundImages.afternoon;
        greeting.textContent = 'Good Afternoon'
    } else {
        //  Evening
        document.body.style.backgroundImage = backgroundImages.evening;
        greeting.textContent = 'Good Evening'
    }
}*/
// Run
showTime();